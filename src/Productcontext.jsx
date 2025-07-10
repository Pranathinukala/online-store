import {createContext,useState,useEffect} from 'react';

export const Productcontext=createContext();

export const ProductProvider=({children})=>{

    const [products,setProducts]=useState([]);
    const [selectedProduct,setSelectedProduct]=useState(null);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },);
    const addToCart=(product)=>{
        setCart(prev=>[...prev,product]);
    };
    const removeFromCart = (id) => {
     setCart(prev => prev.filter(item => item.id !== id));
     };
    return(
        <Productcontext.Provider value={{
            products,
            selectedProduct,
            setSelectedProduct,
            cart,
            addToCart,
            removeFromCart
        }}>
         {children}   
        </Productcontext.Provider>
    );
};

