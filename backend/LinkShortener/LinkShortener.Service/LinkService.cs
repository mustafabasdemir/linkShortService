﻿using LinkShortener.Core.Entities;
using LinkShortener.Data;
using Microsoft.EntityFrameworkCore;
using System.Text;
using LinkShortener.Services.ErrorHandling;

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
        var links = await _context.Links.ToListAsync();

        if (links == null || !links.Any())
        {
            ExceptionHelper.ThrowError(ErrorMessages.LinksNotFound);
        }

        return links;
    }

    // Link ekle
    public async Task<Link> CreateLinkAsync(Link link)
    {
        if (string.IsNullOrEmpty(link.OriginalUrl))
        {
            ExceptionHelper.ThrowError(ErrorMessages.OriginalUrlEmpty);
        }

        // kısa url uret
        string shortCode = GenerateShortCode(link.OriginalUrl);
        string apiBaseUrl = "https://localhost:7256/r/";
        link.ShortUrl = $"{apiBaseUrl}{shortCode}";

        try
        {
            _context.Links.Add(link);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            ExceptionHelper.ThrowError(ErrorMessages.InternalServerError);
        }

        return link;
    }

    // Link sil
    public async Task<Link> DeleteLinkAsync(int id)
    {
        var link = await _context.Links.FindAsync(id);

        if (link == null)
        {
            ExceptionHelper.ThrowError(ErrorMessages.LinkNotFound);
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
        var link= await _context.Links.FirstOrDefaultAsync(l => l.ShortUrl.EndsWith(shortCode));
        if (link == null)
        {
            ExceptionHelper.ThrowError(ErrorMessages.InvalidShortCode);
        }
        return link;
    }
}
