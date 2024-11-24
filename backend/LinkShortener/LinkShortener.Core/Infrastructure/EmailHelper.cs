using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Core.Infrastructure
{
    public static class EmailHelper
    {
        public static void SendEmail(string toEmail, string subject, string message)
        {
            var fromEmail = "basdemir803@gmail.com";
            var password = "kfpp ouqz rnse qqqi"; 

            var smtpClient = new SmtpClient("smtp.gmail.com") 
            {
                Port = 587,
                Credentials = new NetworkCredential(fromEmail, password),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(fromEmail),
                Subject = subject,
                Body = message,
                IsBodyHtml = true,
            };
            mailMessage.To.Add(toEmail);

            smtpClient.Send(mailMessage);
        }
    }
}


