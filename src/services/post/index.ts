"use server";

import envConfig from "@/config/envConfig";

// import axiosInstance from "@/src/lib/AxiosInstance";
// import { revalidateTag } from "next/cache";

// export const createPost = async (formData: FormData): Promise<any> => {
//   try {
//     //here backend named items thats why write items
//     //i passed forma data
//     //in header write multipart as it is multipart form..
//     const { data } = await axiosInstance.post("/items", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     revalidateTag("posts");

//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to create post");
//   }
// };

export const getAllPost = async () => {
  //   let fetchOptions = {};

  //   fetchOptions = {
  //     cache: "no-store",
  //   };

  //   const res = await fetch('http://localhost:5000/api/post');
  const res = await fetch(`${envConfig.baseApi}/post`);

  //   const res = await fetch(`${envConfig.baseApi}/post`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// export const getAllPost = async () => {
//     const fetchOptions = {
//       cache: "no-store",
//     };

//     const res = await fetch('http://localhost:5000/api/post',fetchOptions);
//     console.log(res);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   };
