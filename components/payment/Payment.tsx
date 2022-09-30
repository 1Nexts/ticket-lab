import React from "react";
import styles from "./payment.module.scss";
import CreditCardItemComponent from "./items/CreditCardItemComponent";


type CardProps = {};
const PaymentCard = ({}: CardProps) => {
  return (
    <section id={styles["payment"]}>
      <div className={styles["block-payment"]}>
        <h4>
          Payment <img src="/static/check-circle.svg" />
        </h4>
        <br />
        <div className="p-2 ">
          <h5>Use Credit / Debit Card</h5>
        </div>
        <br/>
        <CreditCardItemComponent></CreditCardItemComponent>
        <CreditCardItemComponent></CreditCardItemComponent>
        <br />

        {/* Row Add New Card */}
        <div
          onClick={() => {
            console.log("Click Add New Card");
          }}
        >
          <span>
            <img src="/static/plus-lg.svg" />
          </span>
          <img src="/static/credit-card-2-front.svg" className="px-2" />
          <span className="text-primary">Add New Card</span>
        </div>

        <hr />
        <div className="p-2 ">
          <h5>Or Pay With</h5>
          <h6 className="text-black">
            By using a digital wallet and continuing past this page, you have
            read and are accepting the {" "}
            <span className="text-primary">Terms of Use</span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
