import React, { useContext} from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import { ProductProvider, Productcontext } from './Productcontext';

function AppContent(){
  const {selectedProduct}=useContext(Productcontext);

  return(
    <div className="app-container">
      <h1>🛒 Product Store</h1>
      <Cart />
        {selectedProduct ? <ProductDetail />:<Product />}
      
    </div>
  );
}
const App=()=>(
  <ProductProvider>
    <AppContent />
  </ProductProvider>

);
export default App;
