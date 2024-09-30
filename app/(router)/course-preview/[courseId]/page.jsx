"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";

function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-2 md:grid-cols-3 p-5 gap-3">
        {/* Title Video Description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription
            courseInfo={courseInfo}
          ></CourseVideoDescription>
        </div>
        {/* Course Content */}
        <div>
          <CourseEnrollSection></CourseEnrollSection>
          <CourseContentSection courseInfo={courseInfo}></CourseContentSection>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
