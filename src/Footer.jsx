import { FaCartPlus } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      {/* <div className="contact-info">
          <h2>Our Information</h2>
          <ul>
            <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
            <li><strong>Email:</strong> info@yourcompany.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</li>
          </ul>
        </div> */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home" className="footer-link"><FaCartPlus />Home</a><br />
          <a href="#about" className="footer-link">About</a><br />
          <a href="#services" className="footer-link">Services</a><br />
          <a href="#contact" className="footer-link">Contact</a><br />
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>123 Main Street, Anytown, USA</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
