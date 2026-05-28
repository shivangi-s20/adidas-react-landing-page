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
      <div id="collection">
      <Products addToCart={addToCart}/>
      </div>
      <div id="reviews">
      <Testimonials />
      </div>
      <div id="contact">
      <Footer/>
      </div>
      </div>
  );
};

export default App;
