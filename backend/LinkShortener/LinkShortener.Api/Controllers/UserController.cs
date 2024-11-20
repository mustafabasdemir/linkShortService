using LinkShortener.Core.Entities;
using LinkShortener.Core.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LinkShortener.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;


        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // Kullanıcı Listeleme
        [HttpGet]
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

            // Links koleksiyonunu boş bırakıyoruz
            user.Links = new List<Link>();

            // Kullanıcıyı veritabanına ekle
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
        public async Task<IActionResult> GetLinksByUserId(int userId)
        {
            var userLinks = await _userService.GetLinksByUserIdAsync(userId);

            if (userLinks == null || userLinks.Count == 0)
            {
                return NotFound("Bu kullanıcıya ait link bulunamadı.");
            }

            return Ok(userLinks);
        }

    }
}
