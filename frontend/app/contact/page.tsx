import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 p-8 relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-8">
          <div className="shadow rounded-xl">
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div className="shadow rounded-xl">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="shadow rounded-xl">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="shadow rounded-xl">
            <label htmlFor="linkedin" className="sr-only">
              LinkedIn
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="LinkedIn"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-10 py-3 text-sm font-medium text-white"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-[500px]  lg:w-1/2 rounded-lg overflow-hidden">
        <Image
          width={500}
          height={500}
          alt=""
          src="/group.jpg"
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
