import React from "react";
import users from "../data/users.js";
import ReviewItem from "./ReviewItem.js";

const Reviews = () => {
  return (
    <div className="pt-20 pb-10 px-14" id='reviews'>
      <h1 className="text-center mb-2 text-5xl font-semibold font-montserrat">
        Reviews
      </h1>
      <hr className="bg-amber-400 h-1 w-full md:w-1/3 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map(
          (user: { username: string; review: string; rating: string; icon: string }) => (
            <ReviewItem
              username={user.username}
              review={user.review}
              rating={user.rating}
              icon={user.icon}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Reviews;
