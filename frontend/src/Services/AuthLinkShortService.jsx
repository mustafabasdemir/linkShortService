import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/Link";

export const CreateShortLinkService = async (originalUrl, userId) => {
  try {
    const userID = sessionStorage.getItem("userId");

    const response = await axios.post(API_URL, {
      id: 0, 
      originalUrl,
      shortUrl: "",
      createdUrl: new Date().toISOString(), 
      qrCodeImage: "", 
      userId:userID,
    });

    if (response.status === 201) {
      showAlert("success", "Link başarıyla kısaltıldı!");
      return response.data; 
    }
  } catch (error) {
    console.error("Link oluşturma hatası:", error);
    showAlert("error", "Link kısaltma işlemi başarısız oldu!");
    return null;
  }
};
