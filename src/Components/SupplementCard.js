import React from "react";

function SupplementCard({name, description, image, price}){
    
return (
    <div className="card">
      <div className="cart-icon">
        <a
          href="/Nutrifit-supplements/images/add-cart.png"
          title="add to cart icons"
        >
          <img
            src="/Nutrifit-supplements/images/add-cart.png"  
            alt="Add to cart"
            className="cart-icon-img"
          />
        </a>
      </div>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Price: KSH {price}</strong>
        </p>
      </div>
    </div>
);
}

export default SupplementCard;

