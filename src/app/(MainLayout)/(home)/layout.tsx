import { ReactNode } from "react";

import Container from "@/components/UI/Container";
import Sidebar from "@/components/UI/home/sidebar/Sidebar";
import LeftSideBar from "@/components/UI/home/sidebar/LeftSidebar";
import TextEditor from "@/components/textEditor/TextEditor";

const layout = ({ children,feed }: { children: ReactNode ,feed:ReactNode}) => {
  return (
    <Container>
      <div className=" flex w-full gap-12 mx-auto flex-wrap md:flex-nowrap">
      <div className="  md:w-2/5  ">
          <LeftSideBar/>
        </div>
        <div className=" md:w-4/5  ">
        <TextEditor/>
        {children}
        {feed}</div>
        <div className="  md:w-2/5  ">
          <Sidebar />  
        </div>
      </div>
    </Container>
  );
};

export default layout;
