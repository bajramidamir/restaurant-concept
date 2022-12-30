import React from 'react';

type MenuItemProps = {
    image: string,
    title: string,
    price: number
}

const MenuItem = ({ image, title, price }: MenuItemProps ) => {
  return (
    <div className='cursor-pointer duration-200 hover:shadow-xl border  shadow-sm max-w-sm mx-auto font-montserrat'>
        <img src={image} className=" object-cover w-80 h-80 " />
        <div className='p-4 mx-auto text-center'>
            <h1 className='font-semibold text-3xl py-1'>
                {title}
            </h1>
            <h1 className='font-bold text-emerald-500 text-lg'>
                ${price}
            </h1>
        </div>
    </div>
  )
}

export default MenuItem;