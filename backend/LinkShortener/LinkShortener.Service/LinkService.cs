using LinkShortener.Core.Entities;
using LinkShortener.Data;
using Microsoft.EntityFrameworkCore;

public class LinkService : ILinkService
{
    private readonly LinkShortDbContext _context;

    public LinkService(LinkShortDbContext context)
    {
        _context = context;
    }

    // Tüm Linkleri getir
    public async Task<List<Link>> GetAllLinksAsync()
    {
        return await _context.Links.ToListAsync();
    }

    // Link ekle
    public async Task<Link> CreateLinkAsync(Link link)
    {
        _context.Links.Add(link);
        await _context.SaveChangesAsync();
        return link;
    }

    // Link sil
    public async Task<Link> DeleteLinkAsync(int id)
    {
        var link = await _context.Links.FindAsync(id);

        if (link == null)
        {
            return null;
        }

        _context.Links.Remove(link);
        await _context.SaveChangesAsync();
        return link;
    }
}
