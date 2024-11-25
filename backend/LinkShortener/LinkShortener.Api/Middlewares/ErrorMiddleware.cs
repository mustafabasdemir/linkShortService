﻿using LinkShortener.Services.ErrorHandling;
using System.Net;
using static Azure.Core.HttpHeader;

namespace LinkShortener.Api.Middlewares
{
    public class ErrorMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorMiddleware> _logger;

        public ErrorMiddleware(RequestDelegate next, ILogger<ErrorMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context, ILogService logService)
        {
            try
            {
                await _next(context);
            }
            catch (CustomException customEx)
            {
                // CustomException'dan log bilgisi
                await LogAndHandleException(context, logService, customEx.Status, customEx.Message, customEx, "Warning");
            }
            catch (Exception ex)
            {
                // Genel Exception
                await LogAndHandleException(context, logService, "Critical", "Unhandled exception occurred", ex, "Critical");
            }
        }

        private async Task LogAndHandleException(HttpContext context, ILogService logService, string level, string message, Exception ex, string logLevel)
        {
            // Controller ve Action bilgisi
            var controller = context.GetRouteValue("controller")?.ToString();
            var action = context.GetRouteValue("action")?.ToString();
            var path = context.Request.Path;

            // Log mesajı oluştur
            var logMessage = $"Exception in {controller}/{action} (Path: {path}): {message}";

            // Logla
            logService.LogError(level, logMessage, ex);

            // HTTP response hazırlama
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            var response = new
            {
                Success = false,
                StatusCode = context.Response.StatusCode,
                Message = message,
                Path = path
            };

            context.Response.ContentType = "application/json";
            await context.Response.WriteAsJsonAsync(response);
        }
    }
}
