import { FaLink } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const linkShortBox = () => {
  return (
    <>
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
    </>
  );
};

export default linkShortBox;
