using LinkShortener.Core.Entities;
using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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
            return await _context.Users.ToListAsync();
        }

        public async Task AddUserAsync(User user)
        {
            var passwordHasher = new PasswordHasher<User>(); //password hash
            user.PasswordHash = passwordHasher.HashPassword(user, user.PasswordHash);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Link>> GetLinksByUserIdAsync(int userId)
        {
            var userLinks = await _context.Links
                .Where(link => link.UserId == userId)
                .ToListAsync();
            return userLinks;
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        // Şifre doğrulama
        public async Task<bool> VerifyPasswordAsync(User user, string password)
        {
            var passwordHasher = new PasswordHasher<User>();
            var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            return result == PasswordVerificationResult.Success;
        }



    }
}
