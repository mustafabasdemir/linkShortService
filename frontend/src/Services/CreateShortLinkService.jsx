import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/Link";

export const CreateShortLinkService = async (originalUrl, userId) => {
  try {
    const userID = userId !== 14 ? sessionStorage.getItem("userId") : 14;
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
      if (userID === 14) {
        let cachedLinks = JSON.parse(sessionStorage.getItem("cachedLinks")) || [];
        cachedLinks.push(response.data);
        sessionStorage.setItem("cachedLinks", JSON.stringify(cachedLinks)); 
      }
      return response.data; 
    }
  } catch (error) {
    console.error("Link oluşturma hatası:", error);
    showAlert("error", "Link kısaltma işlemi başarısız oldu!");
    return null;
  }
};


export const getCachedLinks = () => {
  const cachedLinks = JSON.parse(sessionStorage.getItem("cachedLinks")) || [];
  return cachedLinks;
};