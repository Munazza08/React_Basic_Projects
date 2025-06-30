import React from 'react';
import img2 from "../images/amazon.png";
import img3 from "../images/flipkart.png";
import img4 from "../images/shoe_pic.png";

const HeroSection = () =>{
    return(
       <main className="hero">
         <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET<br/>
             DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITHOUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
              <p>Also Available On</p>
             <div className="brand-icons">
              <img src={img2} alt="amazon-logo" />
              <img src={img3} alt="flipkart-logo" />
             </div>
            </div>
         </div>
         
         <div className="hero-image">
          <img src={img4} alt="flipkart-logo" />
         </div>
       </main>
    );
};

export default HeroSection;