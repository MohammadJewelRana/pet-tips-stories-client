import { Navbar } from "@/components/navbar";

 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#191A1F] z-20">
      <div className="relative flex flex-col h-[600px]" >
        <Navbar />
        <main>
        
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
