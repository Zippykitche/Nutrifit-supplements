import React from "react";

function SupplementCard({name, description, image, price}){
    
return (
    <div className="card" style={{ width: "100%" }}> 
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>Price: KSH {price}</strong></p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
);
}

export default SupplementCard;

