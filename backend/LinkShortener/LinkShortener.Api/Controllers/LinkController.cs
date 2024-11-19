using LinkShortener.Core.Entities;
using LinkShortener.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class LinkController : ControllerBase
{
    private readonly LinkShortDbContext _context;

    public LinkController(LinkShortDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var links = await _context.Links.ToListAsync();
        return Ok(links);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Link link)
    {
        _context.Links.Add(link);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAll), new { id = link.Id }, link);
    }
}
