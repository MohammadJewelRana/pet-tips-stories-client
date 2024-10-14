import profileImage from "@/assets/profile/profilePicture/dp.jpg";

import Follow from "./Follow";

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
    <div className="bg-black p-4">
      <div className="mt-4">
        <Follow
          title={"Following"}
          followData={followData}
          status={"following"}
        />
      </div>

      <Follow
        title={"Followers"}
        followData={followData}
        status={"followers"}
      />
    </div>
  );
};

export default Sidebar;

// import Follow from "./Follow";
// import Followers from "./Followers";

// const Sidebar = () => {
//   return (
//     <div className="bg-black p-4">
//       <div className="mt-4">
//         <Follow />
//       </div>

//       <Followers />
//     </div>
//   );
// };

// export default Sidebar;
