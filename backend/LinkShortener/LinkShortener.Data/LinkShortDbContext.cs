using LinkShortener.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace LinkShortener.Data
{
    public class LinkShortDbContext : DbContext
    {
        public LinkShortDbContext(DbContextOptions<LinkShortDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } // User tablosu
        public DbSet<Link> Links { get; set; } // Link tablosu
        public DbSet<LogEntry> Logs { get; set; } // Log tablosu
        public DbSet<UserLoginHistory> UserLoginHistories { get; set; }  //cihaz tespiti için
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User-Link ilişkisi
            modelBuilder.Entity<User>()
                        .HasMany(u => u.Links)               // Bir User birden fazla Link'e sahip olabilir
                        .WithOne()                            // Link yalnızca bir User'a bağlıdır
                        .HasForeignKey(l => l.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
