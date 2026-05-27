import "./App.css";
import { useState } from "react";
import Navigation from "./component/Navigation";
import HeroSection from "./component/Hero";
import Products from "./component/Products";
import Testimonials from "./component/Testimonials";
import  Footer from "./component/Footer";


const App = () =>{
   const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };
  return ( 
    <div>
      <Navigation cartCount={cartCount}/>
      <HeroSection/>
      <Products addToCart={addToCart}/>
      <Testimonials />
      <Footer/>
      </div>
  )
};

export default App;
