import { CreditCard } from "@/models/creditCard.model";
import {
  creditCardSelector,
  deleteCreditCard,
  resetSecurityCode,
  setCreditCardSelected,
  setSecurityCode,
} from "@/store/slices/creditCardSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CreditCardItemComponent.module.scss";

type CardProps = {
  objCreditCard: CreditCard;
  setMode: Function;
};
const CreditCardItemComponent = ({ objCreditCard, setMode }: CardProps) => {
  const creditCard = useSelector(creditCardSelector);
  const dispatch = useAppDispatch();

  const [isCanClick, setIsCanClick] = useState(false);
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (
      creditCard.creditCardSelected != null &&
      creditCard.creditCardSelected.id === objCreditCard.id
    )
      setIsCanClick(true);
    else setIsCanClick(false);

    setPassword("");
    dispatch(resetSecurityCode());
  }, [creditCard.creditCardSelected, setIsCanClick]);

  return (
    <div className={"card col-12 p-0 " + styles["blockItemCardCredit"]}>
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-4 col-md-4 col-lg-3 p-0 " + styles["col-visa"]}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked={
                creditCard.creditCardSelected != null &&
                creditCard.creditCardSelected.id === objCreditCard.id
                  ? true
                  : false
              }
              onClick={() => {
                dispatch(setCreditCardSelected(objCreditCard));
              }}
            ></input>
            <img src="/static/credit-cards/visa.png" className="px-2" />
          </div>

          <div className={"col-8 p-0 m-0 " + styles["col-visa-detail"]}>
            <h5>
              <b>Visa - {objCreditCard.cardNo}</b>
            </h5>
            <h5>
              {objCreditCard.nameOnCard} | exp. {objCreditCard.exp}
            </h5>
            <div className="d-flex">
              <button
                className={"btn p-0 " + styles["btn"]}
                disabled={!isCanClick}
                onClick={() => {
                  setMode(3);
                  dispatch(resetSecurityCode());
                }}
              >
                <h5 className="text-primary"> Edit</h5>
              </button>
              &nbsp; | &nbsp;
              <button
                className={"btn p-0 " + styles["btn"]}
                disabled={!isCanClick}
                onClick={() => {
                  dispatch(deleteCreditCard(objCreditCard.id));
                }}
              >
                <h5 className="text-primary">Delete</h5>
              </button>
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="row m-0 mt-2">
          <div className={"col-12 p-0 m-0 " + styles["col-input-code"]}>
            <h5>Security Code</h5>
            <div className={"input-group " + styles["search-group"]}>
              <input
                type="password"
                name="password"
                maxLength={3}
                disabled={!isCanClick}
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                  dispatch(setSecurityCode(event.target.value));
                }}
              />
              <div>
                <img
                  src="/static/credit-cards/threeDigits.svg"
                  className="px-2"
                />
                <span>3-digits on back of card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardItemComponent;
