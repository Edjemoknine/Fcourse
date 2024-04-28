import Image from "next/image";
import { SearchForm } from "./SearchForm";

const Hero = () => {
  return (
    <section className="mx-auto max-w-2xl sm:pb-6 px-4 lg:max-w-7xl lg:px-8">
      <div className="mb-8  flex flex-wrap items-center justify-between md:mb-16">
        <div className="mb-6  flex w-full flex-col gap-4 justify-center sm:mb-12 md:mb-0 lg:w-1/2 lg:pt-20">
          <h1 className="mb-4 flex flex-col gap-4 text-black text-3xl font-semibold md:text-5xl md:mb-8 ">
            <span className="text-primary/30">Access Courses for free</span>
            <span className="text-[#161E64]">Education Platform</span>
            <span className="text-primary">in The World</span>
          </h1>
          <p className="max-w-xl leading-relaxed text-gray-500 xl:text-lg">
            Welcome to Fcourses, your gateway to a world of knowledge without
            borders. We empower learners everywhere to unlock their potential
            through a vast library of top-quality courses .
          </p>
          <SearchForm />
        </div>
        <div className=" relative flex gap-8 w-full   md:w-1/2">
          <div className="relative left-12 top-16 z-10 -ml-12 overflow-hidden rounded-lg md:left-0 md:top-36 lg:ml-0">
            <Image
              src={"/learn.jpg"}
              width={400}
              height={300}
              className="w-full h-[400px] object-cover object-center rounded-lg"
              alt="banner"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-lg relative md:-top-6">
            <Image
              src={"/buro.jpg"}
              width={400}
              height={300}
              priority
              className="w-full h-[400px] object-cover object-center rounded-lg"
              alt="banner"
            />
          </div>

          <div className="absolute bg-[#7D7AFB] text-white md:text-2xl left-40 px-10 rounded-xl p-4 bottom-0 z-10 ">
            <h3>
              Explode you career <br />
              with free courses <br />
              on every 1st month
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
