import { Link,  Router, Routes, Route} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';
const Cart = () => {
  //toggle design
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
};
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const getTotalPrice = () => {
  return cartItems
    .reduce((total, item) => total + (item.price ? item.price * item.quantity : 0), 0)
    .toFixed(2);
};

const removeFromCart = (itemId) => {
  const updatedCartItems = cartItems.filter(item => item.id !== itemId);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  window.location.reload(); // Reload the page to update the cart
};
  return (
    <>
     <nav className="navigation">
      <div className="logo">WAARID<IoRestaurantSharp />RESTAURANT </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cafe">Cafe</Link>
        <Link to="/api">API</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/card">Cards</Link>
        <li><Link to="/cart" className="cart-icon"><FaCartPlus /></Link></li>
        {/* <Link to="/cart"><FaCartPlus /></Link> */}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>

    <div className="order-container">
      <h1>Your Order</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div className="order-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price ? Number(item.price).toFixed(2) : 'N/A'}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price ? (item.price * item.quantity).toFixed(2) : 'N/A'}</p>
                  <button className="delete-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <h2>Total Price: ${getTotalPrice()}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
 
    {/* Footer Design and its content */}
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Our Goal</h3>
          <p>Waarid Restaurant Order Know</p>
          <p>Get it ass soon as possible</p>
          <p>That is our responsibility</p>
          <p>Come now and take your time </p>
          <p>In our Resatuarant Cafe</p>
        </div>
        <div className="footer-column">
          <h3>Nav-Links</h3>
          <Link to="/home" className="footer-link">Home</Link><br />
          <Link to="/about" className="footer-link">About</Link><br />
          <Link to="/cafe" className="footer-link">Cafe</Link><br />
          <Link to="/api" className="footer-link">API</Link><br />
          <Link to="/contact" className="footer-link">Contact</Link><br />
          <Link to="/card" className="footer-link">Cards</Link><br />
          <Link to="/cart" className="footer-link">Carts</Link><br />
          {/* <Link to="https://www.facebook.com/profile.php?id=100069909407242" className="footer-link">Facebook</Link><br /> */}
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>252 Wadnaha Road, Mogadishu, SOMALIA</p>
          <p>Email: info@waaridrest.com</p>
          <p>Phone: (252) 612-000000</p>
          <p>Phone: (252) 611-000000</p>
          <p>Phone: (252) 610-000000</p>
        </div>
        <div className="footer-column">
          <h3>Delopers Links</h3>
          <Link to="/api" className="footer-link"><IoCall />API</Link><br />
          <Link to="/contact" className="footer-link"><FaInstagramSquare />Contact</Link><br />
          <Link to="/cards" className="footer-link"><IoLogoWhatsapp />Carts</Link><br />
          <Link to="https://www.facebook.com/profile.php?id=100069909407242" className="footer-link"><FaFacebookF />Mohamed Abdullahi Osman</Link><br />
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Group C React project. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Cart;
