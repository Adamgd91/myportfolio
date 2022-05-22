import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-96 bg-[#205375] text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[gold] uppercase">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-semibold">
            <p>
              Hi. I'm Adam Davidson, nice to meet you! Please take a look
              around!
            </p>
          </div>

          <div>
            <p>
              I am passionate about building websites and stretching the
              boundaries of what to do and not to do! I have 2+ years of
              experince and please feel from to look at my projects to see who I
              am as a Developer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
