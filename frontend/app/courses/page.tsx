import CourseCard from "@/components/shared/CourseCard";
import React from "react";

const getCourses = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/v1/courses/");
  const data = await response.json();
  return data;
};
const Courses = async ({ searchParams }: any) => {
  const query = searchParams.query;
  const courses = await getCourses();
  // const courses = [
  //   {
  //     id: 1,
  //     title: "Python",
  //     description: "Course",
  //     instructor: "mohamed",
  //     category: "web",
  //     link: "",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "Course",
  //     instructor: "kamel",
  //     category: "app",
  //     link: "",
  //   },
  //   {
  //     id: 3,
  //     title: "Next.js",
  //     description: "Course",
  //     instructor: "ali",
  //     category: "desktop",
  //     link: "",
  //   },
  // ];

  const filtredCourses =
    query !== undefined
      ? courses.filter(
          (course) =>
            course.title.toLowerCase().includes(query?.toLowerCase()) ||
            course.category.toLowerCase().includes(query?.toLowerCase()) ||
            course.instructor.toLowerCase().includes(query?.toLowerCase())
        )
      : courses;

  return (
    <section className="max-w-7xl mx-auto px-4 p-8">
      <h1 className="text-4xl font-bold">All Courses:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-16">
        {filtredCourses.map((course: any) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
