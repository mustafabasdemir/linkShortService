using LinkShortener.Core.Entities;
using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Service.Interfaces;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using LinkShortener.Core.DTOs;
using LinkShortener.Service;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using LinkShortener.Services.ErrorHandling;
using LinkShortener.Api.Filters;

namespace LinkShortener.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly TokenCacheService _tokenCacheService;
        private readonly IUserService _userService;
        private readonly INotificationService _notificationService; // NotificationService'i burada enjekte ettik

        // Constructor'a NotificationService'i ekliyoruz
        public UserController(ITokenService tokenService, IUserService userService, INotificationService notificationService, TokenCacheService tokenCacheService)
        {
            _tokenService = tokenService;
            _userService = userService;
            _notificationService = notificationService; 
            _tokenCacheService = tokenCacheService;
        }

        // Kullanıcı Listeleme
        [HttpGet]
        [Authorize]
        [ServiceFilter(typeof(ValidateUserTokenFilter))]
        public async Task<IActionResult> GetAll()
        {
            
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        // Kullanıcı Ekleme
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("Kullanıcı verisi boş olamaz.");
            }

            // Links yollama gerek yok bos yolla
            user.Links = new List<Link>();

            await _userService.AddUserAsync(user);

            return Ok(user);
        }

        // Kullanıcı Silme
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _userService.DeleteUserAsync(id);
            return NoContent();
        }


        [HttpGet("{userId}/links")]
        [Authorize]
        [ServiceFilter(typeof(ValidateUserTokenFilter))]
        public async Task<IActionResult> GetLinksByUserId(int userId)
        {
            var userLinks = await _userService.GetLinksByUserIdAsync(userId);

            if (userLinks == null || userLinks.Count == 0)
            {
                return NotFound("Bu kullanıcıya ait link bulunamadı.");
            }

            return Ok(userLinks);
        }

        // login işlemi
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Core.DTOs.LoginRequest request)
        {
            var user = await _userService.GetUserByEmailAsync(request.Email);

            if (user == null)
            {
                return Unauthorized("Kullanıcı bulunamadı.");
            }

            var isPasswordValid = await _userService.VerifyPasswordAsync(user, request.Password);

            if (!isPasswordValid)
            {
                return Unauthorized("Geçersiz şifre.");
            }

            var ipAddress = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "IP Alınamadı";
            var userAgent = HttpContext.Request.Headers["User-Agent"].ToString();

            // cihaz kontorluk
            var hasDeviceChanged = await _userService.HasUserDeviceChangedAsync(user.Id, ipAddress, userAgent);
            if (hasDeviceChanged)
            {
                //cihaz değiştiryse mail gidecek
                _notificationService.SendDeviceChangeEmail(user.Email, ipAddress, userAgent);
            }

            //cihazı vt ye kaydet
            await _userService.SaveLoginHistoryAsync(user.Id, ipAddress, userAgent);

            var token = _tokenService.GenerateToken(user);
            _tokenCacheService.SetToken($"UserToken_{user.Id}", token);
            var decodeToken = _tokenService.DecodeToken(token);

            return Ok(new { Token = token, DecodeToken = decodeToken });
        }


        [HttpPost("logout")]
        [Authorize]
        public IActionResult Logout([FromServices] TokenCacheService tokenCacheService)
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!string.IsNullOrEmpty(userId))
            {
                tokenCacheService.RemoveToken(userId);
            }

            return Ok("Çıkış yapıldı.");
        }

        // Token doğrulama (JWT)
        [HttpPost("validate-token")]
        public IActionResult ValidateToken([FromBody] string token)
        {
            var isValid = _tokenService.ValidateToken(token);

            if (!isValid)
            {
                return Unauthorized("Geçersiz token.");
            }

            return Ok("Token geçerli.");
        }

        // Token çözümle
        [HttpPost("decode-token")]
        public IActionResult DecodeToken([FromBody] string token)
        {
            var user = _tokenService.DecodeToken(token);

            if (user == null)
            {
                return Unauthorized("Geçersiz token.");
            }

            return Ok(user);
        }

    }
}
