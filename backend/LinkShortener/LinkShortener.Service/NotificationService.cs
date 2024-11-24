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


            var message = $@"<!DOCTYPE html PUBLIC ""-//W3C//DTD XHTML 1.0 Transitional//EN"" ""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"">
                            <html dir=""ltr"" lang=""en"">
                            
                              <head>
                                <link rel=""preload"" as=""image"" href=""https://react-email-demo-k6qpz0pxq-resend.vercel.app/static/raycast-logo.png"" />
                                <meta content=""text/html; charset=UTF-8"" http-equiv=""Content-Type"" />
                                <meta name=""x-apple-disable-message-reformatting"" /><!--$-->
                              </head>
                              <div style=""display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"">Log in with this magic link.<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
                              </div>
                            
                              <body style=""background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif"">
                                <table align=""center"" width=""100%"" border=""0"" cellPadding=""0"" cellSpacing=""0"" role=""presentation"" style=""max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-image:url(&quot;/assets/raycast-bg.png&quot;);background-position:bottom;background-repeat:no-repeat, no-repeat"">
                                  <tbody>
                                    <tr style=""width:100%"">
                                      <td><img alt=""Raycast"" height=""48"" src=""https://react-email-demo-k6qpz0pxq-resend.vercel.app/static/raycast-logo.png"" style=""display:block;outline:none;border:none;text-decoration:none"" width=""48"" />
                                        <h1 style=""font-size:28px;font-weight:bold;margin-top:48px"">Yeni bir cihazdan giriş yapıldı:</h1>
                                        <table align=""center"" width=""100%"" border=""0"" cellPadding=""0"" cellSpacing=""0"" role=""presentation"" style=""margin:24px 0"">
                                          <tbody>
                                            <tr>
                                              <td>
                                                    <p style=""font-size:16px;line-height:26px;margin:16px 0"">👉 <b>IP Adresi:</b> {ipAddress} </p>
                                                    <p style=""font-size:16px;line-height:26px;margin:16px 0"">👉 <b>Tarayıcı Bilgileri:</b> {userAgent} </p>

                                                    <p style=""font-size:16px;line-height:26px;margin:16px 0""><b>Bu giriş size ait değilse, lütfen hesabınızı koruma altına alın...</b></p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <hr style=""width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dddddd;margin-top:48px"" /><img height=""32"" src=""https://react-email-demo-k6qpz0pxq-resend.vercel.app/static/raycast-logo.png"" style=""display:block;outline:none;border:none;text-decoration:none;-webkit-filter:grayscale(100%);filter:grayscale(100%);margin:20px 0"" width=""32"" />
                                        <p style=""font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px"">mustafa basdemir</p>
                                        <p style=""font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px"">2024 link kısaltma servisi</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table><!--/$-->
                              </body>
                            
                            </html>";


            //maili gonder
            EmailHelper.SendEmail(email, subject, message);
        }
    }
}
