import React from "react";
import styles from "../../styles/payment/components/payment.module.scss";

type CardProps = {};
const PaymentCard = ({}: CardProps) => {
  return (
    <section id={styles["payment"]}>
      <div className={styles["block-payment"]}>
        <h4>
          Payment <img src="/static/check-circle.svg" />
        </h4>
        <h5>Mobile Entry - Free</h5>

        <h6>
          Tickets Avaliable by Sun Oct 8, 2022 These mobile tickets will be
          transferred directly to you from a trusted seller,We'll email you
          instructions on how to accept them on the original ticket provider's
          mobile app.
        </h6>
      </div>
    </section>
  );
};

export default PaymentCard;
