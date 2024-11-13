import React from "react";

function SupplementCard({name, description, image, price}){
    
return (
    <div className="supplement-display">
      <div className="image-container">
        <img src={image} alt={name} className="supplement-image" />
        <a
          href="/Nutrifit-supplements/images/add-cart.png"
          title="Add to Cart"
          className="cart-icon-link"
        >
          <img
            src="/Nutrifit-supplements/images/add-cart.png"
            alt="Add to cart"
            className="cart-icon-img"
          />
        </a>
      </div>
      <h5 className="supplement-title">{name}</h5>
      <p className="supplement-description">{description}</p>
      <p className="supplement-price"><strong>Price: KSH {price}</strong></p>
    </div>
);
}

export default SupplementCard;

