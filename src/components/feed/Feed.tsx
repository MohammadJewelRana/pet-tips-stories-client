 

import CardSkeleton from "@/components/skeleton/CardSkeleton";
import PostCard from "@/components/UI/profile/post/PostCard";
 

const Feed = ({postData,isLoading}:any) => {
 

  return (
    <>
      {isLoading && <CardSkeleton />}
      <div className=" py-4">
        {postData?.map((post:any, index:any) => <PostCard key={index} post={post} />)}
      </div>
    </>
  );
};

export default Feed;
