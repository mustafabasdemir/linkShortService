import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { GetLinksUserIdService } from "../../Services/GetLinksUserIdService";
import dayjs from "dayjs";
import { LinkDeleteService } from "../../Services/LinkDeleteService";
import showAlert from "../alerts/alert";


const LinkCard = () => {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const fetchedLinks = await GetLinksUserIdService(); // Kullanıcı linklerini al
    if (fetchedLinks) {
      setLinks(fetchedLinks);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const LinkDelete = async (id) => {
    try {
      const result = await LinkDeleteService(id);
      if (result) {
        // Başarılıysa state'den ilgili linki çıkar
        setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
        showAlert("success", "Link başarıyla silindi!");
      } else {
        showAlert("error", "Link silme başarısız.");
      }
    } catch (error) {
      console.error("Silme hatası:", error);
      showAlert("error", "Link silme işlemi sırasında bir hata oluştu.");
    }
  };

  const handleCopy = (shortUrl) => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        showAlert("success", "Link başarıyla kopyalandı!");
      })
      .catch(() => {
        showAlert("error", "Link kopyalama başarısız!");
      });
  };

  const calculateTimeAgo = (createdDate) => {
    const now = dayjs();
    const created = dayjs(createdDate);
    const diff = now.diff(created, "day");

    if (diff === 0) return "Today";
    return `${diff} days ago`;
  };

  return (
    <div
      className="grid grid-cols-2 gap-2 mt-4 w-300px max-w-6xl h-full overflow-y-auto px-4 custom-scrollbar pb-8"
      style={{ alignSelf: "center" }}
    >
      {links.length > 0 ? (
        links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mb-2"
          >
            <img
              className="h-12 md:h-auto sm:w-28 p-0"
              src={
                link.qrCodeImage
                  ? `data:image/png;base64,${link.qrCodeImage}`
                  : "https://via.placeholder.com/150"
              }
              alt="qrcode"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p
                className="mb-2 text-md font-bold tracking-tight text-gray-900 truncate overflow-hidden"
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "300px",
                }}
              >
                {link.originalUrl || "Original URL"}
              </p>
              <p
                className="mb-3 text-md font-bold text-blue-500 flex items-center gap-1 truncate overflow-hidden"
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "300px",
                }}
              >
                <a
                  href={link.shortUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-md"
                >
                  {link.shortUrl || "Short URL"} <FaExternalLinkAlt />
                </a>
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span>{calculateTimeAgo(link.createdUrl)}</span>
                <span className="text-black">|</span>
                <button
                  className="flex items-center gap-2 hover:text-blue-500"
                  onClick={() => handleCopy(link.shortUrl)}
                >
                  <FaRegCopy /> Copy
                </button>
                <span className="text-black">|</span>
                <button
                  className="flex items-center gap-2 hover:text-red-500"
                  onClick={() => LinkDelete(link?.id)}
                >
                  <MdDeleteSweep /> Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Kullanıcıya ait link bulunamadı.</p>
      )}
    </div>
  );
};

export default LinkCard;
