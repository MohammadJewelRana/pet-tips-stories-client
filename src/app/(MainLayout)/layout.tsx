import { Navbar } from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
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
