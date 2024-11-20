using LinkShortener.Core.Entities;

public interface ILinkService
{
    Task<List<Link>> GetAllLinksAsync();
    Task<Link> CreateLinkAsync(Link link);
    Task<Link> DeleteLinkAsync(int id);
}
