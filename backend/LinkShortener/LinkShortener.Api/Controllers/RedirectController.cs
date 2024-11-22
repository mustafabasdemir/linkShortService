using LinkShortener.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

[ApiController]
[Route("r")]
public class RedirectController : ControllerBase
{
    private readonly LinkShortDbContext _context;

    public RedirectController(LinkShortDbContext context)
    {
        _context = context;
    }

    [HttpGet("{shortCode}")]
    public async Task<IActionResult> RedirectShortLink(string shortCode)
    {
        // Kısa kodu veritabanında bul
        var link = await _context.Links.FirstOrDefaultAsync(l => l.ShortUrl.EndsWith($"/r/{shortCode}"));

        if (link == null)
        {
            return NotFound("Bu kısa link bulunamadı.");
        }

        // Orijinal URL'ye yönlendirme
        return Redirect(link.OriginalUrl);
    }
}
