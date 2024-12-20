import { Navbar } from "@/components/nav/navbar";

 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  ">
      <div className="relative flex flex-col h-[600px]">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
