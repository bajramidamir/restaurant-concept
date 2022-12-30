import React from "react";
import MenuItem from "./MenuItem.js";
import foods from "../data/foods.js";

const Menu = () => {
  return (
    <div className="pt-20 pb-10 scroll-mt-4 px-7" id="menu">
      <h1 className="text-center mb-2 text-5xl font-semibold font-montserrat" >
        Special offers
      </h1>
      <hr className="bg-amber-400 h-1 w-full md:w-1/4 mx-auto mb-6" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 py-10">
        {foods.map(
          (project: { image: string; title: string; price: number }) => (
            <MenuItem
              image={project.image}
              title={project.title}
              price={project.price}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
