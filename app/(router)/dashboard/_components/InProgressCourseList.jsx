import React from "react";
import ProgressCourseItem from "./ProgressCourseItem";
import ProgressCourseItem2 from "./ProgressCourseItem2";

function InProgressCourseList() {
  return (
    <div className="p-5 mt-3 bg-white rounded-sm">
      <h2 className="text-primary text-[18px] font-semibold">
        Recent Enrolled Courses
      </h2>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-3">
        <ProgressCourseItem></ProgressCourseItem>
        <ProgressCourseItem2></ProgressCourseItem2>
      </div>
    </div>
  );
}

export default InProgressCourseList;
