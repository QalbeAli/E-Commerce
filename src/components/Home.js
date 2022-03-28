import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { product } from 'prelude-ls';
import './Home.css'

function Home() {



  const { id } = useParams();
  const navigate = useNavigate()

  const [products, setProduct] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);


  return (
    <div className = "main">
      <div className='descri'>

        <h1 className = "title">{products.title}</h1>
        <p>{products.description}</p>
      </div>
      <img src={products.image} />
      <br />
      <h2>${products.price}</h2>
      <button>Go back</button>
    </div>
  )
};


export default Home