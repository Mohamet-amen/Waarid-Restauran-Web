import { Link,  Router, Routes, Route} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';
import imge3 from './foods/Topmanger.jpg'
import imge4 from './foods/Director.jpg'
import imge5 from './foods/Headchef.jpg'
import imge6 from './foods/chef.jpg'
// import imge7 from './foods/weater.jpg'
const About = () => {
    //toggle design
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
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
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Our Restaurant! We are passionate about providing delicious and high-quality food. Our journey began with a simple idea: to offer a variety of meals that are both tasty and nutritious.
        </p>
        <p>
          Our team of dedicated professionals works tirelessly to ensure that every meal we serve meets the highest standards. We believe in using the freshest ingredients and traditional recipes to create dishes that delight our customers.
        </p>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={imge3} alt="Team Member 1" className="team-image" />
            <h3>Salmo Mohamed</h3>
            <p>Founder</p>
          </div>
          <div className="team-card">
            <img src={imge4} alt="Team Member 2" className="team-image" />
            <h3>Anwar Osman</h3>
            <p>Director</p>
          </div>
          <div className="team-card">
            <img src={imge5} alt="Team Member 3" className="team-image" />
            <h3>Hassan Mukhtar</h3>
            <p>Head Chef</p>
          </div>
          <div className="team-card">
            <img src={imge6} alt="Team Member 3" className="team-image" />
            <h3>Mohamed Abdullahi</h3>
            <p>Chef</p>
          </div>
          <div className="team-card">
            <img src={imge6} alt="Team Member 3" className="team-image" />
            <h3>Liibaan Mohamed</h3>
            <p>Chef</p>
          </div>
          <div className="team-card">
            <img src={imge6} alt="Team Member 3" className="team-image" />
            <h3>Abdirizaq Dhicisow</h3>
            <p>Chef</p>
          </div>
          <div className="team-card">
            <img src={imge6} alt="Team Member 3" className="team-image" />
            <h3>Mustaf Jeylani</h3>
            <p>Chef</p>
          </div>
          <div className="team-card">
            <img src={imge6} alt="Team Member 3" className="team-image" />
            <h3>Abdihakim Ibrahim</h3>
            <p>Chef</p>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide our customers with an unforgettable dining experience through exceptional service and delicious food. We are committed to sustainability and community involvement, ensuring that our business positively impacts the environment and the people around us.
        </p>
      </section>
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
          <Link to="/cart" className="footer-link">Cart</Link><br />
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

export default About;
