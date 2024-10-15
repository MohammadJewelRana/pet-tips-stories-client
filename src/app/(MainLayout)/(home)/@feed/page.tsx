/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Feed from "@/components/feed/Feed";
import { useGetAllPost } from "@/hooks/post.hook";

const page = () => {

  const { data, isLoading, error } = useGetAllPost();

  // if (isLoading) return <CardSkeleton/>;
  // if (error) return <p>Error: {error.message}</p>;

  const postData = data?.data;

  return (
    <div>
      <Feed isLoading={isLoading} postData={postData} />
    </div>
  );
};

export default page;
