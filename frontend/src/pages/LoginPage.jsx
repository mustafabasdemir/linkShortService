import LoginFrom from "../components/form/loginForm";



function Login() {
  

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[30%] h-[70%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          <div className="items-center justify-center flex flex-row gap-2 w-full h-full p-2">
            <LoginFrom/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
