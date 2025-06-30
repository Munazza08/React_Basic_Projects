import React from "react";
import Card from "./Card";
import "./index.css";
import img1 from "./images/flower1.jpg";
import img2 from "./images/flower2.jpg";
import img3 from "./images/flower3.jpg";
import img4 from "./images/flower4.jpg";
import img5 from "./images/flower5.jpg";
import img6 from "./images/flower6.jpg";

function MainPage(){
    return(
        <>
            <h1 className="heading">Card Gallery</h1>
            <div className="cardComponent">
              <Card title="1" img={img1}/>
              <Card title="2" img={img2}/>
              <Card title="3" img={img3}/>
              <Card title="4" img={img4}/>
              <Card title="5" img={img5}/>
              <Card title="6" img={img6}/>
            </div>
        </>
    )
}

export default MainPage