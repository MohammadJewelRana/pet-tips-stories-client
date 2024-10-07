

 

import SAbout from "./SAbout";
import SFriends from "./SFriends";
import SPhotos from "./SPhotos";

const Sidebar = () => {
  return (
    <div className=" ">
      <SAbout />


      <div className="mt-8 ">
      <SPhotos />
      </div>
      <div className="mt-8 ">
      <SFriends />
      </div>
    </div>
  );
};

export default Sidebar;
