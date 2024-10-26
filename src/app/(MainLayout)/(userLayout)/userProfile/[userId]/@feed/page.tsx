/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useUser } from "@/app/context/user.provider";
import Feed from "@/components/feed/Feed";
import ProfileDetails from "@/components/UI/profile/profileDetails";
import { useGetAllSinglePost } from "@/hooks/post.hook";
import { usePathname } from "next/navigation";

const page = ( ) => {

  const path=usePathname();
  console.log(path);
  
  const {user,userDetails}=useUser();
    const {data:userAllPost,isLoading,error}=useGetAllSinglePost(user?.userId);
   
    const postData=userAllPost?.data;
    console.log(postData);

     
    const userData=userDetails?.data;

    
    
    


  return (
    <div>
      <ProfileDetails userData={userData} />
      <Feed postData={postData} isLoading={isLoading} />
    </div>
  );
};

export default page;
