using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    private readonly ILogService _logService;

    public TestController(ILogService logService)
    {
        _logService = logService;
    }

    [HttpGet("test-error")]
    public IActionResult TestErrorLogging()
    {
        try
        {
            throw new Exception("Test hata mesjai");
        }
        catch (Exception ex)
        {
            //log bas
            _logService.LogError("Error", "Bir hata oluştu", ex);
            return StatusCode(500, "Hata oluştu, loglandı.");
        }
    }
}
