import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { GetLinksUserIdService } from "../../Services/GetLinksUserIdService";

const LinkCard = () => {
  const [links, setLinks] = useState([]); // Linkleri tutmak için state

  // Servisten linkleri çek
  const fetchLinks = async () => {
    const fetchedLinks = await GetLinksUserIdService();
    if (fetchedLinks) {
      setLinks(fetchedLinks);
    }
  };

  useEffect(() => {
    fetchLinks(); // Bileşen yüklendiğinde linkleri çek
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 mt-4 w-full max-w-6xl h-full overflow-y-auto px-4 custom-scrollbar pb-8"
        style={{ alignSelf: "center" }}
      >
        {links.length > 0 ? (
          links.map((link, index) => (
            <div
              key={index}
              className="h-[80%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row"
            >
              <img
                className="h-12 md:h-auto sm:w-28 p-2"
                src={
                  link.qrCodeImage
                    ? `data:image/png;base64,${link.qrCodeImage}`
                    : "https://via.placeholder.com/150"
                }
                alt="qrcode"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p
                  className="mb-2 text-lg font-bold tracking-tight text-gray-900 truncate overflow-hidden"
                  style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    maxWidth: "300px", // Kutunun genişliğini ayarlayın
                  }}
                >
                  {link.originalUrl || "Shortened URL"}
                </p>
                <p
                  className="mb-3 font-bold text-blue-500 flex items-center gap-1 truncate overflow-hidden"
                  style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    maxWidth: "300px", // Kutunun genişliğini ayarlayın
                  }}
                >
                  {link.shortUrl || "Original URL"} <FaExternalLinkAlt />
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span>{link.createdAt || "Tarih Bilgisi Yok"}</span>
                  <span className="text-black">|</span>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => navigator.clipboard.writeText(link.shortUrl)}
                  >
                    <FaRegCopy /> Copy
                  </button>
                  <span className="text-black">|</span>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => console.log(`Delete ${link.id}`)} // Silme işlemi için ID'yi kullan
                  >
                    <MdDeleteSweep /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Kullanıcıya ait link bulunamadı.
          </p>
        )}
      </div>
    </>
  );
};

export default LinkCard;
