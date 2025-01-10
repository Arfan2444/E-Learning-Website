import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

function ProgressCourseItem2({ course }) {
  return (
    <Link href={"/course-preview/2441"}>
      <div className="border cursor-pointer rounded-xl hover:shadow-md hover:shadow-purple-400 mx-0 ml-4">
        <Image
          src={"/Course2.jpg"}
          width={500}
          height={150}
          alt="banner"
          className='className="rounded-t-md h-[130px] object-cover"'
        ></Image>

        <div className="flex flex-col gap-1 p-2">
          <h2 className="font-medium">Python Course 🐍</h2>
          <h2 className="text-[12px] text-gray-400">A2RM</h2>
          <h2 className="text-[12px] text-gray-400 mt-3">
            28%
            <span className="float-right">1/3 Chapters</span>
          </h2>
          <Progress value={35} />
        </div>
      </div>
    </Link>
  );
}

export default ProgressCourseItem2;
