import Divider from "@/components/UI/Divider";
import ProfileDetails from "@/components/UI/profile/profileDetails";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="my-12">
      <ProfileDetails />
      <Divider />
      {/* <div className="bg-black px-2">
        <div className="text-gray-400 font-semibold  flex gap-4 py-4">
          <Link href="/profile">Feed </Link>
          <Link href="/media">Media </Link>
          <Link href="/profile">Videos </Link>
          <Link href="/profile">About </Link>
          <Link href="/profile">Connections </Link>
          <Link href="/profile">Activity </Link>
        </div>
      </div> */}

       

    </div>
  );
};

export default page;
