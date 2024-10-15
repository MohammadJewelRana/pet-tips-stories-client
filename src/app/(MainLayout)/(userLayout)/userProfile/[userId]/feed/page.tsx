/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useUser } from "@/app/context/user.provider";
import Feed from "@/components/feed/Feed";
import ProfileDetails from "@/components/UI/profile/profileDetails";
import { useGetAllSinglePost } from "@/hooks/post.hook";

const page = () => {

  const {user}=useUser();
    const {data:userAllPost,isLoading,error}=useGetAllSinglePost(user?.userId);
   
    const postData=userAllPost?.data;
    console.log(postData);
    
    


  return (
    <div>
      <ProfileDetails/>
      <Feed postData={postData} isLoading={isLoading} />
    </div>
  );
};

export default page;
