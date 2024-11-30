
import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/User/logout";

export const LogoutService = async () => {
  try {
    const token = sessionStorage.getItem('token');
    if (!token) {
      showAlert('error', "Token bulunamadı! Lütfen giriş yapın.");
      return;
    }
    const response = await axios.post(API_URL, {}, {
      headers: {
        Authorization: `Bearer ${token}`, 
      }
    });
    if (response.data) {
      showAlert('success', response.data); 
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userEmail');
    }
  } catch (error) {
    showAlert('error', "Çıkış işlemi başarısız");
  }
};
