import axios from 'axios';
import React, { useEffect, createContext, useState } from 'react'
export const productsContext = createContext();

export default function Mycontext({children}) {
    const [products, setProducts]=useState([]);
    useEffect(() => {
        getData();

    }, []
    )
    function getData() {
            axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data));


    }
    return (
        <productsContext.Provider value={products}>
            {children}

        </productsContext.Provider>
    )
}
