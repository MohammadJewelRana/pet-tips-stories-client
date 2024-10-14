// "use server";

// import axiosInstance from "@/src/lib/AxiosInstance";
// import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";
// import { FieldValues } from "react-hook-form";

 

// export const loginUser = async (userData: FieldValues) => {
//   try {
//     const { data } = await axiosInstance.post("/auth/login", userData);

//     //cookies set
//     if (data.success) {
//       cookies().set("accessToken", data?.data?.accessToken);
//       cookies().set("refreshToken", data?.data?.refreshToken);
//     }

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const logout = () => {
//   cookies().delete("accessToken");
//   cookies().delete("refreshToken");
// };

// export const getCurrentUser = async () => {
//   const accessToken = cookies().get("accessToken")?.value;

//   let decodedToken = null;

//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);

//     return {
//       _id: decodedToken._id,
//       name: decodedToken.name,
//       email: decodedToken.email,
//       mobileNumber: decodedToken.mobileNumber,
//       role: decodedToken.role,
//       status: decodedToken.status,
//       profilePhoto: decodedToken.profilePhoto,
//     };
//   }

//   return decodedToken;
// };