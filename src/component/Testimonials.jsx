const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    initials: "PS",
    review:
      "Adidas Ultraboost is hands down the best running shoe I've ever worn. My morning runs feel effortless now!",
    rating: 5,
    product: "Adidas Ultraboost 22",
  },
  {
    id: 2,
    name: "Rohit Verma",
    location: "Mumbai",
    initials: "RV",
    review:
      "Stan Smith never goes out of style. Clean, minimal, and super comfortable for all-day wear. Worth every rupee!",
    rating: 5,
    product: "Adidas Stan Smith",
  },
  {
    id: 3,
    name: "Ananya Singh",
    location: "Lucknow",
    initials: "AS",
    review:
      "Ordered the Samba OG last week and already got so many compliments. The quality is amazing and delivery was fast!",
    rating: 4,
    product: "Adidas Samba OG",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    location: "Bangalore",
    initials: "AM",
    review: "The NMD R1 is incredibly lightweight and stylish. Perfect for both gym and casual outings. Totally worth the price!",
    rating: 5,
    product: "Adidas NMD R1",
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    location: "Pune",
    initials: "SK",
    review: "Bought the Ultraboost for my marathon training and I'm blown away. The cushioning is next level. Highly recommend!",
    rating: 5,
    product: "Adidas Ultraboost 22",
  },
  {
    id: 6,
    name: "Karan Joshi",
    location: "Jaipur",
    initials: "KJ",
    review: "Samba OG looks amazing with every outfit. Got compliments on day one itself. Adidas never disappoints!",
    rating: 4,
    product: "Adidas Samba OG",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">

        <div className="section-heading">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from real Adidas lovers</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>

              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="review-text">"{review.review}"</p>

              <span className="review-product">{review.product}</span>

              <div className="reviewer">
                <div className="avatar">{review.initials}</div>
                <div>
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-location">{review.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
