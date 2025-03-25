// import React from "react";
// import {useState, useEffect } from "react";


// export default function UseEffect() {
//     const [count, setCount]=useState(0); 
//     const [search, setsearch]=useState("product")           
//     useEffect(()=>{
//         setCount(pre=>pre+1)
//     },[search])
//   return (
//     <>
//     <div>
//         <h1>useeffect</h1>
//         <h2>{count}</h2>
//         <p>{search}</p>
//         <button onClick={()=>setsearch("Mobile")}>Update Search</button>
//     </div>
//     </>
//   )
// }




import React, { useState, useEffect} from 'react'
import axios from 'axios';

export default function UseEffect() {
    const [products, setproducts]=useState([]);
    useEffect(()=>{
        console.log("mounted");
//         fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => {setproducts(data);console.log(data)});
     axios.post("https://fakestoreapi.com/products",{category:"kids Wear", description:"shirt"}).then (response=>{setproducts(response.data);console.log(response.data)});
    },[]) 

  return (
    <>
    <div>
        {console.log("rendering")}
      useEffect
    </div>
    {/* <div>
        {products.map(product=><div>
            <h1>{product.category}</h1>
            <p>{product.description}</p>
        </div>)}
    </div> */}
    </>
  )
}
