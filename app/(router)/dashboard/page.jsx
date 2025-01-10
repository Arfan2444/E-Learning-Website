"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import SideBanners from '../courses/_components/SideBanners';
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';


export default function Dashboard () {
  const {user}=useUser();
  const [userEnrolledCourses,setUserEnrolledCourses]=useState([0]);
  useEffect(()=>{
    user&&getAllUserEnrolledCourses();
  },[user])
  /*
  *Get all user enrolled course list
  */

  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setUserEnrolledCourses(resp.userEnrollCourses);
    })
    
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-4">
    {/* Left Container */}
    <div className="col-span-3">
      {/* Banner */}
      <WelcomeBannerDashboard user={user}/>
     {/* In Progress Course List
      */}
       <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      
    </div>

    {/* Right Container */}
    <div className="p-5 bg-white rounded-xl">
      <SideBanners></SideBanners>
    </div>
  </div>
  )
}


