import { FaLink } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import 'flowbite';


function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[70%] h-[90%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          {/* İçerik */}
          <div className="flex flex-col gap-4 w-[100%] h-full">
            <div className="w-full h-[10%] bg-white/50 rounded-lg shadow-md flex items-center justify-between p-4">
              {/* Sol Taraf */}
              <div className="text-white font-bold text-lg pl-8 w-[50%]">
                <img src="./logo.png" alt="" className="w-[40%]" />
              </div>

              {/* Sağ Taraf */}
              <div className="flex items-center gap- text-white font-bold text-lg pr-8">


                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 me-2 rounded-full" src="./profil.png" alt="user photo" />
                  mustafa başdemir
                  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>


                <div id="dropdownAvatarName" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div class="truncate">name@flowbite.com</div>
                  </div>
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-2">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* gif */}
            <div
              className="absolute h-[14%] right-4  top-[23%]"
              style={{
                maskImage:
                  "polygon(0% 0%, 100% 0%, 100% 15%, 90.33% 15%, 90.33% 32%, 100% 32.86%, 100% 100%, 0% 100%)",
                WebkitMaskImage:
                  "polygon(0% 0%, 100% 0%, 100% 15%, 90.33% 15%, 90.33% 32%, 100% 32.86%, 100% 100%, 0% 100%)",
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
            <div
              className="w-full h-[75%] bg-white/50 rounded-lg shadow-md flex flex-col items-center justify-start"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100%  13%, 92% 13%, 92% 32%, 100% 32%, 100% 100%, 0% 100%)",
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
                <span className="text-lg text-orange-500">
                  here are your shortened url's 😍{" "}
                </span>
              </div>

              <div
                className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl h-full overflow-y-auto px-4 custom-scrollbar mb-4"
                style={{ alignSelf: "center" }}
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
                      <button className="flex items-center gap-2">
                        <FaRegCopy /> Copy{" "}
                      </button>
                      <span className="text-black">|</span>
                      <button className="flex items-center gap-2">
                        <MdDeleteSweep /> Delete
                      </button>
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
                      <button className="flex items-center gap-2">
                        <FaRegCopy /> Copy{" "}
                      </button>
                      <span className="text-black">|</span>
                      <button className="flex items-center gap-2">
                        <MdDeleteSweep /> Delete
                      </button>
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
                      <button className="flex items-center gap-2">
                        <FaRegCopy /> Copy{" "}
                      </button>
                      <span className="text-black">|</span>
                      <button className="flex items-center gap-2">
                        <MdDeleteSweep /> Delete
                      </button>
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
                      <button className="flex items-center gap-2">
                        <FaRegCopy /> Copy{" "}
                      </button>
                      <span className="text-black">|</span>
                      <button className="flex items-center gap-2">
                        <MdDeleteSweep /> Delete
                      </button>
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
                      <button className="flex items-center gap-2">
                        <FaRegCopy /> Copy{" "}
                      </button>
                      <span className="text-black">|</span>
                      <button className="flex items-center gap-2">
                        <MdDeleteSweep /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ucuncu Kutu */}
            <div className="w-full h-[10%] bg-white/50 rounded-lg shadow-md flex items-center justify-center p-4">
              {/* Sol Taraf */}
              {/* <div className="text-white font-bold text-lg pl-8 w-[50%]">
                     <img src="./logo.png" alt="" className="w-[40%]" />
                  </div> */}

              {/* Sağ Taraf */}
              <div className="flex items-center justify-center gap-4 text-white font-bold text-lg">
                <span>About</span>
                <span>|</span>
                <span>Contact</span>
                <span>|</span>
                <span>Privacy Policy</span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  Donation <CiCoffeeCup className="text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
