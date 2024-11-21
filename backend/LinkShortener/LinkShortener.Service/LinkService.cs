using LinkShortener.Core.Entities;
using LinkShortener.Data;
using Microsoft.EntityFrameworkCore;
using System.Text;

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
        if (string.IsNullOrEmpty(link.OriginalUrl))
        {
            throw new ArgumentException("Orijinal URL boş olamaz.");
        }

        // kısa url uret
        string shortCode = GenerateShortCode(link.OriginalUrl);
        string apiBaseUrl = "https://localhost:7256/"; // API urlsi
        link.ShortUrl = $"{apiBaseUrl}{shortCode}";

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

    private string GenerateShortCode(string originalUrl)
    {
        using (var sha256 = System.Security.Cryptography.SHA256.Create())
        {
            byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(originalUrl + DateTime.UtcNow));
            return Convert.ToBase64String(hashBytes)
                .Replace("+", "")
                .Replace("/", "")
                .Replace("=", "")
                .Substring(0, 8); //kısa url 8 karakter olsun hash şle
        }
    }

    public async Task<Link?> GetLinkByShortCodeAsync(string shortCode)
    {
        return await _context.Links.FirstOrDefaultAsync(l => l.ShortUrl.EndsWith(shortCode));
    }
}
