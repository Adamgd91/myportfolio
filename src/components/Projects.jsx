import Coffee from "../assets/coffee.png";
import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full pt-56 pb-56 text-gray-100 bg-[#205375]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[gold] uppercase">
            Projects
          </p>
          <p className="py-8">Checkout my Projects!</p>
        </div>
        {/* Grid item */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{ backgroundImage: `url(${Coffee})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center justify-center items-center flex">
                Coffee Shop Project
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://adamgd91.github.io/coffeeshop/"
                  target="_blank"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Adamgd91/coffeeshop"
                  target="_blank"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-black">
                    Code
                  </button>
                </a>
              </div>
              <br />{" "}
              <section className="flex justify-center">
                <p className="bg-[#ff00007e] rounded-md p-2 font-bold mx-2 mt-10 text-sm">
                  HTML
                </p>
                <p className="bg-[#1100ff7f] rounded-md p-2 font-bold mx-2 mt-10 text-sm">
                  CSS
                </p>
                <p className="bg-[#eeff009b] rounded-md p-2 font-bold mx-2 mt-10 text-sm">
                  JavaScript
                </p>
              </section>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${Coffee})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://adamgd91.github.io/coffeeshop/"
                  target="_blank"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-black">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Adamgd91/coffeeshop"
                  target="_blank"
                >
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-white text-black">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
