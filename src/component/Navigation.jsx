import { FaCartArrowDown } from "react-icons/fa";
const Navigation = ({cartCount}) => {

    const scrollTo = (id) => {
  const el = document.getElementById(id);  
  if (el) el.scrollIntoView({ behavior: "smooth" }); 
};
    return (
        <nav className="container">
            <div className="logo">
                <img src="brand_logo.png" alt="logo"/>
            </div>
            <ul>
                <li onClick={() => scrollTo("collection")}>Menu</li>      
                <li onClick={() => scrollTo("contact")}>Location</li>
                <li onClick={() => scrollTo("reviews")}>About</li>
                <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button>Login</button>
            <button className="cart-icon" >
                <FaCartArrowDown size={24}/>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount} </span>
        )}
      </button>
      </div>

        </nav>
    )
}

export default Navigation;