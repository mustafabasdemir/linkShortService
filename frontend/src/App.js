import React from 'react';
import { FaLink } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    // Oturum kapatma işlemi (isteğe bağlı)
    // Örneğin, token temizlemek:
    // localStorage.removeItem('authToken');
    
    // Giriş ekranına yönlendirme
    navigate('/login');
  };


  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[85%] h-[90%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          {/* İçerik */}
          <div className="flex flex-row gap-5 w-full h-full p-2">
            {/* Sol Sütun */}
            <div className="flex flex-col gap-5 w-[15%] h-full">
              {/* Birinci Kutu */}
              <div className="w-full h-[75%] bg-white rounded-lg shadow-md relative">
                {/* Mavi alan */}
                <div
                  className="w-full h-full bg-blue-500"
                  style={{
                    clipPath: "circle(58% at 50% 3%)", // Mavi alanın clip-path'ı
                  }}
                ></div>
                {/* Resim */}
                <img
                  src="/profil.png" // Burada resim URL'sini değiştirebilirsiniz
                  alt="Resim"
                  className="w-full h-full object-cover absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" // Resmi tam ortalayacak şekilde ayarlandı
                />

                <div className="absolute bottom-[0%] w-full rounded-2xl bg-white p-1 text-center z-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Mustafa Başdemir
                  </h2>
                  <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 mt-8 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>

              {/* İkinci Kutu */}
              <div className="w-full h-[25%] bg-blue-500 rounded-lg shadow-md flex justify-center items-center relative">
                <img className="w-[50%] h-[80%]" src="/4.png" alt="" />
                {/* Yazı Overlay */}

                {/* derece */}
                <div className="absolute top-2 left-2 w-[18%] h-[15%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-xs font-medium">19°C</p>
                </div>

                {/* gun bilgisi */}
                <div className="absolute top-2 right-2 w-[55%] h-[15%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-xs font-medium">Tuesday 2024</p>
                </div>
                {/* düşük ve alcak sıcaklık  */}

                {/* derece */}
                <div className="absolute bottom-2 left-2 w-[70%] h-[15%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="flex gap-4">
                    <span className="text-white text-xs font-medium">
                      15°C ⬇️
                    </span>
                    <span className="text-white text-xs font-medium">
                      22°C ⬆️
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Sütun */}
            <div className="flex flex-col gap-4 w-[90%] h-full">
              {/* gif */}
              <div
                className="absolute h-[14%] right-4  top-[15%]"
                style={{
                  maskImage: "polygon(0% 0%, 100% 0%, 100% 15%, 90.33% 15%, 90.33% 32.86%, 100% 32.86%, 100% 100%, 0% 100%)",
                  WebkitMaskImage:
                    "polygon(0% 0%, 100% 0%, 100% 15%, 90.33% 15%, 90.33% 32.86%, 100% 32.86%, 100% 100%, 0% 100%)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/bfR.gif" // Buraya GIF URL'nizi ekleyin
                  alt="Polygon GIF"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* gif son */}
              {/* ikinci Kutu */}
              <div className="w-full h-[85%] bg-white/70 rounded-lg shadow-md flex flex-col items-center justify-start"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 15%, 92% 15%, 92% 32%, 100% 32%, 100% 100%, 0% 100%)",
              }}
            >


                <div className="mt-4 text-center text-lg font-semibold">
                  <span className="text-3xl text-blue-500">Shorten your</span>
                  <span className="text-3xl text-orange-500"> loooooong </span>
                  <span className="text-3xl text-blue-500">URLs</span>
                  <p className="text-3xl text-blue-500">like never before!</p>
                </div>

                {/* Form Kısmı */}
                <form className="max-w-lg w-full mt-8">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FaLink />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your long url : www.site.com/detailpages/shop/about/...."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Shorten URL
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center text-lg font-semibold">
                  <span className="text-lg text-orange-500">here are your shortened url's 😍 </span>
                </div>



                <div
                  className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl h-full overflow-y-auto px-4 custom-scrollbar pb-8"
                  style={{ alignSelf: 'center' }}
                >
                  {/* Card 1 */}
                  <div className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img
                      className="h-12 md:h-auto sm:w-28 p-2"
                      src="https://via.placeholder.com/150"
                      alt="qrcode"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        Shortened URL #1
                      </p>
                      <p className="mb-3 font-bold text-blue-500 flex items-center gap-1">
                        Example of a shortened link
                        <FaExternalLinkAlt />
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>27.11.2024</span>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><FaRegCopy /> Copy </button>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><MdDeleteSweep /> Delete</button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img
                      className="h-12 md:h-auto sm:w-28 p-2"
                      src="https://via.placeholder.com/150"
                      alt="qrcode"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        Shortened URL #2
                      </p>
                      <p className="mb-3 font-bold text-blue-500 flex items-center gap-1">
                        Example of a shortened link
                        <FaExternalLinkAlt />
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>27.11.2024</span>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><FaRegCopy /> Copy </button>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><MdDeleteSweep /> Delete</button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img
                      className="h-12 md:h-auto sm:w-28 p-2"
                      src="https://via.placeholder.com/150"
                      alt="qrcode"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        Shortened URL #3
                      </p>
                      <p className="mb-3 font-bold text-blue-500 flex items-center gap-1">
                        Example of a shortened link
                        <FaExternalLinkAlt />
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>27.11.2024</span>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><FaRegCopy /> Copy </button>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><MdDeleteSweep /> Delete</button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img
                      className="h-12 md:h-auto sm:w-28 p-2"
                      src="https://via.placeholder.com/150"
                      alt="qrcode"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        Shortened URL #4
                      </p>
                      <p className="mb-3 font-bold text-blue-500 flex items-center gap-1">
                        Example of a shortened link
                        <FaExternalLinkAlt />
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>27.11.2024</span>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><FaRegCopy /> Copy </button>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><MdDeleteSweep /> Delete</button>
                      </div>
                    </div>
                  </div>


                  {/* Card 5 */}
                  <div className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img
                      className="h-12 md:h-auto sm:w-28 p-2"
                      src="https://via.placeholder.com/150"
                      alt="qrcode"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                        Shortened URL #5
                      </p>
                      <p className="mb-3 font-bold text-blue-500 flex items-center gap-1">
                        Example of a shortened link
                        <FaExternalLinkAlt />
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span>27.11.2024</span>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><FaRegCopy /> Copy </button>
                        <span className="text-black">|</span>
                        <button className="flex items-center gap-2"><MdDeleteSweep /> Delete</button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>



              {/* ucuncu Kutu */}
              <div className="w-full h-[15%] bg-white/50 rounded-lg shadow-md flex items-center justify-between p-4">
                {/* Sol Taraf */}
                <div className="text-white font-bold text-lg pl-8 w-[50%]">
                  <img src="./logo.png" alt="" className="w-[40%]"/>
                </div>

                {/* Sağ Taraf */}
                <div className="flex items-center gap-4 text-white font-bold text-lg pr-8">
                  <span>About</span>
                  <span>|</span>
                  <span>Privacy Policy</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">Donation <CiCoffeeCup className="text-xl" /> </span>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
