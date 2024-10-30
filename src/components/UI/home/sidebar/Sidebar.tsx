import Follow from "./Follow";

import profileImage from "@/assets/profile/profilePicture/dp.jpg";

 

const Sidebar = () => {
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
    <div className="  ">
      <div className=" bg-slate-900 rounded-md">
        <Follow
          followData={followData}
          status={"following"}
          title={"Following"}
        />
      </div>

 <div className="mt-8 bg-slate-900 rounded-md">
 <Follow
        followData={followData}
        status={"followers"}
        title={"Followers"}
      />
 </div>
    </div>
  );
};

export default Sidebar;
 
