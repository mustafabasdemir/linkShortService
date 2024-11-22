namespace YourProject.Services.ErrorHandling
{
    public static class ErrorMessages
    {
        public static readonly ErrorDetail UserNotFound = new ErrorDetail(404, "Kullanıcı bulunamadı.");
        public static readonly ErrorDetail InvalidShortCode = new ErrorDetail(400, "Geçersiz kısa kod.");
        public static readonly ErrorDetail OriginalUrlEmpty = new ErrorDetail(400, "Orijinal URL boş olamaz.");
        public static readonly ErrorDetail InternalServerError = new ErrorDetail(500, "Bir hata oluştu. Lütfen tekrar deneyin.");
        public static readonly ErrorDetail LinkNotFound = new ErrorDetail(404, "Kısa link bulunamadı.");
        public static readonly ErrorDetail InvalidLinkFormat = new ErrorDetail(400, "Geçersiz link formatı.");
        public static readonly ErrorDetail LinksNotFound = new ErrorDetail(404, "Hiç link bulunamadı.");
        public static readonly ErrorDetail InvalidUrl = new ErrorDetail(400, "Geçersiz URL.");
        public static readonly ErrorDetail UserAlreadyExists = new ErrorDetail(409, "Kullanıcı zaten mevcut.");
        public static readonly ErrorDetail LinkAlreadyExists = new ErrorDetail(409, "Bu kısa link zaten mevcut.");
        public static readonly ErrorDetail ExpiredToken = new ErrorDetail(401, "Token süresi dolmuş.");
        public static readonly ErrorDetail InvalidTokenFormat = new ErrorDetail(400, "Geçersiz token formatı.");
        public static readonly ErrorDetail InvalidToken = new ErrorDetail(401, "Geçersiz Yanlış token.");
        public static readonly ErrorDetail InvalidPassword = new ErrorDetail(400, "Geçersiz şifre.");

    }

    public class ErrorDetail
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }

        public ErrorDetail(int statusCode, string message)
        {
            StatusCode = statusCode;
            Message = message;
        }
    }
}
