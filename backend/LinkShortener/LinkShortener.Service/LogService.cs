using LinkShortener.Data;
using Microsoft.Extensions.Logging;
using LinkShortener.Core.Entities;


public class LogService : ILogService
{
    private readonly ILogger<LogService> _logger;
    private readonly LinkShortDbContext _context;

    public LogService(ILogger<LogService> logger, LinkShortDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public void LogInfo(string message, string? properties = null)
    {
        _logger.LogInformation("{Message} | {Properties}", message, properties);
        SaveToDatabase("Information", message, null, properties);
    }

    public void LogError(string level, string message, Exception? exception = null, string? properties = null)
    {
        _logger.LogError(exception, "{Message} | {Properties}", message, properties);
        SaveToDatabase(level, message, exception?.ToString(), properties);
    }

    private void SaveToDatabase(string level, string message, string? exception, string? properties)
    {
        var logEntry = new LogEntry
        {
            Level = level,
            Message = message,
            Exception = exception?.ToString(), 
            Properties = properties,
            TimeStamp = DateTime.UtcNow
        };

        _context.Logs.Add(logEntry); 
        _context.SaveChanges();
    }
}
