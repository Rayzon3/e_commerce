import Head from "next/dist/shared/lib/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../navBar";
import Link from "next/link";

const Info = () => {
  const [singleProduct, setsingleProduct] = useState({});
  const { query } = useRouter();
  console.log(query.id);

  const headers = {
    "Content-Type":
      "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    Accept: "application/json",
  };

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/product/product/${encodeURIComponent(query.id)}/`
      )
      .then((res) => {
        const singleProduct = res.data;
        setsingleProduct(singleProduct);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } // => the response payload
      });
  }, []);
  console.log(singleProduct);

  const handleAddtocart = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/product/cart/", {
        product_id: query.id,
        name: singleProduct.name,
        desc: singleProduct.desc,
        price: singleProduct.price,
        // image : singleProduct.image,
        headers: headers,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };
  return (
    <div className="min-h-screen py-2 bg-midNight">
      <Head>
        <title>[Site Name]</title>
        <link rel="icon" href="/tree.ico" />
      </Head>
      <NavBar />
      <div className="grid grid-cols-2 p-4 m-4 border rounded-xl mt-12 ">
        <div className="justify-center  px-4">
          <img
            src={singleProduct.image}
            className="object-scale-down h-auto border border-transparent rounded-xl"
          ></img>
        </div>
        <div className="border border-red bg-white rounded-xl">
          <div classname>
            <h1 className="text-5xl p-4 text-midNight">{singleProduct.name}</h1>
            <h1 className="mt-5 text-2xl p-4 text-midNight">
              {singleProduct.desc}
            </h1>
            <p className="mt-5 text-xl p-4 text-midNight">
              Price : {singleProduct.price}
            </p>
            <p className="mt-5 text-xl p-4 text-midNight">
              Color : {singleProduct.color}
            </p>
          </div>
          <div className="flex items-stretch ... space-x-8 justify-center my-2">
            <button
              onClick={(e) => handleAddtocart(e)}
              className="text-midNight text-md bg-green border rounded-full border-transparent transform motion-safe:hover:scale-110 ... px-4 py-2"
            >
              Add To Card
            </button>
            <button className="text-midNight text-md px-4 py-2  border rounded-full transform motion-safe:hover:scale-110 ... bg-red ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
