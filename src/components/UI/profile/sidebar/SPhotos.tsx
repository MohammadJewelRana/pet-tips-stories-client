import Image from "next/image";

import profileImage from "@/assets/profile/profilePicture/dp.jpg";
import profileImage1 from "@/assets/profile/profilePicture/dp2.jpg";
import profileImage2 from "@/assets/profile/profilePicture/dp3.jpg";

const SPhotos = () => {
  const photos = [
    profileImage,
    profileImage1,
    profileImage2,
    profileImage,
    profileImage,
    profileImage,
    profileImage,
  ];

  return (
    <div className="bg-black px-4 mb-8">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold mb-2">Photos</h1>
        <button className="bg-slate-800   text-[10px] text-blue-200 px-2 py-1 rounded-md   transition-all duration-300 hover:bg-red-600">
          See All Photos
        </button>
      </div>
      <div>
        <div className="flex items-center justify-center w-full gap-2">
          {photos?.slice(0, 2).map((item, index) => (
            <div key={index}>
              <Image
                alt="profile image"
                className=" rounded-md object-cover h-32  "
                height={200}
                src={item}
                width={200}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 mt-2">
            {photos?.slice(2, 5).map((item, index) => (
              <div key={index}>
                <Image
                  alt="profile image"
                  className=" rounded-md  object-cover h-32 "
                  height={200}
                  src={item}
                  width={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPhotos;
