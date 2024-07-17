import Index from "./Index";
import Footer from "./Footer";
import Crousel from "./Crousel";
import Contact from "./Contact";
import Cards from "./Cards";
import Waiter from "./Waiter";

import { Route, Routes } from 'react-router-dom';

// import { Routes ,Route } from "react-router";
import Login from "./Login";
import Api from "./Api";
import Cafe from "./Cafe";
import Cart from "./Cart";
import About from "./About";


function App(){
    return(
        <div>
          {/* <Cafe/> */}

        {/* <Routes>
                <Route path="/home" element={<Index />} />
                <Route path="/api" element={<Api />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/Cart" element={<Cards/>} />
                
              </Routes> */}

              <Routes>
              <Route path="/home" element={<Index />} />
                <Route path="/api" element={<Api />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/card" element={<Cards/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/cafe" element={<Cafe/> } />
              
              <Route path="/" element={<Login />} />
              </Routes>
              {/* <Waiter/>
            <Cards/>
           
            <Contact/>
            <Crousel/>
            <Footer/> */}



        {/* <Login/> */}
           
           
          {/* <Routes>
            <Route path="/cafe" element ={<Cafe/>} />
          </Routes> */}

          
     
    

       

            <div>

            </div>
        </div>
    )
}
export default App;