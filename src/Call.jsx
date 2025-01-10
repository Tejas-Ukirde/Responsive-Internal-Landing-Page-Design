import phone from "./image/phone.png";
const CallToAction = () => {
  return (
    <div className="flex space-x-4 justify-center items-center mb-20 ml-10">
      <div className="mt-[30px] ml-[30px] ">
        <img src={phone} className=" w-[585px] h-[395px]" />
      </div>
      <div className="  relative flex flex-col items-center justify-start mt-10">
        <div className="space-x-2 mt-8 self-start ml-4">
          <h1
            style={{
              fontFamily: "Roboto",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "48px",
            }}
          >
            Start Organizing Your Life Today
          </h1>
        </div>
        <p></p>
        <div className="mr-[55%] space-x-2">
          {" "}
          <button className="px-[26px] py-[10px] bg-white text-white bg-[#FF3E54] mt-10 mb-10">
            Sign up{" "}
          </button>
          <button className="px-[26px] py-[10px] border border-red-500  text-black mb-10">
            Learn more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
