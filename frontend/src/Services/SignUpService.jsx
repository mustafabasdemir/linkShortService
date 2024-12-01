import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/User";

export const SignUpService = async (email, password) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      passwordHash: password,
      createdAt: new Date().toISOString(),
      links: [],
    });

    if (response.status === 200) {
      showAlert("success", "Kullanıcı başarıyla oluşturuldu. Giriş Yapabilirsiniz");
      return response.data;
    }
  } catch (error) {
    showAlert("error", "Kullanıcı oluşturulamadı. Lütfen tekrar deneyin.");
    console.error("Kullanıcı ekleme hatası:", error);
    return null;
  }
};