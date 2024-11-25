using LinkShortener.Core.Entities;
using Microsoft.Extensions.Logging;

namespace LinkShortener.Services.ErrorHandling
{
    public static class ExceptionHelper
    {
        private static ILogService? _logService;

        public static void Configure(ILogService logService)
        {
            _logService = logService;
        }


        public static void ThrowError(ErrorDetail error)
        {
            // Hata firlat
            throw new CustomException(error.StatusCode, error.Message,error.Status);
        }

    }

    public class CustomException : Exception
    {
        public int StatusCode { get; }
        public string Status { get; }

        public CustomException(int statusCode, string message,string status) : base(message)
        {
            StatusCode = statusCode;
            Status = status;
        }

        public override string ToString()
        {
            return $"error code: {StatusCode}, message: {Message}, status: {Status}";
        }
    }
}
