
function App() {
  return (
<>

      <div className="h-screen flex items-center justify-center">
        <div className="w-[85%] h-[90%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
          {/* İçerik */}
          <div className="flex flex-row gap-5 w-full h-full p-2">
            {/* Sol Sütun */}
            <div className="flex flex-col gap-5 w-[20%] h-full">
              {/* Birinci Kutu */}
              <div className="w-full h-[75%] bg-white rounded-lg shadow-md relative">
                {/* Mavi alan */}
                <div className="w-full h-full bg-blue-500"
                  style={{
                    clipPath: "circle(58% at 50% 3%)", // Mavi alanın clip-path'ı
                  }}
                >

                </div>
                {/* Resim */}
                <img
                  src="/profil.png"  // Burada resim URL'sini değiştirebilirsiniz
                  alt="Resim"
                  className="w-full h-full object-cover absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" // Resmi tam ortalayacak şekilde ayarlandı
                />

                <div className="absolute bottom-4 w-full rounded-2xl bg-white p-1 text-center z-10">
                  <h2 className="text-2xl font-semibold text-gray-800">Mustafa Başdemir</h2>
                  <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 mt-8 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Çıkış Yap</button>
                </div>

              </div>





              {/* İkinci Kutu */}
              <div className="w-full h-[25%] bg-blue-500 rounded-lg shadow-md flex justify-center items-center relative">


                <img className="w-[70%] h-[90%]" src="/4.png" />
                {/* Yazı Overlay */}

                {/* derece */}
                <div className="absolute top-2 left-2 w-[15%] h-[20%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-sm font-medium">
                    19°C
                  </p>
                </div>

                {/* gun bilgisi */}
                <div className="absolute top-2 right-2 w-[40%] h-[20%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-sm font-medium">
                    Salı  2024
                  </p>
                </div>
                {/* düşük ve alcak sıcaklık  */}

                {/* derece */}
                <div className="absolute bottom-2 left-2 w-[50%] h-[20%] flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-lg">
                  <div className="flex gap-4">
                    <span className="text-white text-sm font-medium">15°C ⬇️</span>
                    <span className="text-white text-sm font-medium">22°C ⬆️</span>
                  </div>
                </div>




              </div>



            </div>

            {/* Sağ Sütun */}
            <div className="flex flex-col gap-4 w-[80%] h-full">
              {/* Üçüncü Kutu */}
              <div className="w-full h-[20%] bg-gray-300 rounded-lg shadow-md"></div>
              <div className="w-full h-[60%] bg-gray-300 rounded-lg shadow-md"></div>
              {/* Dördüncü Kutu */}
              <div className="w-full h-[20%] bg-gray-300 rounded-lg shadow-md"></div>
            </div>
          </div>
        </div>
      </div>



</>
  
  );
}

export default App;
