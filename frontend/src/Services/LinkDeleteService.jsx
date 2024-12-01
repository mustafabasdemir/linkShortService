import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";

const API_URL = "http://localhost:5025/api/Link"; 

export const LinkDeleteService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    showAlert("success", "Link Silindi");
    return response;
  } catch (error) {
    showAlert(
      "error",
      error.response?.data || "Link silinirken bir hata oluştu."
    );
    return null;
  }
};
