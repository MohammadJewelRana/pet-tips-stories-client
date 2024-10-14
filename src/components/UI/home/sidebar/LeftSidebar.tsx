 

import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import bgImage from "@/assets/profile/post/4.jpg";
import Divider from "@/components/UI/Divider";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCog,
  FaHome,
  FaImages,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

const LeftSideBar = () => {
  const links = [
    { id: 1, icon: <FaHome />, value: "feed", path: "/profile/feed" }, // Home icon for feed
    {
      id: 2,
      icon: <FaUserFriends />, // User friends icon for connections
      value: "connections",
      path: "/profile/connections",
    },
    {
      id: 3,
      icon: <FaImages />, // Images icon for media
      value: "media",
      path: "/profile/media",
    },
    {
      id: 4,
      icon: <FaCalendarAlt />, // Calendar icon for events
      value: "events",
      path: "/",
    },
    {
      id: 5,
      icon: <FaUsers />, // Users icon for groups
      value: "groups",
      path: "/",
    },
    {
      id: 6,
      icon: <FaCog />, // Settings gear icon for settings
      value: "settings",
      path: "/profile/settings",
    },
  ];

  return (
    <div>
      <div className="  ">
        <Image
          src={bgImage}
          className="w-full object-cover"
          height={200}
          width={200}
          alt="profile"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4   -mt-16">
        <div>
          <Image
            className="  h-24 w-24 border-2 border-white p-1"
            src={profileImage}
            height={200}
            width={200}
            alt="profile image"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Md Jewel Rana</h1>
          <p className="text-[16px] text-gray-400 my-2">Web developer</p>
        </div>

        {/* bio  */}
        <div className="max-w-[280px] text-gray-400 text-xl text-center">
          {" "}
          <p>
            I'd love to change the world, but they won’t give me the source
            code.
          </p>
        </div>

        {/* <div className="flex items-center justify-between  text-center"> */}

        <div className="grid grid-cols-3">
          <div className="border border-slate-800 p-4 text-center">
            <p className="font-bold text-xl">256</p>
            <p className="text-gray-400 text-[16px] font-semibold my-1">Post</p>
          </div>
          <div className="border border-slate-800 p-4 text-center">
            <p className="font-bold text-xl">2.5k</p>
            <p className="text-gray-400 text-[16px] font-semibold my-1">
              Followers
            </p>
          </div>
          <div className="border border-slate-800 p-4 text-center">
            <p className="font-bold text-xl">365</p>
            <p className="text-gray-400 text-[16px] font-semibold my-1">
              Following
            </p>
          </div>
        </div>
      </div>{" "}
      <Divider />
      {/* all link  */}
      <div className="my-8">
        {links?.map((item, index) => (
          <Link href={item?.path} key={index}>
            <div className="flex gap-4 mb-4 text-xl  font-bold  cursor-pointer hover:bg-blue-600 duration-300 hover:transition-all p-2">
              <p className="mt-1">{item?.icon}</p>
              <h1 className="capitalize">{item?.value}</h1>
            </div>
          </Link>
        ))}
        <Link href="/profile">
          <button className="bg-slate-800 text-white px-4 py-2 w-full rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-slate-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideBar;