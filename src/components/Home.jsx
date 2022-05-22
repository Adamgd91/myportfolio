import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#205375] tracking-wide leading-10"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[gold] font-bold text-lg leading-9">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold leading-9">
          Adam Davidson
        </h1>
        <h2 className="text-2xl sm:text-4xl text-white ">
          I'm a Front End Developer.
        </h2>
        <p className="text-1xl sm:text-2xl py-4 max-w-[700px] font-normal">
          - Designing Front End websites one day at a time! Love learning and
          pushing the boundaries of styling and developing.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-[gold] hover:border-none hover:text-black">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
