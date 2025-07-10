import React, { useContext} from "react";
import { Productcontext } from "./Productcontext";

const ProductDetail = ()=>{
    const {selectedProduct,setSelectedProduct,addToCart}=useContext(Productcontext);

    return(
        <div className="product-detail">
            <button onClick={()=> setSelectedProduct(null)}>⬅ Back</button>
            <img src={selectedProduct.image}  alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <h4>Price:{selectedProduct.price}</h4>
            <button onClick={()=>addToCart(selectedProduct)}>Add to Cart</button>
        </div>
    );
};
export default ProductDetail