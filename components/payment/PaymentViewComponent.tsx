import { CreditCard } from "@/models/creditCard.model";
import { creditCardSelector } from "@/store/slices/creditCardSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CreditCardItemComponent from "./items/CreditCardItemComponent";

type CardProps = {
  setMode: any;
};
const PaymentViewComponent = ({ setMode }: CardProps) => {
  const creditCard = useSelector(creditCardSelector);
  useEffect(() => {

  }, [creditCard.creditCardSelected]);

  return (
    <div>
      <div className="p-2">
        <h5>Use Credit / Debit Card</h5>
      </div>
      <br />

      {creditCard.creditCards.map((objCreditCard: CreditCard) => (
        <div key={objCreditCard.id}>
          <CreditCardItemComponent
            setMode={setMode}
            objCreditCard={objCreditCard}
          ></CreditCardItemComponent>
          <hr />
        </div>
      ))}

      <br />
      {/* Click Add New Card */}
      <div
        onClick={() => {
          setMode(2);
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
          By using a digital wallet and continuing past this page, you have read
          and are accepting the{" "}
          <span className="text-primary">Terms of Use</span>
        </h6>
      </div>
    </div>
  );
};

export default PaymentViewComponent;
