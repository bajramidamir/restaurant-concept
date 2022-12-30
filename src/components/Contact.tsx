import React, { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormState(!formState);  
        setTimeout(() => {
            setFormState(false);
        }, 3000);
      };


  return (
    <div className="px-6 pb-20 scroll-mt-8 lg:px-14 lg:max-w-2xl mx-auto py-10" id="contact">
      <div>
        <h1 className="font-bold font-montserrat py-4 text-5xl text-center mb-4">
          Contact
        </h1>

        <div className="font-montserrat font-medium text-center text-md">
          <span>
            Send us a message and we’ll get back to you as soon as possible.
            Looking forward to hearing from you.
          </span>{" "}
          <br />
        </div>

        <div className="p-4 text-center mx-auto">
          <form onSubmit={handleFormSubmit}>
            <label
              className="block font-semibold mb-2 px-2  text-left text-md"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              className="bg-slate-200 block w-full mb-2 px-2 py-2.5"
              id="name"
              required
            />
            <label
              className="block font-semibold mb-2 px-2  text-left text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="block bg-slate-200  w-full mb-2 px-2 py-2.5"
              id="email"
              required
            />
            <label
              className="block font-semibold mb-2 px-2 text-left text-md"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="block bg-slate-200 w-full h-32 mb-2 px-2 py-2.5"
              name="message"
              id="message"
              required
            ></textarea>
            <button
              type="submit"
              className="border-2 duration-300 hover:text-white hover:bg-emerald-500 border-emerald-500 text-lg font-semibold font-montserrat px-10 py-2.5 my-3"
            >
              Send
            </button>
          </form>

          <div className={`duration-500 ml-auto mr-auto left-0 right-0 absolute mb-4 bg-emerald-400 w-64 px-3 py-3 ${formState ? "scale-100" : "scale-0"}`}>
          
            <h1 className="text-white text-xl font-medium font-montserrat">Thank you for contacting us!</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
