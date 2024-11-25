
function App() {
  return (
    <div className="h-screen h-[90%] flex items-center justify-center">
      <div className="w-[90%] h-[90%] bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl flex justify-start items-start p-4">
        {/* İçerik */}
        <div className="flex flex-col gap-4 w-full h-full">
          {/* Birinci Kutu */}
          <div className="w-[120px] h-[90%] bg-blue-500 rounded-lg shadow-md"></div>
          {/* İkinci Kutu */}
          <div className="w-[120px] h-[120px] bg-green-500 rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
