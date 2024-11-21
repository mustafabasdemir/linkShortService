using LinkShortener.Core.Entities;

namespace LinkShortener.Service.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(User user);
        bool ValidateToken(string token);
        User? DecodeToken(string token);
    }
}
