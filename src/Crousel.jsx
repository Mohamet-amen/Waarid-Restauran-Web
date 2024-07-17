import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imge7 from './foods/bc.jpg'
import imge8 from './foods/food7.jpg'
import imge9 from './foods/food8.jpg'
const Crousel = () => {
  return (
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
      </Carousel>
    </div>
  );
}

export default Crousel;
