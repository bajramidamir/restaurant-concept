import React from "react";
import restaurant from "/assets/restaurant.jpg";

const Info = () => {
  return (
    <div className="px-14 pt-20 pb-10" id="info">
      <h1 className="font-semibold text-center text-5xl mb-2 font-montserrat" >
        Info
      </h1>
      <hr className="bg-amber-400 h-1 w-full md:w-1/4 mx-auto mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 font-montserrat bg-slate-100">
        <div className="text-center mx-auto  p-4">
          <h1 className="text-3xl font-semibold text-emerald-500 mb-6">
            Working hours
          </h1>
          <div className="font-medium text-lg text-slate-400 text-center ">
            <span>Monday - Friday</span>
            <div>08:00 - 23:00</div>
            <span>Saturday - Sunday</span>
            <div>10:00 - 21:00</div>
          </div>
        </div>

        <div className="text-center mx-auto p-4">
          <h1 className="text-3xl font-semibold text-emerald-500 mb-6">
            Location
          </h1>
          <button className="duration-300 font-semibold text-lg hover:text-white border-2 border-emerald-500 hover:bg-emerald-500 px-5 rounded-bl-xl rounded-tr-xl py-4">
            Visit one of our locations
          </button>
        </div>

        <div>
          
        </div>

      </div>
    </div>
  );
};

export default Info;
