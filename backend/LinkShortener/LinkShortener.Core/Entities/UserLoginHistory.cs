using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Core.Entities
{
    public class UserLoginHistory
    {
        public int Id { get; set; } // Primary Key
        public int UserId { get; set; } // Hangi kullanıcı giriş yaptı
        public string IPAddress { get; set; } = string.Empty; // IP Adresi
        public string DeviceType { get; set; } = string.Empty; // Cihaz Türü (örneğin, Android, iOS, Windows)
        public string BrowserInfo { get; set; } = string.Empty; // Tarayıcı Bilgisi
        public DateTime LoginTime { get; set; } = DateTime.UtcNow; // Giriş Zamanı

        // Kullanıcı ile ilişki
        public User User { get; set; } = null!;
    }
}
