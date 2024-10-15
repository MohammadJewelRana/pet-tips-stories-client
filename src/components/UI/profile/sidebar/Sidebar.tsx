



import { useUser } from "@/app/context/user.provider";
import SAbout from "./SAbout";
import SFriends from "./SFriends";
import SPhotos from "./SPhotos";
import Loading from "../../Loading";

const Sidebar = () => {

 
 
  

  // const aboutData={
  //   aboutMe,dob,relationshipStaus,email
  // }

   
  
  

  return (
   <>
   
   <div className=" ">
      <SAbout   />


      <div className="mt-8 ">
      <SPhotos  />
      </div>
      <div className="mt-8 ">
      <SFriends   />
      </div>
    </div>
   </>
  );
};

export default Sidebar;
