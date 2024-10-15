import { useQuery } from "@tanstack/react-query";

import { getAllPost, getAllSinglePost } from "@/services/post";

export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost(),
  });
};

export const useGetAllSinglePost = (id:string) => {
  return useQuery({
    queryKey: ["GET_ALL_SINGLE_POST"],
    queryFn: async () => await getAllSinglePost(id),
  });
};
