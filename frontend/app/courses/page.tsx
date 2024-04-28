import CourseCard from "@/components/shared/CourseCard";
import React from "react";

const Courses = () => {
  const courses = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 10];
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
            key={course}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
