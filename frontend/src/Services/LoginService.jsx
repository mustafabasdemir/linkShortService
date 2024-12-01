import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/User/login";

export const LoginService = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });

    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.decodeToken.id);
      sessionStorage.setItem("userEmail", response.data.decodeToken.email);

      showAlert("success", "Başarılı Giriş Yapıldı");
      return response.data; 
    }
  } catch (error) {
    showAlert("error", "İşlem Başarısız");
    return null; 
  }
};
