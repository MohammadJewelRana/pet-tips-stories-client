import { Skeleton } from "@nextui-org/skeleton";

const CardSkeleton = () => {
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="mb-12">
          <div className="bg-slate-900 px-4 py-4">
            {/* Upper section */}
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-4">
                {/* Profile image skeleton */}
                <Skeleton className="rounded-full h-12 w-12 border-2 border-blue-500 p-1" />

                <div>
                  <div className="flex gap-4 items-center justify-center">
                    {/* Name skeleton */}
                    <Skeleton className="h-4 w-24" />

                    {/* Time skeleton */}
                    <Skeleton className="h-3 w-16 mt-1 ml-4" />
                  </div>

                  {/* Category skeleton */}
                  <Skeleton className="w-16 text-center rounded-md text-[14px] mt-1 px-4 bg-red-400 opacity-85 h-5" />
                </div>
              </div>

              {/* Ellipsis menu skeleton */}
              <Skeleton className="bg-slate-900 p-2 rounded-md h-6 w-6" />
            </div>

            {/* Description skeleton */}
            <div className="text-[14px] text-gray-400 py-4">
              <Skeleton className="h-4 w-full mb-2" />

              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Image skeleton */}
            <div className="text-[14px] text-gray-400 py-4 grid grid-cols-2 gap-2">
              <Skeleton className="h-32 w-full mb-2" />
              <Skeleton className="h-32 w-full mb-2" />
            </div>

            {/* Like, comment, share skeleton */}
            <div className="flex justify-between items-center gap-4 text-gray-400 text-[14px] my-4 flex-wrap">
              <div className="flex items-center gap-6 flex-1">
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-12" />
            </div>

            {/* Add a comment skeleton */}
            <div className="flex items-center space-x-3">
              <Skeleton className="rounded-full h-12 w-12" />
              <Skeleton className="flex-grow h-10 rounded-md" />
              <Skeleton className="ml-2 p-2 rounded-md h-10 w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
