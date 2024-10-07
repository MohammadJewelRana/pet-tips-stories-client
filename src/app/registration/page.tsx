"use client";

import FXDatePicker from "@/components/form/FXDatePicker";
import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";
import FXSelect from "@/components/form/FXSelect";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const page = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // handleUserLogin(data);
    // userLoading(true);
  };

  const genderOptions = [
    { key: "male", label: "male" },
    { key: "female", label: "female" },
    { key: "others", label: "others" },
  ];

  return (
    <div className="flex items-center justify-center h-screen  px-2  bg-gray-800 ">
      <div className="    md:w-6/12  p-8 bg-black">
        <div className="text-center  ">
          <h1 className=" text-4xl font-bold">Sign Up</h1>
          <p className="text-gray-400 py-3 text-sm">
            Already have an account?{" "}
            <Link href="/login">
              {" "}
              <span className="text-blue-600 cursor-pointer ml-1 ">
                Click here to Sign in
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
            <div className="py-3 flex gap-4   ">
              <FXInput label="Full Name" name="fullName" type="text" />
              <FXInput label="Surname" name="surName" type="text" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>
            <div className="py-3 flex gap-4  ">
              <FXDatePicker label="DOB " name="dob" />
              <FXSelect label="Gender" name="gender" options={genderOptions} />
            </div>

            <Button
              className="my-3  w-full rounded-md  font-semibold bg-blue-600"
              size="lg"
              type="submit"
            >
              Register
            </Button>
          </FXForm>
        </div>
      </div>
    </div>
  );
};

export default page;
