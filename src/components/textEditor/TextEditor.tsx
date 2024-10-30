
"use client"
import img from "@/assets/profile/profilePicture/dp.jpg";
import Image from "next/image";

import { FaVideo, FaPhotoVideo, FaSmile } from "react-icons/fa";
import StatusModal from "../modal/StatusModal";
import { useUser } from "@/app/context/user.provider";
import Loading from "../UI/Loading";

const TextEditor = () => {

  const {userDetails}=useUser();
  // console.log(userDetails);
  



  return (
   <>
 
   <div className="bg-slate-900 py-4 w-full text-white     rounded-lg">
      <div className="flex items-center  gap-4 px-4 py-2 my-4">
        {/* Profile Image */}
        <div className=" rounded-full h-12 w-12 mt-1  ">
          <Image
            alt="dp"
            className="rounded-full  "
            src={userDetails?.profileImage}
            width={48}
            height={48}
          />
        </div>
        {/* Text Input */}
        <div className="border   border-gray-500 rounded-full text-[12px] text-gray-500 w-full pl-4">
          {/* <p>What&apos;s on your mind?</p> */}
           <StatusModal
            buttonText="What&apos;s on your mind?"
            className="bg-slate-900 text-gray-500  hover:text-white  "
            // icon={<FaPhotoVideo className="text-green-500 z-10  " />}
            modalTitle="Create Post "
          />  
        </div>
      </div>

      <hr className="my-3 border-gray-600" />

      {/* Options Row */}
      <div className="flex justify-around text-gray-400 text-[14px]">
        <div className="flex items-center gap-2 hover:text-white">
          <StatusModal
            buttonText="LiveVideo"
            className="bg-slate-900 text-gray-300 hover:text-white "
            icon={<FaVideo className="text-red-500 z-10" />}
            modalTitle="Create Post "
          />
        </div>

        <div className="flex items-center gap-2 hover:text-white">
          <StatusModal
            buttonText="Photo/Video"
            className="bg-slate-900 text-gray-300  hover:text-white"
            icon={<FaPhotoVideo className="text-green-500 z-10  " />}
            modalTitle="Create Post "
          />
        </div>

        <div className="flex items-center gap-2 hover:text-white ">
          <StatusModal
            buttonText="Feeling/Activity"
            className="bg-slate-900 text-gray-300 hover:text-white"
            icon={<FaSmile className="text-yellow-500 z-10" />}
            modalTitle="Create Post "
          />
        </div>
      </div>
    </div>
   </>
  );
};

export default TextEditor;
