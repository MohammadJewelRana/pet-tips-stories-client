import { Skeleton } from "@nextui-org/skeleton";

const loading = () => {
  return (
 
    <>
    <Skeleton>  
    <div className="h-[400px] bg-white ">
        Loading in inner loading
    </div>
    </Skeleton>

    </>
  );
};

export default loading;
