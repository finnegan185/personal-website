import React from "react";

function Card(props) {
  return (
    <div className="card shadow">
      <a href={props.link}>
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
