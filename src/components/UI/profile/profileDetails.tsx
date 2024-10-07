import Image from "next/image";

import {
  FaCheck,
  FaJoint,
  FaLocationArrow,
  FaPen,
  FaSortNumericUpAlt,
} from "react-icons/fa";
import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import Link from "next/link";
import bgImage from "@/assets/profile/post/4.jpg";

const ProfileDetails = () => {
  return (
    <div>
      <div className="  ">
        <Image
          src={bgImage}
          className="w-full h-44 object-cover"
          height={200}
          width={200}
          alt="profile"
        />
      </div>

      <div className="bg-black px-4 pt-8 -mt-20 pb-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  flex-wrap  ">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 flex-wrap">
            <div>
              <Image
                className="rounded-full h-36 w-36 border-4"
                src={profileImage}
                height={200}
                width={200}
                alt="profile image"
              />
            </div>
            <div className=" mt-10">
              <h1 className="text-xl font-semibold flex gap-2 items-center justify-center">
                Jewel Rana{" "}
                <span className="  ">
                  <FaCheck className="mt-1 bg-green-600 text-md rounded-full p-1" />{" "}
                </span>
              </h1>
              <p className="text-[14px] text-gray-400 my-1">250 connections</p>
            </div>
          </div>

          <div className="mt-10 ">
            <button className="bg-[#881a27] -ml-4 mt-2 md:-mt-2 flex items-center gap-2 text-white text-sm px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-600">
              <FaPen className="text-white text-sm" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="flex gap-4 py-2 flex-wrap items-center justify-center md:justify-start my-2">
          <div className="flex gap-2 items-center text-gray-400  text-[14px]">
            <FaSortNumericUpAlt />
            <h1>Lead Developer</h1>
          </div>
          <div className="flex gap-2 items-center text-gray-400  text-[14px]">
            <FaLocationArrow />
            <h1>Dhaka</h1>
          </div>
          <div className="flex gap-2 items-center text-gray-400  text-[14px]">
            <FaJoint />
            <h1>Joined on Nov 26, 2019</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-black  border-y-1 border-slate-800  -mt-2">
        <div className="  border-slate-800 p-2 text-center">
          <p className="font-bold text-xl">256</p>
          <p className="text-gray-400 text-[16px] font-semibold my-1">Post</p>
        </div>
        <div className="  border-slate-800 p-2 text-center">
          <p className="font-bold text-xl">2.5k</p>
          <p className="text-gray-400 text-[16px] font-semibold my-1">
            Followers
          </p>
        </div>
        <div className="  border-slate-800 p-2 text-center">
          <p className="font-bold text-xl">365</p>
          <p className="text-gray-400 text-[16px] font-semibold my-1">
            Following
          </p>
        </div>
      </div>

      <div className="bg-black px-4">
        <div className="text-gray-400 font-semibold  flex gap-4 py-4 lex flex-wrap justify-center md:justify-start">
          <Link href="/profile/feed">Feed </Link>
          <Link href="/profile/media">Media </Link>
          <Link href="/profile/connections">Videos </Link>
          <Link href="/profile/about">About </Link>
          <Link href="/profile">Connections </Link>
          <Link href="/profile">Activity </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
