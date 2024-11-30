const WeatherBox = () => {
  return (
    <>
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
            <span className="text-white text-xs font-medium">15°C ⬇️</span>
            <span className="text-white text-xs font-medium">22°C ⬆️</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
