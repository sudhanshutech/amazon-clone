import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal"
// import FlipMove from "react-flip-move";


function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  
    // const customLeaveAnimation = {
    // from: { transform: 'scale(1, 1)' },
    // to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
    // };
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="add"
          src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/ecommerce-vs-online-marketplace1603983748724190.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping basket</h2>
          {/* <FlipMove
          duration={10}
          delay={1}
          easing={'cubic-bezier(0.25, 0.5, 0.75, 1)'}
          staggerDurationBy={30}
          staggerDelayBy={10}
          leaveAnimation={customLeaveAnimation}> */}
           {basket.map(item => (
             <CheckoutProduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
             />
           ))}
           {/* </FlipMove> */}
        </div>
      </div>

      <div className="checkout_right">
          <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
