using LinkShortener.Core.Entities;

namespace LinkShortener.Core.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync(); 
        Task AddUserAsync(User user);           
        Task DeleteUserAsync(int id);             
        Task<List<Link>> GetLinksByUserIdAsync(int userId);
        Task<User?> GetUserByEmailAsync(string email);
        Task<bool> VerifyPasswordAsync(User user, string password);
        Task SaveLoginHistoryAsync(int userId, string ipAddress, string userAgent);
        Task<bool> HasUserDeviceChangedAsync(int userId, string ipAddress, string userAgent);
    }
}
