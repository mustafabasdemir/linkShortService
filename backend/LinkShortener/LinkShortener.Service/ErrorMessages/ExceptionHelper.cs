

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
            throw new CustomException(error.StatusCode, error.Message,error.Status);
        }

        private static void LogError(ErrorDetail error)
        {
            _logger.LogError($"error code: {error.StatusCode}, message: {error.Message},status: {error.Status}, date: {DateTime.Now}");
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
