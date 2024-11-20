using LinkShortener.Core.Entities;

namespace LinkShortener.Core.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync(); 
        Task AddUserAsync(User user);           
        Task DeleteUserAsync(int id);             
        Task<List<Link>> GetLinksByUserIdAsync(int userId); 
    }
}
