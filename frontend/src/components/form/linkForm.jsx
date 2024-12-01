import { FaLink } from "react-icons/fa";
import { useState } from "react";
import { CreateShortLinkService } from "../../Services/AuthLinkShortService";
import LinkCard from "../linkCard/linkCard";

const LinkForm = () => {
  const [longUrl, setLongUrl] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun yeniden yüklenmesini engelle
    setLoading(true);

    try {
      const userId = sessionStorage.getItem("userId"); 
      const response = await CreateShortLinkService(longUrl, userId); 

    } catch (error) {
      console.error("Link kısaltma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="max-w-lg w-full mt-8" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Long URL
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaLink />
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your long url: www.site.com/detailpages/shop/about/...."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)} // Input değerini güncelle
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={loading} // Yüklenme sırasında butonu devre dışı bırak
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center text-lg font-semibold">
        <span className="text-lg text-orange-500">
          here are your shortened url's 😍{" "}
        </span>
      </div>


    </>
  );
};

export default LinkForm;
