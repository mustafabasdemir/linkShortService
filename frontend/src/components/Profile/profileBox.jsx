import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogoutService } from "../../Services/LogoutService";

const ProfileBox = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");


  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []); 

  const handleSignOut = async () => {
    try {
      await LogoutService();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <div className="w-full h-[75%] bg-white rounded-lg shadow-md relative">
        {/* Mavi alan */}
        <div
          className="w-full h-full bg-blue-500"
          style={{
            clipPath: "circle(58% at 50% 3%)",
          }}
        ></div>
        {/* Resim */}
        <img
          src="/profil.png"
          alt="Resim"
          className="w-full h-full object-cover absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" // Resmi tam ortalayacak şekilde ayarlandı
        />

        <div className="absolute bottom-[0%] w-full rounded-2xl bg-white p-1 text-center z-10">
          <h2
            className="text-md font-semibold text-gray-800 break-words text-center"
            style={{
              wordWrap: "break-word", 
              wordBreak: "break-word", 
              overflowWrap: "break-word", 
            }}
          >
            {userEmail || "Kullanıcı Bilgisi Yok"}
          </h2>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 mt-8 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
