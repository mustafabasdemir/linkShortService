import { CiCoffeeCup } from "react-icons/ci";

const FooterBox = () => {
  return (
    <>
      <div className="w-full h-[10%] bg-white/50 rounded-lg shadow-md flex items-center justify-between p-4">
        {/* Sol Taraf */}
        <div className="text-white font-bold text-lg pl-8 w-[50%]">
          <img src="./logo.png" alt="" className="w-[40%]" />
        </div>

        {/* Sağ Taraf */}
        <div className="flex items-center gap-4 text-white font-bold text-lg pr-8">
          <span>About</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            Donation <CiCoffeeCup className="text-xl" />{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterBox;
