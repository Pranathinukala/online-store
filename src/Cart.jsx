import React, { useContext} from "react";
import { Productcontext } from "./Productcontext";

const Cart=()=>{
    const{cart,removeFromCart}=useContext(Productcontext);
    
    return(
        <div className="cart">
            <h3> 🧺Cart ({cart.length})</h3>
            <ul>
                {cart.map((item,idx)=>(
                    <li key={idx}>{item.title.slice(0,25)}-{item.price}
                    <button onClick={()=>removeFromCart(item.id)}style={{marginLeft:"10PX"}}>DELETE</button>
                    </li>
                ))}

            </ul>
        </div>
    );
};
export default Cart