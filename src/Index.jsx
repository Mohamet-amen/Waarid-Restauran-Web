import { Link,  Router, Routes, Route} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imge1 from './foods/waiter.png'
import imge2 from './foods/food1.jpg'
import imge3 from './foods/food2.jpg'
import imge4 from './foods/food3.jpg'
import imge5 from './foods/food4.jpg'
import imge7 from './foods/food6.jpg'
import imge8 from './foods/food7.jpg'
import imge9 from './foods/food8.jpg'
import imge10 from './foods/food9.jpg'
//COFFEE IMAGES
import imgee1 from './coffee/c1.jpg'
import imgee2 from './coffee/c2.jpg'
import imgee3 from './coffee/c3.jpg'
import imgee4 from './coffee/c4.jpg'
import imgee5 from './coffee/c5.jpg'
import imgee7 from './coffee/c7.jpg'
import imgee8 from './coffee/c8.jpg'
import imgee9 from './coffee/c9.jpg'
function Index(){
//toggle design
const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //Adding to cart page to your order
  const navigate = useNavigate();
  const addToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image, // Include image property
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if item already exists in the cart
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // If item exists, increase the quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // If item does not exist, add it to the cart
      cartItems.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(item.name + ' added to cart!');
    navigate('/Cart');
  };

  const products = [
    { id: 1, name: 'Snack-Foods', price: 2.99, image: imge2, description: 'This food contains a lot of proteins' },
    { id: 2, name: 'Malawax', price: 1.99, image: imge3, description: 'This Malawax is best for everyone' },
    { id: 3, name: 'Meals', price: 5.99, image: imge4, description: 'This is a fresh meal you can get it' },
    { id: 4, name: 'Sandwich', price: 3.99, image: imge5, description: 'This sandwich contains more proteins' },
    { id: 5, name: 'Chicken', price: 4.99, image: imge10, description: 'This is the best chicken for all' },
    { id: 6, name: 'Rice-Baber', price: 3.49, image: imge7, description: 'You can get it in our restaurant' },
    { id: 7, name: 'Sweets', price: 2.49, image: imge8, description: 'Sweets is one of our fav foods' },
    { id: 8, name: 'Burger', price: 4.49, image: imge9, description: 'This Burger is one of the bests' },
    { id: 9, name: 'Milk-Coffee', price: 2.99, image: imgee2, description: 'This food contains a lot of proteins' },
    { id: 10, name: 'Normal-Coffee', price: 1.99, image: imgee3, description: 'This Malawax is best for everyone' },
    { id: 11, name: 'Coffee-Shake', price: 5.99, image: imgee4, description: 'This is a fresh meal you can get it' },
    { id: 12, name: 'Shake-Coffee', price: 3.99, image: imgee5, description: 'This sandwich contains more proteins' },
    { id: 13, name: 'Take-AwayCoffe', price: 4.99, image: imgee1, description: 'This is the best chicken for all' },
    { id: 14, name: 'Cold-Coffee', price: 3.49, image: imgee7, description: 'You can get it in our restaurant' },
    { id: 15, name: 'Black-Coffee', price: 2.49, image: imgee8, description: 'Sweets is one of our fav foods' },
    { id: 16, name: 'Coffee', price: 4.49, image: imgee9, description: 'This Burger is one of the bests' },
  ];
    return (
        <div>
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
   {/* Cover Image and its content */}
   <div className="main-content">
      <div className="text-container">
        <h2><span>WELCOME TO</span>  <br /> WAARID-RESTAURANT</h2>
        <p>We invite you in our restaurant <br />
           In our restaurant you are sure to find something for your self-
           we seve dishes from all over the world
            Experience the best cuisine with our top chefs and excellent service.</p>
        <button className="custom-button">Order Now</button>
      </div>
      <div className="image-container">
        <img src={imge1} alt="Chef" />
      </div>
    </div>
    {/* Cards and their contacts */}
    <div className="cards-container">
      <h1>OUR MENU</h1>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-description">{product.description}</p>
            <p className="card-price">${Number(product.price).toFixed(2)}</p>
            <button className="btn" onClick={() => addToCart(product)}>
              Add-Cart <FaCartPlus />
            </button>
          </div>
        </div>
      ))}
    </div>
    {/* Some crousel Slide images  */}
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={2000}
        showStatus={false}
      >
        <div>
          <img src={imge7}/>
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src={imge8}/>
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src={imge9}/>
          <p className="legend">Slide 3</p>
        </div>
        <div>
          <img src={imge9}/>
          <p className="legend">Slide 4</p>
        </div>
        <div>
          <img src={imge9}/>
          <p className="legend">Slide 5</p>
        </div>
        <div>
          <img src={imge9}/>
          <p className="legend">Slide 6</p>
        </div>
      </Carousel>
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
        </div>  
      );
}
export default Index;