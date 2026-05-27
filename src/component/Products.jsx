const products = [
  {
    id: 1,
    name: "Adidas Ultraboost 22",
    category: "Running",
    price: "₹12,999",
    image: "/shoe1.png",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Adidas Stan Smith",
    category: "Casual",
    price: "₹8,499",
    image: "/shoe2.png",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Adidas NMD R1",
    category: "Sport",
    price: "₹10,999",
    image: "/shoe3.png",
    tag: "Sport",
  },
  {
    id: 4,
    name: "Adidas Samba OG",
    category: "Lifestyle",
    price: "₹9,499",
    image: "/shoe4.png",
    tag: "Trending",
  },
];

const Products = ({addToCart}) => {
  return (
    <section className="products-section">
      <div className="container">

        <div className="section-heading">
          <h2>Featured Collection</h2>
          <p>Handpicked styles for every stride</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>

              {product.tag && (
                <span className="product-tag">{product.tag}</span>
              )}

              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="add-btn"
                  onClick={()=> addToCart(product)}>Add to Cart</button>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="view-all">
          <button className="view-all-btn">View All Products</button>
        </div>

      </div>
    </section>
  );
};

export default Products;
