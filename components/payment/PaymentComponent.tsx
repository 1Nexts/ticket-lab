import React, { useEffect, useState } from "react";
import styles from "./PaymentComponent.module.scss";
import PaymentAddComponent from "./PaymentAddComponent";
import PaymentEditComponent from "./PaymentEditComponent";
import PaymentViewComponent from "./PaymentViewComponent";
import { useSelector } from "react-redux";
import {
  creditCardSelector,
  loadCreditCards,
  resetCreditCardSelected,
  resetSecurityCode,
} from "@/store/slices/creditCardSlice";
import { useAppDispatch } from "@/store/store";

type CardProps = {};
const PaymentCard = ({}: CardProps) => {
  const creditCard = useSelector(creditCardSelector);
  const dispatch = useAppDispatch();

  // 1=view, 2=add, 3=edit
  const [mode, setMode] = useState<number>(1);

  useEffect(() => {
    dispatch(loadCreditCards());
    dispatch(resetCreditCardSelected());

    return () => {
      dispatch(resetSecurityCode());
      dispatch(resetCreditCardSelected());
    };
  }, [dispatch]);

  return (
    <section id={styles["payment"]}>
      <div className={styles["block-payment"]}>
        <h4>
          Payment{" "}
          <img
            src={
              creditCard.securityCode.length === 3
                ? "/static/check-circle.svg"
                : "/static/check-circle-wrong.svg"
            }
            className={styles["check-correct"]}
          />
        </h4>
        <br />
        {mode === 1 ? (
          <PaymentViewComponent setMode={setMode}></PaymentViewComponent>
        ) : mode === 2 ? (
          <PaymentAddComponent setMode={setMode}></PaymentAddComponent>
        ) : (
          <PaymentEditComponent setMode={setMode}></PaymentEditComponent>
        )}
      </div>
    </section>
  );
};

export default PaymentCard;
