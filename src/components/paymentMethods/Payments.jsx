import "./payment.css";
import React from "react";
import { GiPayMoney } from "react-icons/gi";

function Payments() {
  return (
    <div className="paymentMethodContainer">
      <h1 className="paymentHeading">Benefit for your expediencies</h1>
      <div className="paymentCardContainer">
        <div className="cardPayment">
          <div className="paymentsIconContainer">
            <GiPayMoney color="#70908B" size={40} />
          </div>
          <h3 className="paymentName">Payment Methods</h3>
          <p className="paymentDescription">
            we offer flexible payment options,to make it easier
          </p>
        </div>
        <div className="cardPayment">
          <div className="paymentsIconContainer">
            <GiPayMoney color="#70908B" size={40} />
          </div>
          <h3 className="paymentName">Payment Methods</h3>
          <p className="paymentDescription">
            we offer flexible payment options,to make it easier
          </p>
        </div>
        <div className="cardPayment">
          <div className="paymentsIconContainer">
            <GiPayMoney color="#70908B" size={40} />
          </div>
          <h3 className="paymentName">Payment Methods</h3>
          <p className="paymentDescription">
            we offer flexible payment options,to make it easier
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payments;
