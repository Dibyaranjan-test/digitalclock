import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.time ?? ""}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
