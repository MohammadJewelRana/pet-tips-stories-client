import React from "react";
import { FaCalendar, FaHeart, FaVoicemail } from "react-icons/fa";

const SAbout = () => {

  
  return (
    <div className="bg-black p-4">
      <div className="py-2">
        <h1 className="text-xl font-bold mb-2">About</h1>
        <p className="text-gray-400 text-[12px] max-w-2xl text-justify">
          He moonlights difficult engrossed it, sportsmen. Interested has all
          Devonshire difficulty gay assistance joy.
        </p>
        <div className="my-3">
          <div className="flex  text-[14px] items-center gap-2 text-gray-300 mb-1">
            <FaCalendar />
            <span>Born : </span>
            <span>October 26, 2012</span>
          </div>
          <div className="flex  text-[14px] items-center gap-2 text-gray-300 mb-1">
            <FaHeart />
            <span>Stauts : </span>
            <span>Single</span>
          </div>
          <div className="flex  text-[14px] items-center gap-2 text-gray-300">
            <FaVoicemail />
            <span>Email : </span>
            <span>js.rana0326@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAbout;
