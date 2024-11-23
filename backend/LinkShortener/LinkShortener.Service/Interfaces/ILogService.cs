public interface ILogService
{
    void LogInfo(string message, string? properties = null);
    void LogError(string level,string message, Exception? exception = null, string? properties = null);
}
