import Container from "@/components/UI/Container";
import ProfileDetails from "@/components/UI/profile/profileDetails";
import Sidebar from "@/components/UI/profile/sidebar/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className=" flex w-full gap-12 mx-auto flex-wrap md:flex-nowrap">
        <div className=" md:w-4/5  ">
        <ProfileDetails/>
        {children}
        
        </div>
        <div className=" md:w-2/5  ">
          {" "}
          <Sidebar />
        </div>
      </div>
    </Container>
  );
};

export default layout;
