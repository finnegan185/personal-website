import React from "react";

function Card(props) {
  return (
    <div className="card shadow">
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <p className="card-text">Clinical Oncology Research Assistance App</p>
      </div>
    </div>
  );
}

export default Card;
