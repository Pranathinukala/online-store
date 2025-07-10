import React, { useContext} from 'react';
import { Productcontext } from "./Productcontext";
import './App.css';

const Product = () => {
  const {products, setSelectedProduct} = useContext(Productcontext);

  return (
    <div className="product-grid">
      {products.map(prod => (
        <div className="product-card" key={prod.id} onClick={()=>
          setSelectedProduct(prod)}>
            <img src={prod.image} alt={prod.title}/>
          <h3>{prod.title.slice(0,20)}...</h3>
          <p>₹{prod.price} </p>
        </div>
      ))}
    </div>
  );
};

export default Product;