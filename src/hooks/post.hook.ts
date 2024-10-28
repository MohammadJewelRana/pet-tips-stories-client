import { useMutation, useQuery } from "@tanstack/react-query";

import { createPost, getAllPost, getAllSinglePost } from "@/services/post";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost(),
  });
};

export const useGetAllSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["GET_ALL_SINGLE_POST"],
    queryFn: async () => await getAllSinglePost(id),
  });
};

export const useCreatePost = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post creating successful.");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
