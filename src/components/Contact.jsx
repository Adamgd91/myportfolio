import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#205375] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/c390dc01-d452-4a3b-bd20-528b8d33819c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[gold] text-gray-100">
            Contact
          </p>
          <p className="text-gray-100 py-4">
            Submit form below or send me an email! - agdavidson91@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-[gold] hover:border-none hover:text-black">
          Lets Connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
