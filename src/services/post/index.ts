"use server";

import { FieldValues } from "react-hook-form";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/post/create-post", postData);

    // console.log(data);
    revalidateTag("posts");

    return data;
  } catch (error: any) {
    console.error("Error during user creating post:", error);

    throw new Error(
      error.response?.data?.message || "Failed to creating a post"
    );
  }
};

export const getAllPost = async () => {
  const fetchOptions = {
    next: {
      tags: ["posts"],
    },
  };

  //   const res = await fetch('http://localhost:5000/api/post');
  const res = await fetch(`${envConfig.baseApi}/post`, fetchOptions);

  //   const res = await fetch(`${envConfig.baseApi}/post`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getAllSinglePost = async (id: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/post/all/${id}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
