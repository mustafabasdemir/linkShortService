using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Service.Interfaces
{
    public interface INotificationService
    {
        void SendDeviceChangeEmail(string email, string ipAddress, string userAgent);
    }
}
