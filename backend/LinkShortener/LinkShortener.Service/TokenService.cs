using LinkShortener.Core.Entities;
using LinkShortener.Service.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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
            claims: claims, // Claim'ler
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

            tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);
            return true; // Token geçerli
        }
        catch
        {
            return false;
        }
    }

    // Token çözelim
    public User? DecodeToken(string token)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]);
            var validatedToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            if (validatedToken == null)
            {
                return null;
            }

            // Token icindeki mail ve id yi alalım bi sey lazım olursa bak
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

            return null;
        }
        catch
        {
            return null;
        }
    }

}
