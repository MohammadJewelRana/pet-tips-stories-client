import Image from "next/image";
import { FaSms, FaTrash } from "react-icons/fa";

import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import profileImage1 from "@/assets/profile/profilePicture/dp2.jpg";
import profileImage2 from "@/assets/profile/profilePicture/dp3.jpg";

const SFriends = () => {
  const photos = [
    profileImage,
    profileImage1,
    profileImage2,
    profileImage,
    profileImage,
    profileImage,
    profileImage,
  ];

  const friends = [
    { id: 1, name: "jewel rana", img: profileImage },
    { id: 2, name: "suad rana", img: profileImage1 },
    { id: 3, name: "Aliful Islam ", img: profileImage2 },
    { id: 4, name: "Tua Jannat ", img: profileImage },
    { id: 5, name: "jewel rana", img: profileImage },
    { id: 6, name: "suad rana", img: profileImage1 },
    { id: 7, name: "Aliful Islam ", img: profileImage2 },
    { id: 8, name: "Tua Jannat ", img: profileImage },
  ];

  return (
    <div className="bg-black px-4 mb-8">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold mb-2">
          Friends{" "}
          <span className="bg-slate-600 text-red-600 text-[12px] px-2 py-1 rounded-md">
            230
          </span>
        </h1>
        <button className="bg-slate-800   text-[10px] text-blue-200 px-2 py-1 rounded-md   transition-all duration-300 hover:bg-red-600">
          See All
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 place-content-center mb-4">
        {friends?.slice(0, 4).map((friend, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg flex flex-col items-center justify-center gap-2 py-2"
          >
            <div>
              <Image
                alt="profile image"
                className=" rounded-full  object-cover h-12 w-12  "
                height={200}
                src={friend.img}
                width={200}
              />
            </div>
            <div>
              <h1 className="capitalize">{friend?.name}</h1>
              <p className="text-[12px] text-gray-400">50 Connections</p>
              <div className="mt-2 flex gap-3 items-center justify-center">
                <button
                  className="bg-blue-600 text-white  px-2 py-1 rounded-md"
                  title="Send Message"
                >
                  <FaSms />
                </button>
                <button
                  className="bg-red-600 text-white  px-2 py-1 rounded-md"
                  title="UnFollow "
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SFriends;
