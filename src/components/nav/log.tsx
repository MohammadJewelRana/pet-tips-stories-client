/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-no-undef */
"use client";

import React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";

import { useUser } from "@/app/context/user.provider";
import { logout } from "@/services/AuthService";

import img from "@/assets/profile/profilePicture/dp.jpg";
import Image from "next/image";
import { NavbarContent } from "@nextui-org/navbar";
import NavbarDropdown from "./NavbarDropDown";

const Log = () => {
  const router = useRouter();
  const { user, setIsLoading: userLoading } = useUser();
  console.log(user);

  // const pathname = usePathname();

  const handleLogout = () => {
    logout();
    // userLoading(true);
    router.push("/login");
    toast("Successfully Logged out!!");
  };

  return (
    <div>
      {user ? (
        <>
          {/* <button
            className="px-4 bg-slate-800 py-2 rounded-md hover:bg-slate-600 duration-300 "
            onClick={() => handleLogout()}
          >
            Logout
          </button> */}
          <NavbarDropdown/>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            {" "}
            <button className="px-4 bg-slate-800 py-2 rounded-md hover:bg-slate-600 duration-300 ">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
    // <div>
    //   {user ? (
    //     <>
    //       <button
    //         className="px-4 bg-slate-800 py-2 rounded-md hover:bg-slate-600 duration-300 "
    //         onClick={() => handleLogout()}
    //       >
    //         Logout
    //       </button>
    //     </>
    //   ) : (
    //     <>
    //       <Link href={"/login"}>
    //         {" "}
    //         <button className="px-4 bg-slate-800 py-2 rounded-md hover:bg-slate-600 duration-300 ">
    //           Login
    //         </button>
    //       </Link>
    //     </>
    //   )}
    // </div>
  );
};

export default Log;
