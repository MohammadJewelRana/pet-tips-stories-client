"use client";

import { useUser } from "@/app/context/user.provider";
import PostCard from "@/components/UI/profile/post/PostCard";
import { useGetAllPost } from "@/hooks/post.hook";

const Feed = () => {
  const { data, isLoading, error } = useGetAllPost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const postData = data?.data;
 

  const {user}=useUser();
  console.log(user);
  

  
  
  return (
    <div className=" py-4">
      {postData?.map((post, index) => <PostCard post={post} key={index} />)}
    </div>
  );
};

export default Feed;
