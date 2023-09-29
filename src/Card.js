import React from "react";
import Remote from "./assets/remote.png";

const Card = (props) => {
    console.log(props)
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={props.card.imagePath} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.card.title}</h5>
          <p className="card-text">
            {props.card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
