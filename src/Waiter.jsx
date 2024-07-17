import imge1 from './foods/waiter.png'
import { useNavigate } from 'react-router-dom';
const Waiter = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
      navigate('/contact'); // ku Xirmo Pageka 
  };
  return (
    <div className="main-content">
      <div className="text-container">
        <h2><span>WELCOME TO</span>  <br /> WAARID-RESTAURANT</h2>
        <p>We invite you in our restaurant <br />
           In our restaurant you are sure to find something for your self-
           we seve dishes from all over the world
            Experience the best cuisine with our top chefs and excellent service.</p>
        <button onSubmit={handleSubmit} className="custom-button">Order Now</button>
      </div>
      <div className="image-container">
        <img src={imge1} alt="Chef" />
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Waiter;
