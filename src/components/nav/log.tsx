"use client";

import React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";

import { useUser } from "@/app/context/user.provider";
import { logout } from "@/services/AuthService";

const Log = () => {
  const router = useRouter();
  const { user, setIsLoading: userLoading } = useUser();
  console.log(user);

  // const pathname = usePathname();

  const handleLogout = () => {
    logout();
    // userLoading(true);
    router.push('/login');
    toast("Successfully Logged out!!");

    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //     router.push("/");
    //   }
  };

  return (
    <div>
      {user ? (
        <>
          <button
            className="px-4 bg-slate-800 py-2 rounded-md hover:bg-slate-600 duration-300 "
            onClick={() => handleLogout()}
          >
            Logout
          </button>
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
  );
};

export default Log;
