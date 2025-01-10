import React from "react";

const InstructorProfile = () => {
  const instructors = [
    {
      name: "John Doe",
      bio: "Passionate educator with over 10 years of experience in teaching various subjects. Dedicated to creating engaging and interactive online courses. Also available for one-on-one sessions.",
      courses: [
        { title: "Introduction to React", students: 120 },
        { title: "Advanced JavaScript", students: 200 },
        { title: "Web Development Bootcamp", students: 300 },
      ],
      image: "/instructor1.jpg",
    },
    {
      name: "Mary Jane",
      bio: "Experienced coding instructor specializing in front-end technologies and user interface design. Jane loves helping students build beautiful and responsive web applications.",
      courses: [
        { title: "CSS Mastery", students: 150 },
        { title: "React Native for Beginners", students: 180 },
        { title: "UX/UI Design Principles", students: 210 },
      ],
      image: "/instructor2.jpg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 space-y-10">
      {instructors.map((instructor, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <img
              className="w-24 h-24 rounded-full mr-6"
              src={instructor.image}
              alt={`Instructor ${instructor.name}`}
            />
            <h1 className="text-2xl font-bold text-primary font-sans">
              {instructor.name}
            </h1>
          </div>
          <p className="text-gray-600 mb-4 font-sans">{instructor.bio}</p>
          <h2 className="text-xl font-semibold mb-2">Courses</h2>
          <ul className="list-disc pl-5 mb-4">
            {instructor.courses.map((course, idx) => (
              <li key={idx} className="mb-2">
                {course.title} -{" "}
                <span className="text-gray-500">
                  {course.students} students enrolled
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-400 transition duration-200">
            Enroll Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default InstructorProfile;
