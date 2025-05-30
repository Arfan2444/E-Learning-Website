"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanners from "./_components/SideBanners";

function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      {/* Left Container */}
      <div className="col-span-3">
        {/* Banner */}
        <WelcomeBanner></WelcomeBanner>

        {/* Course List */}
        <CourseList></CourseList>
      </div>

      {/* Right Container */}
      <div className="p-5 bg-white rounded-xl">
        <SideBanners></SideBanners>
      </div>
    </div>
  );
}

export default Courses;
