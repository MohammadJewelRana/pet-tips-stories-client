/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import Image from "next/image";

import {
  FaCheck,
  FaComment,
  FaEllipsisV,
  FaPaperPlane,
  FaPen,
  FaShare,
  FaThumbsUp,
} from "react-icons/fa";

import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import img1 from "@/assets/profile/post/1.jpg";
import img2 from "@/assets/profile/post/2.jpg";
import img3 from "@/assets/profile/post/3.jpg";
import Divider from "../../Divider";
import ImageGallery from "./ImageGallery";
import Link from "next/link";
import { useState } from "react";

const PostCard = ({ post }: { post: any }) => {
  const { id, name, photoArray, likes, share, details } = post || undefined;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Divider />

      <div className="bg-black px-4 py-4  ">
        {/* upper  */}
        <div className="flex  justify-between  items-center gap-2   ">
          <div className="flex   items-center justify-center  gap-4 ">
            <div>
              <Image
                className="rounded-full h-12 w-12 border-2 border-blue-500 p-1"
                src={profileImage}
                height={200}
                width={200}
                alt="profile image"
              />
            </div>
            <div className="">
              <div className="flex">
                <h1 className="text-[16px] font-semibold flex gap-4 items-center justify-center">
                  {name}
                </h1>
                <p className="text-[14px] text-gray-400  mt-1 ml-4 ">9 hour ago</p>
              </div>
              <div className="  w-16 text-center rounded-md text-[14px] mt-1 px-4 bg-red-400 opacity-85">
                <span className="text-white ">Tips</span>
              </div>
            </div>
          </div>

          <div className=" bg-slate-900 p-2 rounded-md cursor-pointer">
            <FaEllipsisV className="text-white text-sm  rotate-90" />
          </div>
        </div>

        {/* description  */}

        <div className="text-[14px] text-gray-400 py-4">
          <p className="text-justify">
            {isExpanded || details.length <= 250 ? (
              details
            ) : (
              <>
                {details.slice(0, 250)}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={handleToggle}
                >
                  {" "}
                  see more...
                </span>
              </>
            )}
          </p>
          {isExpanded && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleToggle}
            >
              {" "}
              see less
            </span>
          )}
        </div>
        <div>
          <ImageGallery images={photoArray} />
        </div>

        {/* like comment share  */}
        <div className="flex justify-between items-center gap-4 text-gray-400 text-[14px] my-4 flex-wrap">
          <div className="flex items-center gap-6 flex-1 overflow-hidden whitespace-nowrap">
            <div className="flex items-center text-blue-600">
              <FaThumbsUp className="text-gray-500" />
              <span className="ml-1">Liked ({likes})</span>
            </div>
            <div className="flex items-center">
              <FaComment className="text-gray-500" />
              <span className="ml-1">Comments (12)</span>
            </div>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <FaShare className="text-gray-500" />
            <span className="ml-1">Share ({share})</span>
          </div>
        </div>
        {/* add a comment  */}
        <div className="flex items-center space-x-3">
          <div>
            <Image
              className="rounded-full h-12 w-12 p-1"
              src={profileImage}
              height={200}
              width={200}
              alt="profile image"
            />
          </div>
          <div className="flex items-center w-full">
            <input
              type="text"
              //   value={comment}
              //   onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="flex-grow  border-gray-400 rounded-md p-2 text-gray-700"
            />
            <button
              //   onClick={handleSendComment}
              className="ml-2 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;