import { useCallback, useEffect, useState } from "react";
import FormData from "./FormData";
import { Link,  Router, Routes, Route} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  //toggle design
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
};
  //For validations

  const [firstname,bindfirstname,resetValuefirstname]=FormData('');
  const [lastname,bindlasstname,resetValuelastname]=FormData('');
  const [phone,bindphone,resetValuephone]=FormData('');
  const [em,bindem,resetValueem]=FormData('');
  const [passw,bindpassw,resetValuepassw]=FormData('');
  const [message,bindmessage,resetValuemessage]=FormData('');

  const submitData=(e)=>{
      e.preventDefault();
      alert(`Waad mahadsantahay ${firstname} ,${lastname} ,${phone} ,${em} ,${passw} ,${message}`)
      resetValuefirstname();
      resetValuelastname();
      resetValuephone();
      resetValueem();
      resetValuepassw();
      resetValuemessage();
  }
  //For validations
  const [email, setEmail] =useState('');
  const [pass,setPass] =useState('');
  function mailHandle(event){
      setEmail(event.target.value);
  }
  function passworhandle(event){
      setPass(event.target.value);
  }
  const validMail =useCallback(
      function () {
          if(!email.includes('@')){
              console.log('validEmail')
          }
      },
      [email] 
  )
  useEffect(()=>{
      validMail();
  
      },
      [validMail]
  )
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


    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
       
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={submitData}>
            <label htmlFor="name">FirstName:</label>
            <input type="text" {...bindfirstname} id="name" name="name" required />

            <label htmlFor="name">LastName:</label>
            <input type="text" {...bindlasstname} id="name" name="name" required />

            <label htmlFor="email">Phone:</label>
            <input type="number" {...bindphone} id="email" name="email" required />

            <label htmlFor="email">Email:</label>
            <input type="email" onChange={mailHandle}  {...bindem} id="email" name="email" required />

            <label htmlFor="email">Password:</label>
            <input type="password" onChange={passworhandle}  {...bindpassw}   id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" {...bindmessage} name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
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
}
export default Contact;
