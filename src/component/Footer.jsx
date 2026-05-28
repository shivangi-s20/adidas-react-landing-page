const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/brand_logo.png"
              alt="adidas logo"
              className="footer-logo"
            />
            <p>
              Designed for athletes. Built for everyone. Step into the future
              with Adidas.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Menu</li>
              <li>About</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Categories</h4>
            <ul>
              <li>Running</li>
              <li>Casual</li>
              <li>Sport</li>
              <li>Lifestyle</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Location</h4>
            <ul>
              <li>📍 Hazratganj, Lucknow</li>
              <li>🏪 Adidas Store, UP - 226001</li>
              <li>⏰ Mon–Sat: 10AM – 9PM</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul>
              <li>📧 adidas@support.com</li>
              <li>📞 1800-123-4567</li>
              <li>📍 Lucknow, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © 2025 <span className="footer-name">Adidas</span>. All rights
            reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/shivangi-s20"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivangi-sri20/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
              Built by <span className="footer-name">Shivangi Srivastava</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
