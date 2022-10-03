import React, { useEffect, useState } from "react";
import styles from "./PaymentComponent.module.scss";
import PaymentAddComponent from "./PaymentAddComponent";
import PaymentEditComponent from "./PaymentEditComponent";
import PaymentViewComponent from "./PaymentViewComponent";
import { useSelector } from "react-redux";
import { creditCardSelector, loadCreditCards, resetCreditCardSelected } from "@/store/slices/creditCardSlice";
import { useAppDispatch } from "@/store/store";

type CardProps = {};
const PaymentCard = ({}: CardProps) => {

  const creditCard = useSelector(creditCardSelector);
  const dispatch = useAppDispatch();

  // 1=view, 2=add, 3=edit
  const [mode, setMode] = useState<number>(2)


  useEffect(() => {
    dispatch(loadCreditCards());
    dispatch(resetCreditCardSelected());
  }, [dispatch]);


  return (
    <section id={styles["payment"]}>
      <div className={styles["block-payment"]}>
        <h4>
          Payment <img src="/static/check-circle.svg" />
        </h4>
        <br />
        {mode === 1 ? (
          <PaymentViewComponent setMode={setMode}></PaymentViewComponent>
        ) : mode === 2 ? (
          <PaymentAddComponent  setMode={setMode}></PaymentAddComponent>
        ) : (
          <PaymentEditComponent></PaymentEditComponent>
        )}
      </div>
    </section>
  );
};

export default PaymentCard;
