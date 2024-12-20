/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useUser } from "../context/user.provider";

import { useUserLogin } from "@/hooks/auth.hook";
import FXInput from "@/components/form/FXInput";
import FXForm from "@/components/form/FXForm";
import Loading from "@/components/UI/Loading";

const page = () => {
  const { mutate: handleLoginUser, isPending, isSuccess } = useUserLogin();

  const { setIsLoading: userLoading } = useUser();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect"); //get redirect path

  console.log(redirect);

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    handleLoginUser(data);

    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push(redirect || "/");
    }
  }, [isPending, isSuccess, redirect, router]);
  

  return (
    <>
      {isPending && <Loading />}

      <div className="flex items-center justify-center h-screen px-2   bg-gray-800 ">
        <div className="   md:w-6/12  p-8 bg-black">
          <div className="text-center  ">
            <h1 className=" text-4xl font-bold">Sign In</h1>
            <p className="text-gray-400 py-3 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/registration">
                {" "}
                <span className="text-blue-600 cursor-pointer ml-1 ">
                  Click here to Sign up
                </span>
              </Link>
            </p>
          </div>

          {/* form  */}
          <div className=" ">
            <FXForm
              onSubmit={onSubmit}
              // resolver={zodResolver(loginValidationSchema)}
            >
              <div className="py-3 ">
                <FXInput label="Email" name="email" type="email" />
              </div>
              <div className="py-3">
                <FXInput label="Password" name="password" type="password" />
              </div>

              <Button
                className="my-3  w-full rounded-md  font-semibold bg-blue-600"
                size="lg"
                type="submit"
              >
                Login
              </Button>
            </FXForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
