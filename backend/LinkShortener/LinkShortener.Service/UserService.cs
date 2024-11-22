using LinkShortener.Core.Entities;
using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using YourProject.Services.ErrorHandling;

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



    }
}
