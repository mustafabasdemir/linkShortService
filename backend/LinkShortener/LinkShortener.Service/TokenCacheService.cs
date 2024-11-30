using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkShortener.Service
{
    public class TokenCacheService
    {
        private readonly IMemoryCache _cache;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromHours(1); // Cache süresi

        public TokenCacheService(IMemoryCache cache)
        {
            _cache = cache;
        }

        // Token kaydet
        public void SetToken(string userId, string token)
        {
            _cache.Set(userId, token, _cacheDuration);
        }

        // Cachden alacagız
        public string GetToken(string userId)
        {
            return _cache.TryGetValue(userId, out string token) ? token : null;
        }

        // Cacheden sileceğiz
        public void RemoveToken(string userId)
        {
            _cache.Remove(userId);
        }

    }
}
