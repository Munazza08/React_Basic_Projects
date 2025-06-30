import React from "react";
import "./index.css";

function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.img} alt=""/>
                <h3>Flower Field {props.title} Image</h3>
            </div>
        </>
    )
}

export default Card