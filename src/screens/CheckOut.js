import React from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
function CheckOut() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="ckeckout-container">
          <h1>Checkout</h1>
          <p>Thank you for your order.</p>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
