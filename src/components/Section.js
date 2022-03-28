import './Section.css'
import Images from './images/Images'
import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { product } from 'prelude-ls';


function Section() {

  
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
    <div className="image1">
      <div className='section'>
        <div className="image">
          <img src={products.image} width='400' height='400' alt="" className="Images" />
        </div>
        <div className='right_section'>
          <p className="Sneaker">Simple Ecommerce</p>
          <h2>{products.title}</h2>
          <p>{products.description}</p>
          <div className="Discount">
            <span>${products.price}</span>


          </div>
          <div className="roola">

            <div className="Count">
              <button>-</button>
              <span>0</span>
              <button>+</button>


            </div>
            <button className="CartButton" onClick={() => navigate('/AddToCart')}>
              AddToCart
            </button>
          </div>
          <button onClick={() => navigate('/Home')} className ="goback">
            Go Back
          </button>

        </div>
      </div>

    </div>
  )

}

export default Section