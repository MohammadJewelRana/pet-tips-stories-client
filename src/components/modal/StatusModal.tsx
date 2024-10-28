"use client";

import img from "@/assets/profile/profilePicture/dp.jpg";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import CustomModal from "./CustomModal";
import { Button } from "@nextui-org/button";
import { useUser } from "@/app/context/user.provider";
import { AiOutlineClose } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { imgbbUpload } from "@/utils/ImageUpload";
import { toast } from "sonner";
import Loading from "../UI/Loading";
import { useCreatePost } from "@/hooks/post.hook";

interface FormData {
  category: string;
  badges: string;
  pricing?: string | null; // Optional field
  details: string; // Required field
}

const StatusModal = async ({
  buttonText,
  modalTitle,
  className,
  icon,
}: {
  buttonText: string;
  modalTitle: string;
  className: string;
  icon?: ReactNode;
}) => {
  const { userDetails, userDetailsLoading } = useUser();
  // console.log(userDetails);

  const { mutate: handleCreatePost, isPending, isSuccess } = useCreatePost();

  const categoryOptions = [
    { key: "public", label: "Public" },
    { key: "premium", label: "Premium" },
  ];
  const badgesOptions = [
    { key: "tips", label: "Tips" },
    { key: "stories", label: "Stories" },
  ];
  const priceOptions = [
    { key: "20", label: "20" },
    { key: "50", label: "50" },
    { key: "100", label: "100" },
    { key: "200", label: "200" },
    { key: "500", label: "500" },
  ];

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      category: "stories",
      badges: "public",
    },
  });

  const selectedBadges = watch("badges");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      if (selectedImages.length + filesArray.length > 3) {
        setError("You can only select up to 3 images.");
        return;
      }

      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
      setError(null);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));

    if (selectedImages.length <= 3) {
      setError(null);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    if (!data?.pricing) {
      data.pricing = null;
    }
   

    let uploadedImages: string[] = [];

    if(selectedImages.length>0){
      uploadedImages = await imgbbUpload(selectedImages);
    }  


    const postData = {
      ...data,
      userId: userDetails?._id,
      postImage: uploadedImages,
    };
    console.log(postData);

    handleCreatePost(postData);
    reset();
  };

  return (
    <CustomModal
      buttonText={buttonText}
      css={`
        ${className} max-h-screen overflow-y-auto
      `}
      icon={icon}
      modalTitle={modalTitle}
    >
      <>
        {/* {userDetailsLoading && <Loading />} */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <hr className="border-gray-400 my-4" />

            <div className="flex justify-between items-center gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="rounded-full h-12 w-12 mt-1">
                  <Image
                    alt="dp"
                    className="rounded-full"
                    src={userDetails?.profileImage}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex md:flex-col ">
                  <p>{userDetails?.fullName}</p>
                  {/* Category Select */}
                  <div className="ml-4 md:-ml-1">
                    <select
                      id="category"
                      {...register("category")}
                      className="w-full px-1 py-1 text-[12px] border-b-2 border-b-gray-200 rounded-md focus:outline-none"
                    >
                      <option value="">Category</option>
                      {badgesOptions.map((option) => (
                        <option key={option.key} value={option.key}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                {/* Pricing (only visible for premium category) */}
                <div>
                  {selectedBadges === "premium" && (
                    <div>
                      <select
                        id="pricing"
                        {...register("pricing")}
                        className="w-full px-2 py-1 text-[12px] bg-slate-900 border-b-2 border-b-gray-200 rounded-md focus:outline-none"
                      >
                        <option value="">Pricing</option>
                        {priceOptions.map((option) => (
                          <option key={option.key} value={option.key}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.pricing && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.pricing.message as string}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {/* Badges Select */}
                <div>
                  <select
                    id="badges"
                    {...register("badges")}
                    className="w-full px-2 py-1 text-[12px] bg-slate-900 border-b-2 border-b-gray-200 rounded-md focus:outline-none"
                  >
                    <option value="">Badges</option>
                    {categoryOptions.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea Field */}
          <div>
            <textarea
              id="details"
              {...register("details", {
                required: "Details post is required",
              })}
              className="w-full px-4 py-2 rounded-md bg-[#3b232311] focus:outline-none text-xl resize-none"
              placeholder="What's on your mind?"
              style={{ minHeight: "150px" }}
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message as string}
              </p>
            )}
          </div>

          <div className="my-4">
            <label className="block cursor-pointer bg-slate-900 p-3 text-gray-300 font-medium text-center rounded-md hover:bg-slate-950 flex items-center justify-center gap-2">
              <FaCamera className="inline-block text-[12px]" />
              <p className="text-[12px]">Add Photos or Videos</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          </div>

          {/* Image Preview Section */}
          <div className="flex gap-6 flex-wrap mt-3">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative w-20 h-20">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  layout="fill"
                  className="object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow"
                  onClick={() => handleRemoveImage(index)}
                >
                  <AiOutlineClose className="text-red-500" />
                </button>
              </div>
            ))}
          </div>

          <Button
            className="my-3 w-full rounded-md font-semibold bg-blue-800"
            size="sm"
            type="submit"
          >
            Post Status
          </Button>
        </form>
      </>
    </CustomModal>
  );
};

export default StatusModal;
