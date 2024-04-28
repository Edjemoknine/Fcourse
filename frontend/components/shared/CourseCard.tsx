import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  image: string;
  title: string;
  category: string;
  link: string;
};
const CourseCard = ({ image, title, category, link }: Props) => {
  return (
    <div className="max-w-sm w-full bg-gray-400 shadow-lg rounded-xl p-6">
      <div className="flex flex-col ">
        <div className="">
          <div className="relative h-64 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <Link href={link}>
              <Image
                src={
                  image ??
                  "https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                }
                alt="Just a flower"
                className=" w-full h-64  object-fill  rounded-2xl"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="flex-auto justify-evenly">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-600 whitespace-nowrap mr-3">
                  4.60
                </span>
                <span className="mr-2 text-gray-600 uppercase">Marketing</span>
              </div>
              <div className="flex items-center w-full justify-between min-w-0 ">
                <h2 className="text-lg mr-auto cursor-pointer text-gray-200 line-clamp-2 ">
                  Lorem ipsum is placeholder text commonly used in the graphic
                </h2>
              </div>
            </div>

            <div className="flex space-x-2 pt-6 text-sm  font-medium justify-between">
              <div className="text-xl text-white font-semibold mt-1">
                $240.00
              </div>
              <Link href={link}>
                <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                  <span>View</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
