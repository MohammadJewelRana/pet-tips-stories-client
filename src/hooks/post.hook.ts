import { useQuery } from "@tanstack/react-query";

import { getAllPost } from "@/services/post";

export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost(),
  });
};
