using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using LinkShortener.Core.Services.Interfaces;
using LinkShortener.Service.Interfaces;
using LinkShortener.Service;
using LinkShortener.Services.ErrorHandling;

namespace LinkShortener.Api.Filters
{

    public class ValidateUserTokenFilter : IAsyncActionFilter
    {
        private readonly ITokenService _tokenService;
        private readonly TokenCacheService _tokenCacheService;

        public ValidateUserTokenFilter(ITokenService tokenService, TokenCacheService tokenCacheService)
        {
            _tokenService = tokenService;
            _tokenCacheService = tokenCacheService;
        }

        // Action çalıştırmadan önce yapılacak işlemler
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var userId = context.HttpContext.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                ExceptionHelper.ThrowError(ErrorMessages.UserNotFound); // Kullanıcı id bulunamadığında hata firlat
            }

            var cachedToken = _tokenCacheService.GetToken($"UserToken_{userId}");

            if (string.IsNullOrEmpty(cachedToken))
            {
                ExceptionHelper.ThrowError(ErrorMessages.FoundToken); // Token bulunamadığında hata fırlt
            }

            var isValid = _tokenService.ValidateToken(cachedToken);

            if (!isValid)
            {
                ExceptionHelper.ThrowError(ErrorMessages.InvalidToken); // Geçersiz token olduğunda hata fırlat
            }

            await next();  //devamm
        }
    }
}
