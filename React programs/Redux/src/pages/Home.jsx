import React, { useContext } from 'react'
import { productsContext } from '../contextAPI/Mycontext'
import Card from '../components/Card';

export default function Home() {
    const products=useContext(productsContext);
    console.log("products",products)
  return (
    <div><Card/></div>
  )
}
