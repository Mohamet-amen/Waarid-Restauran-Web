import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import "./index.css";
import "./Card.css";
import "./Contact.css";
import "./Footer.css";
import "./Waiter.css";
import "./Crousel.css";
import "./Login.css";
import "./About.css";
import "./Cart.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>,
)
