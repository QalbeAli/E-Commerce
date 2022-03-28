import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import './FetchApi.css'


function FetchApi() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setData(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    return (
        <div className="main">

            <nav>
                <h1>Simple Ecommerce</h1>
            </nav>

            <br />

            <div className = "div">

                {data.map((item) => (
                    <article key={item.id} className = "article">
                        <Link to={`/section/${item.id}`}>
                            <h1 className = "title">{item.title}</h1>
                        </Link>
                        <img src={item.image} alt="item.title" className = "image" />
                    </article>

                ))}

            </div>
        </div>
    )
}









export default FetchApi