import React from 'react'
import logo from "../assets/product.logo.avif"

export default function () {
  return (
    <div className='flex items-center bg-gray-200 shadow'>
       <figure className='w-25'>
        <img src={logo} alt="" />
        </figure> 
        <ul className='flex justify-between flex-1'>
            <li>Mens</li>
            <li>Womens</li>
            <li>Jewelery</li>
            <li>Electronics</li>
            <li></li>
        </ul>
    </div>
  )
}
