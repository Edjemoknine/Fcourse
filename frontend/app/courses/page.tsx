import CourseCard from "@/components/shared/CourseCard";
import React from "react";

const Courses = () => {
  const courses = [
    { id: 1, image: "", link: "", category: "" },
    { id: 2, image: "", link: "", category: "" },
    { id: 3, image: "", link: "", category: "" },
    { id: 4, image: "", link: "", category: "" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 p-8">
      <h1 className="text-4xl font-bold">All Courses:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-16">
        {courses.map((course) => (
          <CourseCard
            image={""}
            link={""}
            title={""}
            category={""}
            key={course.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
