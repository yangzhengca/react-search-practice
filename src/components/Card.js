import React from "react";
import defaultPic from "../images/defaultPic.png";

function Card({ data }) {
  return (
    <div className="card col-md-3">
      <div className="card">
        <img src={data.image || defaultPic} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {data.name}</h5>
          <p className="card-text">House: {data.house || "Undefine"}</p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
