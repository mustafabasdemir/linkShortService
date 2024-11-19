using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Core.Entities
{
    public class Link
    {
        public int Id { get; set; } // Primary
        public string OriginalUrl { get; set; } = string.Empty; // Uzun url
        public string ShortUrl { get; set; } = string.Empty; // Kısa urkl
        public DateTime CreatedUrl { get; set; } = DateTime.UtcNow;
        // İlişki
        public int UserId { get; set; } 
    }
}
