import { FaCartArrowDown } from "react-icons/fa";
const Navigation = ({cartCount}) => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="brand_logo.png" alt="logo"/>
            </div>
            <ul>
                <li href="#">Menu</li>      
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
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