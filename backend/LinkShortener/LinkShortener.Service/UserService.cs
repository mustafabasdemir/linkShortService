using LinkShortener.Core.Entities;
using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using LinkShortener.Services.ErrorHandling;

namespace LinkShortener.Core.Services
{
    public class UserService : IUserService
    {
        private readonly LinkShortDbContext _context;

        public UserService(LinkShortDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            var users = await _context.Users.ToListAsync();
            if (users == null || !users.Any())
            {
                ExceptionHelper.ThrowError(ErrorMessages.UserNotFound);
            }
            return users;
        }

        public async Task AddUserAsync(User user)
        {
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUser != null)
            {
                ExceptionHelper.ThrowError(ErrorMessages.UserAlreadyExists);
            }
            var passwordHasher = new PasswordHasher<User>(); // Password hash
            user.PasswordHash = passwordHasher.HashPassword(user, user.PasswordHash);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                ExceptionHelper.ThrowError(ErrorMessages.UserNotFound);
            }

            try
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                ExceptionHelper.ThrowError(ErrorMessages.InternalServerError);
            }
        }

        public async Task<List<Link>> GetLinksByUserIdAsync(int userId)
        {
            var userLinks = await _context.Links
                .Where(link => link.UserId == userId)
                .OrderByDescending(link => link.CreatedUrl) 
                .ToListAsync();

            if (userLinks == null || !userLinks.Any())
            {
                ExceptionHelper.ThrowError(ErrorMessages.LinkNotFound);
            }

            return userLinks;
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                ExceptionHelper.ThrowError(ErrorMessages.UserNotFound);
            }

            return user;
        }

        // Şifre doğrulama
        public async Task<bool> VerifyPasswordAsync(User user, string password)
        {
            var passwordHasher = new PasswordHasher<User>();
            var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (result != PasswordVerificationResult.Success)
            {
                ExceptionHelper.ThrowError(ErrorMessages.InvalidPassword);
            }

            return result == PasswordVerificationResult.Success;
        }


        //giriş cihaz bilgileri
        public async Task SaveLoginHistoryAsync(int userId, string ipAddress, string userAgent)
        {
            var loginHistory = new UserLoginHistory
            {
                UserId = userId,
                IPAddress = ipAddress,
                BrowserInfo = userAgent,
                DeviceType = GetDeviceType(userAgent),
                LoginTime = DateTime.UtcNow
            };

            _context.UserLoginHistories.Add(loginHistory);
            await _context.SaveChangesAsync();
        }

        private string GetDeviceType(string userAgent)
        {
            if (userAgent.Contains("Android")) return "Android";
            if (userAgent.Contains("iPhone")) return "iPhone";
            if (userAgent.Contains("iPad")) return "iPad";
            if (userAgent.Contains("Windows")) return "Windows";
            return "Bilinmeyen Cihaz";
        }

        public async Task<bool> HasUserDeviceChangedAsync(int userId, string ipAddress, string userAgent)
        {
            var lastLogin = await _context.UserLoginHistories
                .Where(lh => lh.UserId == userId)
                .OrderByDescending(lh => lh.LoginTime)
                .FirstOrDefaultAsync();

            if (lastLogin == null)
            {
                // İlk kez giris yapanlar içinde gitsin
                return true;
            }

            var currentDeviceType = GetDeviceType(userAgent);

            // cihaz farklıysa gıdecek
            if (lastLogin.IPAddress != ipAddress ||
                lastLogin.DeviceType != currentDeviceType ||
                lastLogin.BrowserInfo != userAgent)
            {
                return true;
            }

            return false;
        }

    }
}
