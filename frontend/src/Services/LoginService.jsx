import axios from "axios";
import showAlert from "../components/alerts/alert.jsx";


const API_URL = "http://localhost:5025/api/User/login";
export const loginService = async (email, password) => {
    try {
      const response = await axios.post(API_URL, {
          email,
          password,
      });
    //alert
    showAlert('success',"Görev Eklendi")
    return response.data;
  } catch (error) {
    showAlert('error',"İşlem Başarısız")
    return null; 
  }
};




