import FooterBox from "../components/footer/footerBox";
import LinkForm from "../components/form/linkForm";
import LinkCard from "../components/linkCard/linkCard";
import ProfileBox from "../components/Profile/profileBox";
import WeatherBox from "../components/weather/weatherBox";


function HomePage() {
  

    return (
      <>
        <div className="h-screen flex items-center justify-center">
        <div className="w-[85%] h-[90%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          {/* İçerik */}
          <div className="flex flex-row gap-5 w-full h-full p-2">
            {/* Sol Sütun */}
            <div className="flex flex-col gap-5 w-[15%] h-full">
              {/* Birinci Kutu */}
              <ProfileBox />

              {/* İkinci Kutu */}
              <WeatherBox />
            </div>

            {/* Sağ Sütun */}
            <div className="flex flex-col gap-4 w-[90%] h-full">
              {/* gif */}
              <div
                className="absolute h-[14%] right-4  top-[15%]"
                style={{
                  maskImage:
                    "polygon(0% 0%, 100% 0%, 100% 15%, 90.33% 15%, 90.33% 32.86%, 100% 32.86%, 100% 100%, 0% 100%)",
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
              <div
                className="w-full h-[85%] bg-white/70 rounded-lg shadow-md flex flex-col items-center justify-start"
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
                <LinkForm />

                <div className="mt-4 text-center text-lg font-semibold">
                  <span className="text-lg text-orange-500">
                    here are your shortened url's 😍{" "}
                  </span>
                </div>

                {/* Card 1 */}
                <LinkCard />
              </div>

              {/* ucuncu Kutu */}
              <FooterBox />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default HomePage;
  