import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  getSingleUserById,
 
  loginUser,
  registerUser,
} from "@/services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
 

export const useGetSingleUserDetails = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_USER", id],
    queryFn: async () => await getSingleUserById(id),
    enabled: !!id,
  });
};
