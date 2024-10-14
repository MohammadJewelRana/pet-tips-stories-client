"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/create-user", userData);
    console.log(data);

    return data;
  } catch (error: any) {
    console.error("Error during user registration:", error);

    throw new Error(error.response?.data?.message || "Failed to register user");
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    console.log(data);

    //cookies set
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    // throw new Error(error);
    console.error("Error during user login:", error);
    throw new Error(error.response?.data?.message || "Failed to  login user");
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    console.log(decodedToken);

    return {
      userId: decodedToken.userId,
      name: decodedToken.name,
      email: decodedToken.email,

      role: decodedToken.role,
    };
  }

  return decodedToken;
};
