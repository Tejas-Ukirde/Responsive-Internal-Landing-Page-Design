import img1 from "./image/img1.png";
import facebook from "./image/facebookicon.png";
import instagram from "./image/instagramicon.png";
import x from "./image/xicon.png";
import linkdin from "./image/linkdinicon.png";
import youtube from "./image/youtubeicon.png";

const Footer = () => {
  return (
    <div className="mb-[65px] ml-10">
      <div className=" text-white pt-6 text-center flex flex-col-4 justify between gap-[80px]">
        <div className="flex flex-col  ml-[3%]">
          <img src={img1} className="w-[100px] h-[60px]" />
          <h1 className="justify start text-start text-black mb-7 mt-7 text-[13px]">
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </h1>
          <div className="flex items-center  overflow-hidden w-80">
            <input
              type="email"
              className="flex-1  bg-white h-9  border border-[1.3px]  text-[13px] py-5 border-black pl-4"
              placeholder="Your email here"
            />
            <button className="   bg-[#FF3E54] px-[19px] py-[9px]  ml-2  text-[13px] rounded-[10%] ">
              Join
            </button>
          </div>

          <h1 className="justify start text-start text-black mb-7 mt-3 text-[9px]">
            SBy subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </h1>
        </div>
        <div className="text-black  text-[11px]  ">
          <h1 className="font-semibold  text-[13px]">Useful Links</h1>
          <h1 className="mt-[13px]">Home Page</h1>
          <h1 className="mt-[13px]">About Us</h1>
          <h1 className="mt-[13px]">Contact Us</h1>
          <h1 className="mt-[13px]">Blog Posts</h1>
          <h1 className="mt-[13px]">FAQs</h1>
        </div>
        <div className="text-black  text-[11px]  ">
          {" "}
          <h1 className="font-semibold  text-[13px]">Resources</h1>
          <h1 className="mt-[13px]">Help Center</h1>
          <h1 className="mt-[13px]">User Guide</h1>
          <h1 className="mt-[13px]">Community Forum</h1>
          <h1 className="mt-[13px]">Feedback</h1>
          <h1 className="mt-[13px]">Support</h1>
        </div>
        <div className="text-black  text-[11px]  ">
          {" "}
          <h1 className="font-semibold  text-[13px]">Connect With Us</h1>
          <div className="flex flex-col-2 mt-[13px] ">
            <img src={facebook} /> <h1 className="ml-2">facebook</h1>
          </div>
          <div className="flex flex-col-2 mt-[13px]">
            <img src={instagram} /> <h1 className="ml-2">instagram</h1>
          </div>
          <div className="flex flex-col-2 mt-[13px]">
            <img src={x} /> <h1 className="ml-2"> x </h1>
          </div>
          <div className="flex flex-col-2 mt-[13px]">
            <img src={linkdin} /> <h1 className="ml-2">likedin</h1>
          </div>
          <div className="flex flex-col-2 mt-[13px]">
            <img src={youtube} /> <h1 className="ml-2">youtube</h1>
          </div>
        </div>
      </div>
      <hr class="border-t-1 border-black my-2"></hr>
      <div className="flex flex-col-2 gap-[55%] ">
        <h1 className="ml-9 text-[11px]">
          © 2024 Osumare. All rights reserved.
        </h1>
        <div className="flex flex-col-3 text-[11px]">
          <span className="ml-2 underline">Privacy Policy</span>
          <span className="ml-2 underline">Terms of Service</span>
          <span className="ml-2 underline">Cookie Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
