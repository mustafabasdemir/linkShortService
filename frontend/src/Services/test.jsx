import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/User/logout";

export const logoutService = async () => {
  try {
    // Token'ı sessionStorage'dan alıyoruz
    const token = sessionStorage.getItem('token');

    // Token yoksa kullanıcıya uyarı gösteriyoruz
    if (!token) {
      showAlert('error', "Token bulunamadı! Lütfen giriş yapın.");
      return;
    }

    // Çıkış işlemi için POST isteği atıyoruz
    const response = await axios.post(API_URL, {}, {
      headers: {
        Authorization: `Bearer ${token}`,  // JWT token'ı header'a ekliyoruz
      }
    });

    // Başarılı çıkış işlemi sonrası kullanıcıya bildirim gösteriyoruz
    if (response.data) {
      showAlert('success', response.data);  // Çıkış mesajını gösteriyoruz
      sessionStorage.removeItem('token');   // Token'ı sessionStorage'dan siliyoruz
    }

  } catch (error) {
    showAlert('error', "Çıkış işlemi başarısız");
  }
};
