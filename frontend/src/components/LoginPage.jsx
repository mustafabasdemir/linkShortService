import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { loginService } from "../Services/LoginService";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun sayfayı yeniden yüklemesini engeller
    setLoading(true);
    setError("");

    try {
      const response = await loginService(email, password);
      console.log("Login successful:", response);
      navigate("/home");
      alert("Login successful!"); 
    } catch (err) {
      setError(err || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[30%] h-[70%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          {/* İçerik */}
          <div className="items-center justify-center flex flex-row gap-2 w-full h-full p-2">
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
                      value={email} // Email state'i
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
                <div>
                  <button className="bg-blue-800 text-xl text-white font-medium uppercase mt-4 p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                    login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
