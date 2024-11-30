import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const LinkCard = () => {
  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl h-full overflow-y-auto px-4 custom-scrollbar pb-8"
        style={{ alignSelf: "center" }}
      >
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
      </div>
    </>
  );
};

export default LinkCard;
