import React from 'react';

type ReviewItemProps = {
    username: string,
    review: string,
    rating: string,
    icon: string
}

const ReviewItem = ( {username, review, rating, icon} : ReviewItemProps ) => {
  return (
    <div className="md:flex bg-slate-100 rounded-sm shadow-md p-6 md:px-4">
        <img src={icon} className="w-20 h-auto mx-auto" />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
            <blockquote>
                <p className='text-lg font-medium font-montserrat'>
                    {review}
                </p>
            </blockquote>
            <figcaption className='font-semibold font-montserrat'>
                <div className='text-sky-400'>
                    {username}
                </div>
                <div>
                    {rating}
                </div>
            </figcaption>
        </div>
    </div>
    
  )
}

export default ReviewItem;