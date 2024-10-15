"use client";

import CardSkeleton from "@/components/skeleton/CardSkeleton";
import PostCard from "@/components/UI/profile/post/PostCard";
import { useGetAllPost } from "@/hooks/post.hook";

const Feed = () => {
  const { data, isLoading, error } = useGetAllPost();

  // if (isLoading) return <CardSkeleton/>;
  // if (error) return <p>Error: {error.message}</p>;

  const postData = data?.data;

  return (
    <>
      {isLoading && <CardSkeleton />}
      <div className=" py-4">
        {postData?.map((post, index) => <PostCard key={index} post={post} />)}
      </div>
    </>
  );
};

export default Feed;
