const HeroSection = () =>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    "Step into comfort with Adidas — designed for every stride."
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/amazon.png" alt="amazon-logo" />
                <img src="/flipkart.png" alt="flipkart-logo" />
            </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/hero-image.png" alt="hero-image" />
            </div>
        </main>
    )
};
   
export default HeroSection;