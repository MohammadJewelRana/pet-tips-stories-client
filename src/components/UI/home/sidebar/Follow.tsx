import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import Image from "next/image";
import { FaPlus, FaUserPlus } from "react-icons/fa";

const Follow = () => {
  const followData = [
    {
      id: 1,
      name: "jewel rana",
      img: profileImage,
      profession: "web developer",
      followingStatus: true,
    },
    {
      id: 2,
      name: "jewel rana",
      img: profileImage,
      profession: " developer",
      followingStatus: false,
    },
    {
      id: 3,
      name: "jewel rana",
      img: profileImage,
      profession: "Software developer",
      followingStatus: false,
    },
    {
      id: 4,
      name: "jewel rana",
      img: profileImage,
      profession: "web developer",
      followingStatus: true,
    },
    {
      id: 5,
      name: "jewel rana",
      img: profileImage,
      profession: "web developer",
      followingStatus: false,
    },
    {
      id: 6,
      name: "jewel rana",
      img: profileImage,
      profession: "Software developer",
      followingStatus: false,
    },
    {
      id: 7,
      name: "jewel rana",
      img: profileImage,
      profession: "web developer",
      followingStatus: true,
    },
  ];

  return (
    <div className="bg-black p-4">
      <div>
        <h1 className="text-2xl font-bold capitalize mt-4 mb-8">
          Who to follow
        </h1>
      </div>

      <div>
        {followData?.slice(0, 5).map((item, index) => (
          <>
            <div className="flex  justify-between  items-center gap-2   mb-4">
              <div className="flex   items-center justify-center  gap-4 ">
                <div>
                  <Image
                    className="rounded-full h-12 w-12 border-2 border-blue-500 p-1"
                    src={profileImage}
                    height={200}
                    width={200}
                    alt="profile image"
                  />
                </div>

                <div className="capitalize">
                  <h1 className="text-[16px] font-semibold  ">{item.name}</h1>
                  <p className="text-[12px] text-gray-400">
                    {item?.profession}
                  </p>
                </div>
              </div>

              {item?.followingStatus === true ? (
                <div
                  className="text-md bg-blue-600 text-white p-2 rounded-full cursor-pointer"
                  title="UnFollow"
                >
                  <FaUserPlus />
                </div>
              ) : (
                <div
                  className="text-md bg-slate-700 text-white p-2 rounded-full cursor-pointer"
                  title="Follow"
                >
                  <FaPlus />
                </div>
              )}
            </div>
          </>
        ))}

        <button className="bg-slate-800 text-white px-4 py-2 w-full rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-slate-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50">
          View More
        </button>
      </div>
    </div>
  );
};

export default Follow;
