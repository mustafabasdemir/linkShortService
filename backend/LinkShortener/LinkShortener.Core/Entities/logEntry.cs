using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Core.Entities
{
    public class LogEntry
    {
        public int Id { get; set; } 
        public string Message { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty; 
        public DateTime TimeStamp { get; set; } = DateTime.UtcNow;
        public string? Exception { get; set; }
        public string? Properties { get; set; } // sonradan eklenecek bi seyler olabilri
    }
}
