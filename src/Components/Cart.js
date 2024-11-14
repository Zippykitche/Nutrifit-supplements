import React from "react";
import SupplementCard from './SupplementCard';

function Cart({ cartItems }) {
  return (
    <div className="container mt-5">
    <h2 className="mb-4">Your Cart:</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div className="row">
        {cartItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <SupplementCard
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              showCartIcon={false}
            />
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default Cart;

  