import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { LoginService } from "../../Services/LoginService";
import { SignUpService } from "../../Services/SignUpService"; // Kayıt servisini içe aktarın

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await LoginService(email, password);

    if (response) {
      navigate("/home");
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await SignUpService(email, password);
      if (response) {
        navigate("/"); //girise yınlendır
      } else {
        setError("Kayıt işlemi başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (err) {
      setError(err.message || "Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleContinueWithoutSignUp = () => {
    navigate("/NoEntry");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-2">
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <div>
            <div className="border-2 relative">
              <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                <CgProfile />
              </span>
              <input
                className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="border-2 relative">
              <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                <CiLock />
              </span>
              <input
                className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                type="Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sm:flex sm:justify-between inline-block my-4">
              <div className="flex"></div>
              <div className="text-white hover:underline">
                <a href="/">Forgot password?</a>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              type="submit"
              className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
              disabled={loading}
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-green-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="text-center mt-4">
        <p className="text-white">
          Üye olmadan devam etmek isterseniz,{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={handleContinueWithoutSignUp}
          >
            buraya tıklayabilirsiniz.
          </span>
        </p>
      </div>
      </form>
      
    </>
  );
};

export default LoginForm;
