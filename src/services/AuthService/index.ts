"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import axiosInstance from "@/lib/AxiosInstance";
import envConfig from "@/config/envConfig";

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


//get full user details
export const getUserDetails = async (id: string) => {
  const res = await fetch(`${envConfig.baseApi}/user/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
