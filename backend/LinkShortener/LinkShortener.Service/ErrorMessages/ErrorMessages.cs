namespace LinkShortener.Services.ErrorHandling
{
    public static class ErrorMessages
    {
        public static readonly ErrorDetail UserNotFound = new ErrorDetail(404, "Kullanıcı bulunamadı","error");
        public static readonly ErrorDetail InvalidShortCode = new ErrorDetail(400, "Geçersiz kısa kod", "error");
        public static readonly ErrorDetail OriginalUrlEmpty = new ErrorDetail(400, "Orijinal URL boş olamaz", "error");
        public static readonly ErrorDetail InternalServerError = new ErrorDetail(500, "Bir hata oluştu. Lütfen tekrar deneyin", "error");
        public static readonly ErrorDetail LinkNotFound = new ErrorDetail(404, "Kısa link bulunamadı", "error");
        public static readonly ErrorDetail InvalidLinkFormat = new ErrorDetail(400, "Geçersiz link formatı", "error");
        public static readonly ErrorDetail LinksNotFound = new ErrorDetail(404, "Hiç link bulunamadı", "error");
        public static readonly ErrorDetail InvalidUrl = new ErrorDetail(400, "Geçersiz URL", "error");
        public static readonly ErrorDetail UserAlreadyExists = new ErrorDetail(409, "Kullanıcı zaten mevcut", "error");
        public static readonly ErrorDetail LinkAlreadyExists = new ErrorDetail(409, "Bu kısa link zaten mevcut", "error");
        public static readonly ErrorDetail ExpiredToken = new ErrorDetail(401, "Token süresi dolmuş", "error");
        public static readonly ErrorDetail InvalidTokenFormat = new ErrorDetail(400, "Geçersiz token formatı", "error");
        public static readonly ErrorDetail InvalidToken = new ErrorDetail(401, "Geçersiz Yanlış token", "error");
        public static readonly ErrorDetail FoundToken = new ErrorDetail(401, "Token Bulunamadı", "error");
        public static readonly ErrorDetail InvalidPassword = new ErrorDetail(400, "Geçersiz şifre", "error");

    }

    public class ErrorDetail
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Status { get; set; }

        public ErrorDetail(int statusCode, string message, string status)
        {
            StatusCode = statusCode;
            Message = message;
            Status = status;
        }
    }
}
