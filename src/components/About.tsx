import React from "react";
import image from "/assets/aboutbg.jpg";

const About = () => {
  return (
    <div className="pt-20 pb-10 scroll-mt-4 text-center font-montserrat" id="about">
      <p className="font-bold text-5xl pb-5 px-14">
        What's our story?{" "}
        <p className="text-emerald-600">It's one for the history books.</p>
      </p>
      <p className="text-start font-medium text-lg px-14 py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        velit et quidem vero consequatur labore, quibusdam voluptatum placeat
        necessitatibus expedita minus, impedit deleniti. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem, dolorum?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-center py-6 px-14 gap-5 bg-emerald-400">
        <img src="/assets/hero.jpg" className="rounded-lg" />
        <div className="self-center">
          <p className="font-medium text-4xl text-start text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            assumenda. Nihil doloribus quod corrupti aliquid, similique, odio
            quo suscipit. 
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;


