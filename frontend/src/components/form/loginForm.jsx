import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { LoginService } from "../../Services/LoginService";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //yenıden yuklenmeyı engelle
    setLoading(true);

    try {
      const response = await LoginService(email, password);
      if (response) {
        navigate("/home");
      } else {
        setError("Login işlemi başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (err) {
      setError(err || "bir hata var");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                placeholder="enter password"
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
            <button className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
              Login
            </button>
            <button className="bg-green-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
