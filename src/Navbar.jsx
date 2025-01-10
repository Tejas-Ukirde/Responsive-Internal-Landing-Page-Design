import React, { useState } from "react";
import img1 from "./image/img1.png";
import heart from "./image/heart.png";
import close from "./image/close.png";

const Navbar = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
    setIsThankYouVisible(false);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setIsFormVisible(false);
    setIsThankYouVisible(true);
  };

  const handledoneoverlay = () => {
    setIsFormVisible(false);
    setIsThankYouVisible(false);
  };

  return (
    <div>
      <nav className="flex items-center p-5 bg-white shadow">
        <img src={img1} alt="Logo" />
        <div className="ml-[25%]">
          <ul className="flex space-x-6 pl-10">
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#More Option">More Option</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ml-6">
          <button className="text-center border border-red-500 rounded text-red-500 w-[130px] h-[44px]">
            Log In
          </button>
          <button
            onClick={handleOpenForm}
            className="text-center w-[130px] h-[44px] bg-red-500 text-white rounded ml-2"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-[569px] max-h-[90vh]  overflow-y-auto overflow-x-hidden custom-scrollbar">
            <form onSubmit={handleFormSubmission} className="font-ibm">
              <div className="flex flex-col-2 flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-[24px]">Get started Today</h1>
                  <h2 className=" text-[15px]  text-[#424242]">
                    Fill in your details and take control of your tasks.
                  </h2>
                </div>
                <div className="mb-6">
                  <button
                    onClick={handledoneoverlay}
                    className=" text-black text-bold"
                  >
                    <img src={close} />
                  </button>
                </div>
              </div>

              <div className="mb-4 flex flex-col-2 ">
                <div className=" flex flex-col p-1">
                  <div>
                    <label className="block text-sm font-bold mb-2 ">
                      first Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-[255px] h-[48px] border rounded px-2 py-2 bg-[#FFDEE287] "
                      required
                    />
                  </div>
                </div>
                <div className=" flex flex-col p-1">
                  <div>
                    <label className="block text-sm font-bold mb-2 ml-1">
                      last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-[255px] h-[48px] border rounded px-2 py-2 bg-[#FFDEE287] ml-1"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Gender</label>
                <div className="flex items-center space-x-4 ">
                  <div className="flex items-center bg-[#FFDEE287] p-5 w-30 h-10">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="w-4 h-4 accent-[#FF3E54]"
                      required
                    />
                    <label htmlFor="male" className="ml-2 text-sm font-medium">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center bg-[#FFDEE287] p-5 w-30 h-10">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="w-4 h-4 accent-[#FF3E54]"
                      required
                    />
                    <label
                      htmlFor="female"
                      className="ml-4 text-sm font-medium"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col p-1">
                <label className="block text-sm font-bold  mb-2">
                  language
                </label>
                <div className="flex flex-col space-y-2 ">
                  <div className="flex items-center bg-[#FFDEE287] p-1 w-[220px] h-[30px]">
                    <input
                      type="checkbox"
                      id="english"
                      className="w-4 h-4 form-checkbox accent-[#FF3E54]  border-gray-300  bg-red-400"
                    />
                    <label
                      htmlFor="english"
                      className="ml-2 text-sm font-medium"
                    >
                      English
                    </label>
                  </div>
                  <div className="flex items-center bg-[#FFDEE287] p-1 w-[220px] h-[30px]">
                    <input
                      type="checkbox"
                      id="spanish"
                      className="w-4 h-4  form-checkbox accent-[#FF3E54] border-gray-300 focus:ring-orange-500"
                    />
                    <label
                      htmlFor="spanish"
                      className="ml-2 text-sm font-medium"
                    >
                      Hindi
                    </label>
                  </div>
                  <div className="flex items-center w-[220px] h-[30px]  bg-[#FFDEE287] p-1 w-[220px] h-[30px]">
                    <input
                      type="checkbox"
                      id="french"
                      className="w-4 h-4 form-checkbox accent-[#FF3E54] border-gray-300 focus:ring-orange-500"
                    />
                    <label
                      htmlFor="french"
                      className="ml-2 text-sm font-medium"
                    >
                      Marathi
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 mt-6">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border rounded px-3 py-2 w-[455px] h-[48px] border rounded px-3 py-2 bg-[#FFDEE287] ml-2"
                  required
                />
              </div>

              <div className="flex items-center w-[720px] h-[30px]  ">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 ccent-[#FF3E54]"
                />
                <label htmlFor="terms" className="ml-2 text-[14px] font-medium">
                  I agree to the
                </label>
                <label className="text-[#FF3E54] text-[14px] ml-1">
                  terms and conditions
                </label>
              </div>

              <button
                type="done"
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                done
              </button>
            </form>
          </div>
        </div>
      )}

      {isThankYouVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          aria-hidden="true"
        >
          <div
            className="bg-white p-8 rounded shadow-lg w-[400px] flex flex-col items-center text-center"
            role="dialog"
          >
            <img src={heart} alt="Heart icon" className="w-10 h-10 mb-4" />
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-700">Thank you for connect with us.</p>
            <button
              onClick={handledoneoverlay}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 transition-colors text-white py-2 rounded"
            >
              done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
