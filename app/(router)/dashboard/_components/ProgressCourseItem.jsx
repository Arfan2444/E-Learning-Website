import Image from 'next/image'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

function ProgressCourseItem({course}) {
 
  return (
    <Link href={"/course-preview/nextjs-business2"}>
      <div className="border rounded-xl cursor-pointer  hover:shadow-md hover:shadow-purple-400 mx-0">
        <Image
          src={"/Course1.jpg"}
          width={500}
          height={150}
          alt="banner"
          className='className="rounded-t-xl h-[130px] object-cover"'
        ></Image>

        <div className="flex flex-col gap-1 p-2">
          <h2 className="font-medium">Basic Html and CSS Course</h2>
          <h2 className="text-[12px] text-gray-400">A2RM</h2>
          <h2 className="text-[12px] text-gray-400 mt-3">
            50%
            <span className="float-right">3/6 Chapters</span>
          </h2>
          <Progress value={50} />
        </div>
      </div>
    </Link>
  );
}

export default ProgressCourseItem