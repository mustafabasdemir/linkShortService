using LinkShortener.Core.Infrastructure;
using LinkShortener.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Service
{
    public class NotificationService : INotificationService
    {
        public void SendDeviceChangeEmail(string email, string ipAddress, string userAgent)
        {
            var subject = "Yeni bir cihazdan giriş yapıldı";
            var message = $"Yeni bir cihazdan giriş yapıldı:\n\n" +
                          $"IP Adresi: {ipAddress}\n" +
                          $"Tarayıcı Bilgisi: {userAgent}\n\n" +
                          $"Bu giriş size ait değilse, lütfen hesabınızı koruma altına alın.";



            //maili gonder
            EmailHelper.SendEmail(email, subject, message);
        }
    }
}
