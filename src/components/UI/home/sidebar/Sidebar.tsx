 
import Follow from "./Follow";
import Profile from "./profile/Profile";

const Sidebar = () => {
  return (
    <div className="bg-black p-4">
        <Profile/>
       <div className="mt-4">
       <Follow />
       </div>
    </div>
  );
};

export default Sidebar;
