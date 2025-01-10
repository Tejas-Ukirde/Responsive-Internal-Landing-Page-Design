import line1 from "./image/line1.png";
import test from "./image/test.png";
import photo from "./image/photo.png";
import arrowright from "./image/arrowright.png";
import arrowleft from "./image/arrowleft.png";

const Testimonials = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl text-left font-bold mb-6 pl-[40px] ">
        Customer Testimonials
      </h2>
      <div className="flex space-x-[200px] justify-center items-center px-10">
        <div className="flex flex-col relative">
          <img
            src={line1}
            alt="Sample Image"
            className="w-[669px] h-[509px] px-10 mt-10"
          />
          <div className="bg-white w-[600px] h-[360px] absolute top-[60%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "48px",
              }}
            >
              "Using this website has made my tasks so much easier! I can't
              imagine my day without it."
            </h1>
            <div className="flex flex-col-2 space-x-1 pl-[10%] mt-7">
              <img src={test} className="h-8" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-[18px] text-start">
                  Sherri Cronin
                </h3>
                <h3>Project Manager, TechCorp</h3>
              </div>
            </div>
            <div className="space-x-2 mt-8 self-start flex ml-[10%]">
              <button className="w-10 h-10   border border-[2px] border-[#FF3E54] text-black rounded-full flex items-center justify-center">
                <img
                  src={arrowleft}
                  alt="Start"
                  className="w-[10px] h-[17px] mr-1"
                />
              </button>
              <button className="w-10 h-10   border  solid border-red-500 text-white rounded-[90%] flex items-center justify-center bg-[#FF3E54]">
                <img
                  src={arrowright}
                  alt="Discover"
                  className="w-[20px] h-[20px] ml-1"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[30px] ml-[21px]  ">
          <img src={photo} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
