import React from 'react'
import Head from "next/dist/shared/lib/head"
import {useState, useEffect} from 'react'
import axios from 'axios'
const cart = () => {

    const [items, setItems] = useState([]);
    var price = 0

    useEffect (()=>{
        axios.get('http://127.0.0.1:8000/product/cart/')
        .then(res=>{
          const items = res.data;
          setItems(items);
        })
        .catch((error) => {
          if( error.response ){
            console.log(error.response.data);
           } // => the response payload
        })
      },[]);
      console.log(items)

    return (
        <>
            <div className="min-h-screen py-2 bg-midNight">
            <Head >
            <title>[Site Name]</title>
            <link rel="icon" href="/tree.ico" />
            </Head>     
            <div className="mx-auto my-10 w-2/3 bg-white ">
            <h1 className="text-midNight text-center text-4xl font-bold my-10 p-3">Cart</h1>
            {items.map((item)=>{
              price = price + item.price;
              console.log(price);
              return(
                <div className="bg-white border rounded-xl m-4 p-4  ">
                  <h1 className="text-midNight text-2xl my-3">{item.name}</h1>
                  <p className="text-midNight text-xl my-2">Price: {item.price}</p>
                  <button className="btn btn-danger my-2">Remove</button>
                </div>
              )
            })}

            <p>The total is : {price}</p>

            <button>Proceed to checkout</button>
            </div>
            </div>
        </>
    )
}

export default cart
