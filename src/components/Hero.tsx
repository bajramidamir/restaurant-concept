import React from "react";
import image from "/assets/introbg.svg";

const Hero = () => {
  return (
    <div className="mx-auto" id="hero">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4 
       font-montserrat bg-cover bg-no-repeat"
      >
        <img src="/assets/food.svg" className="w-4/5 mx-auto" />
        <div className="text-center">
          <p className="text-6xl font-bold text-white py-8 text-center">
            Healthy food restaurant
          </p>
          <br />
          <p className="font-medium text-white text-lg pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            esse consequatur perferendis optio dolor sed reprehenderit cumque,
            tenetur debitis exercitationem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro, nesciunt?
          </p>
          <a href="#about">
            <button className="font-semibold rounded-bl-2xl rounded-tr-2xl shadow-md duration-200 hover:px-14 px-10 py-4 border-2 border-emerald-500 bg-white hover:bg-emerald-500 text-2xl hover:text-white mt-2">
              About us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
