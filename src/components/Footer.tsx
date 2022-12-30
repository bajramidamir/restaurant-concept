import React from "react";

const Footer = () => {
  return (
    <div className="px-14 bg-gray-100 pt-14">
      <h1 className="text-center font-semibold font-montserrat text-lg text-emerald-600">
        &copy; 2022 Healthy food restaurant
      </h1>

      <div className="p-4">
        <a href="">
          <img src="/assets/rest.svg" className="mx-auto w-12" alt="Logo" />
        </a>
      </div>

      <div className="flex w-1/2 md:w-1/4 mx-auto p-4">
        <span className="px-2 mx-auto">
          <a href="#">
            <img src="/assets/ig.svg" className="w-10 md:w-8" alt="Instagram" />
          </a>
        </span>
        <span className="px-2 mx-auto">
          <a href="#">
            <img src="/assets/fb.svg" className="w-10 md:w-8" alt="Facebook" />
          </a>
        </span>
        <span className="px-2 mx-auto">
          <a href="#">
            <img src="/assets/twitter.svg" className="w-12 md:w-9" alt="Twitter" />
          </a>
        </span>
        <span className="px-2 mx-auto">
          <a href="#">
            <img src="/assets/yt.svg" className="w-10 md:w-8" alt="YouTube" />
          </a>
        </span>
      </div>

      <div className="pt-40 pb-6 border-t-2">
        <h1 className="text-center text-2xl font-semibold">
          Website lovingly handcrafted by&nbsp;
          <a
            href="https://damirbajrami.netlify.app/"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            Damir Bajrami
          </a>
          &nbsp;
          <img src="/assets/heart.svg" className="w-10 inline" alt="heart" />
        </h1>
      </div>
    </div>
  );
};

export default Footer;
