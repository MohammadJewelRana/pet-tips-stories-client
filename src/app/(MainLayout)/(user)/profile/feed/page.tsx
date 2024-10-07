import Image from "next/image";
import React from "react";
import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import img1 from "@/assets/profile/post/1.jpg";
import img2 from "@/assets/profile/post/2.jpg";
import img3 from "@/assets/profile/post/3.jpg";

import {
  FaCheck,
  FaComment,
  FaEllipsisV,
  FaPaperPlane,
  FaPen,
  FaShare,
  FaThumbsUp,
} from "react-icons/fa";
import PostCard from "@/components/UI/profile/post/PostCard";

const Feed = () => {
  const postData = [
    {
      id: "1",
      name: "John Doe",
      photoArray: [img1],
      likes: 150,
      share: 25,
      comments: [
        {
          userId: "101",
          commentText: "Awesome photos!",
        },
        {
          userId: "102",
          commentText: "Love the scenery!",
        },
      ],
      details:
        "A beautiful day spent exploring the great outdoors with friends and family.A beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and family",
    },
    {
      id: "2",
      name: "Jane Smith",
      photoArray: [img1, img2, img3],
      likes: 200,
      share: 40,
      comments: [
        {
          userId: "103",
          commentText: "Stunning views!",
        },
        {
          userId: "104",
          commentText: "Great composition!",
        },
      ],
      details:
        "Capturing breathtaking views during my hike up the mountains, an unforgettable experience.",
    },
    {
      id: "3",
      name: "Alex Johnson",
      photoArray: [img1, img2],
      likes: 85,
      share: 10,
      comments: [
        {
          userId: "105",
          commentText: "Looks amazing!",
        },
      ],
      details:
        "Enjoying a peaceful moment at the lake, surrounded by nature's beauty and tranquility.",
    },
    {
      id: "4",
      name: "Emily Davis",
      photoArray: [img2],
      likes: 120,
      share: 30,
      comments: [
        {
          userId: "106",
          commentText: "Incredible!",
        },
        {
          userId: "107",
          commentText: "Beautiful shot!",
        },
      ],
      details:
        "Experiencing the vibrant colors of the sunset, a perfect end to a wonderful day.A beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyA beautiful day spent exploring the great outdoors with friends and familyv",
    },
    {
      id: "5",
      name: "Michael Brown",
      photoArray: [img1],
      likes: 95,
      share: 20,
      comments: [
        {
          userId: "108",
          commentText: "Fantastic!",
        },
      ],
      details:
        "Sharing moments of joy with my family at the park, where laughter and love abound.",
    },
    {
      id: "6",
      name: "Sophia Wilson",
      photoArray: [img2],
      likes: 110,
      share: 35,
      comments: [
        {
          userId: "109",
          commentText: "So vibrant!",
        },
        {
          userId: "110",
          commentText: "I love this!",
        },
      ],
      details:
        "Exploring new places and experiencing different cultures is always a thrilling adventure.",
    },
  ];

  console.log(postData);

  return (
    <div className=" py-4">
      {postData?.map((post, index) => <PostCard post={post} key={index} />)}
    </div>
  );
};

export default Feed;
