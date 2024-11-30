import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/User"; 

export const GetLinksUserIdService = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    if (!token) {
      showAlert("error", "Token bulunamadı! Lütfen giriş yapın.");
      return null;
    }
    if (!userId) {
      showAlert("error", "Kullanıcı ID'si bulunamadı! Lütfen giriş yapın.");
      return null;
    }

    const response = await axios.get(`${API_URL}/${userId}/links`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    if (response.data) {
      showAlert("success", "Kullanıcı linkleri başarıyla alındı.");
      return response.data; // Link listesi
    }
  } catch (error) {
    console.error("Hata:", error);
    if (error.response && error.response.status === 404) {
      showAlert("error", "Bu kullanıcıya ait link bulunamadı.");
    } else {
      showAlert("error", "Linkleri alma işlemi başarısız.");
    }
    return null;
  }
};
