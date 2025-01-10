import img2 from "./image/Card.png"
import img3 from "./image/Text.png"
import img4 from "./image/google.png"
import img5 from "./image/youtube.png"
import img6 from "./image/pinterest.png"
import img7 from "./image/Vector.png"




const Hero = () => {
    return (
      <section className="text-center bg-gray-100 p-10">
        <h1 className="text-4xl font-bold mb-4">Simplify Your Life with Our Todo App</h1>
        <p className="mb-0 text-grey">Stay organized and boost your productivity with our intuitive to-do website.</p>
        <p className="mb-6 text-grey py-0 ">Experience a modern approach task management that fits your lifestyle.</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-red-500 text-white rounded-[40px]">Get Started</button>
          <button className="px-6 py-3 border border-red-500 rounded-[40px] text-red-500">Learn More</button>
        </div>
        <div className="flex space-x-4 justify-center items-center">
        <div
  className="h-[620px] w-[720px] bg-[#FF3E54] relative flex flex-col items-center justify-start rounded-[26px] shadow-lg mt-10"
>
  <img
    src={img3}
    alt="Sample Image"
    className="w-[669px] h-[339px] px-10 mt-20"
  />
  <div className="space-x-2 mt-8 self-start ml-20">
    <button className="px-[26px] py-[10px] bg-white text-black rounded-[81px]">
    Get Started Today    </button>
    <button className="px-[26px] py-[10px] border border-red-500 rounded-[81px] text-white">
    Discover Features    </button>
  </div>
</div>

  <div className="mt-[30px] "><img src={img2} className=" h-[620px]"/>
  </div>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 ml-20 mt-10">
<img
    src={img4}
    alt="Sample Image"
  />
  <img
    src={img5}
    alt="Sample Image"
  />
  <img
    src={img6}
    alt="Sample Image"
  />
  <img
    src={img7}
    alt="Sample Image"
  />
</div>

      </section>
    );
  };
  
  export default Hero;
  