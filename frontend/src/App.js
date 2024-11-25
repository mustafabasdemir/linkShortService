
function App() {
  return (
<>

<div className="h-screen flex items-center justify-center">
  <div className="w-[85%] h-[90%] bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-6">
    {/* İçerik */}
    <div className="flex flex-row gap-5 w-full h-full p-4">
      {/* Sol Sütun */}
      <div className="flex flex-col gap-5 w-[20%] h-full">
        {/* Birinci Kutu - Clip Path ve Border Radius ile şekillendirilmiş */}
        <div className="relative w-full h-[50%] bg-white shadow-md"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 76.16%, 57.5% 76.16%, 57.5% 100%, 0%  100%)",
            borderRadius: "10px",  // Köşe yuvarlama
            
          }}
        ></div>

        {/* İkinci Kutu */}
        <div className="w-full h-[50%] bg-white rounded-lg shadow-md"></div>
      </div>

      {/* Sağ Sütun */}
      <div className="flex flex-col gap-4 w-[80%] h-full">
        {/* Üçüncü Kutu */}
        <div className="w-full h-[80%] bg-gray-300 rounded-lg shadow-md"></div>
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
