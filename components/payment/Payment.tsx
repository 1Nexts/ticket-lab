import React from "react";
import styles from "./payment.module.scss";
import PaymentAddComponent from "./PaymentAdd";
import PaymentEditComponent from "./PaymentEdit";
import PaymentViewComponent from "./PaymentView";

type CardProps = {};
const PaymentCard = ({}: CardProps) => {
  let mode = 2; // 1=view, 2=add, 3=edit

  return (
    <section id={styles["payment"]}>
      <div className={styles["block-payment"]}>
        <h4>
          Payment <img src="/static/check-circle.svg" />
        </h4>
        <br />
        {mode === 1 ? (
          <PaymentViewComponent></PaymentViewComponent>
        ) : mode === 2 ? (
          <PaymentAddComponent></PaymentAddComponent>
        ) : (
          <PaymentEditComponent></PaymentEditComponent>
        )}
      </div>
    </section>
  );
};

export default PaymentCard;
