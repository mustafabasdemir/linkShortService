using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Core.Entities
{
    public class Log
    {
        public int Id { get; set; } // Primary Key
        public string Message { get; set; } = string.Empty; // Log Mesajı
        public string Level { get; set; } = string.Empty; // Log Seviyesi (Info, Error vb.)
        public DateTime TimeStamp { get; set; } = DateTime.UtcNow; // Zaman Damgası
        public string? Exception { get; set; } // Hata Detayı (varsa)
        public string? Properties { get; set; } // Ek Bilgiler (JSON formatında olabilir)
    }
}
