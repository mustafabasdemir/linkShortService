using LinkShortener.Core.Entities;
using LinkShortener.Service.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using YourProject.Services.ErrorHandling;

public class TokenService : ITokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    // Token olsutur
    public string GenerateToken(User user)
    {
        if (user == null)
        {
            ExceptionHelper.ThrowError(ErrorMessages.UserNotFound);
        }

        var claims = new[]
        {
            //token içine gerekli bilgileri ekl
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()) 
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            issuer: "shorts-Link", 
            audience: "react-shorts-link", 
            claims: claims,
            expires: DateTime.Now.AddDays(1), // 1 saat gecerli yeterr
            signingCredentials: creds 
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    // Token doğrulama
    public bool ValidateToken(string token)
    {
        try
        {
            if (string.IsNullOrEmpty(token))
            {
                // Token null
                ExceptionHelper.ThrowError(ErrorMessages.InvalidTokenFormat); 
                return false;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]);
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidIssuer = "shorts-Link",
                ValidAudience = "react-shorts-link",
                IssuerSigningKey = new SymmetricSecurityKey(key)
            };

            // Token dogrulşa
            tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);
            return true;
        }
        catch (SecurityTokenExpiredException)
        {
            ExceptionHelper.ThrowError(ErrorMessages.ExpiredToken);
            return false;
        }
        catch (SecurityTokenException)
        {
            ExceptionHelper.ThrowError(ErrorMessages.InvalidToken); 
            return false;
        }
        catch (ArgumentException)
        {
            ExceptionHelper.ThrowError(ErrorMessages.InvalidTokenFormat); 
            return false;
        }
        catch (Exception)
        {
            ExceptionHelper.ThrowError(ErrorMessages.InternalServerError);
            return false;
        }
    }

    // Token cozelım
    public User? DecodeToken(string token)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]);
            var validatedToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            if (validatedToken == null)
            {
                ExceptionHelper.ThrowError(ErrorMessages.InvalidTokenFormat);
            }

            var userEmail = validatedToken?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;
            var userId = validatedToken?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (userEmail != null && userId != null)
            {
                var user = new User
                {
                    Email = userEmail,
                    Id = int.Parse(userId)
                };
                return user;
            }
            ExceptionHelper.ThrowError(ErrorMessages.InvalidToken);
        }
        catch
        {
            ExceptionHelper.ThrowError(ErrorMessages.InvalidToken);
        }

        return null;
    }

}
