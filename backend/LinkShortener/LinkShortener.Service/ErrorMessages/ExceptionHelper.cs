

using Microsoft.Extensions.Logging;

namespace YourProject.Services.ErrorHandling
{
    public static class ExceptionHelper
    {
        private static readonly ILogger _logger = LoggerFactory.Create(builder =>
                builder.AddConsole().SetMinimumLevel(LogLevel.Information)).CreateLogger("ExceptionHelper");


        public static void ThrowError(ErrorDetail error)
        {
            // Loglama
            LogError(error);

            // Hata fırlatma
            throw new CustomException(error.StatusCode, error.Message);
        }

        private static void LogError(ErrorDetail error)
        {
            _logger.LogError($"error code: {error.StatusCode}, message: {error.Message}, date: {DateTime.Now}");
        }
    }

    public class CustomException : Exception
    {
        public int StatusCode { get; }

        public CustomException(int statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
        }

        public override string ToString()
        {
            return $"error code: {StatusCode}, message: {Message}";
        }
    }
}
