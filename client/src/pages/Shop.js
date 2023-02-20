import React, {useState, useEffect }from "react";
import "../styles/shop.css";
import Card from "../components/Card/Card";

function Shop() {
 const [products, setProducts] = useState([])

useEffect(()=>{
  async function getProducts(){
    const response = await fetch('https://projectcanelebakery.onrender.com/products')
    const data = await response.json()
    console.log(data)
    setProducts(data.payload)
  } getProducts()
}, [])


  return (
    <section className="shop-section-container">
      <div className="filtering-button-container">
        <button className="all-filter-button">ALL</button>
        <button className="breads-filter-button">BREADS</button>
        <button className="breads-filter-button">PASTRIES</button>
        <button className="cakes-filter-button">CAKES</button>
      </div>
     <div className="shop-card-container">
     {products.filter((one, index) => index % 3 === 0).map((one)=>{
      return <Card img={one.image} title={one.name} price={one.price}/>
     })}
      </div>
    
    </section>
  );
}

export default Shop;
