import { getAllPost } from "@/services/post";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost(),
  });
};
