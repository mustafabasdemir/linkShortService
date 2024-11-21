using LinkShortener.Core.Entities;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class LinkController : ControllerBase
{
    private readonly ILinkService _linkService;

    public LinkController(ILinkService linkService)
    {
        _linkService = linkService;
    }

    // Tüm linkleri listele
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var links = await _linkService.GetAllLinksAsync();
        return Ok(links);
    }

    // Link ekle
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Link link)
    {
        if (link == null)
        {
            return BadRequest("Link verisi boş olamaz.");
        }

        var createdLink = await _linkService.CreateLinkAsync(link);
        return CreatedAtAction(nameof(GetAll), new { id = createdLink.Id }, createdLink);
    }

    // Link sil
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deletedLink = await _linkService.DeleteLinkAsync(id);

        if (deletedLink == null)
        {
            return NotFound("Link bulunamadı.");
        }

        return NoContent();
    }

    [HttpGet("{shortCode}")]
    public async Task<IActionResult> RedirectToOriginal(string shortCode)
    {
        var decodedUrl = Uri.UnescapeDataString(shortCode);

        // URL son kismi al
        var uri = new Uri(decodedUrl);
        var extractedShortCode = uri.Segments.Last();

        // Veritabanında kısa kodu ara
        var link = await _linkService.GetLinkByShortCodeAsync(extractedShortCode);

        if (link == null)
        {
            return NotFound("Kısa URL bulunamadı.");
        }
        return Ok(link.OriginalUrl);
    }
}
