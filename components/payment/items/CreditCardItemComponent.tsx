import React from "react";
import styles from "./creditCardItemComponent.module.scss";

type CardProps = {};
const CreditCardItemComponent = ({}: CardProps) => {
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
            ></input>
            <img src="/static/credit-cards/visa.png" className="px-2" />
          </div>

          <div className={"col-8 p-0 m-0 " + styles["col-visa-detail"]}>
            <h5>
              <b>Visa - 9999</b>
            </h5>
            <h5>User Name | exp. 00/11</h5>
            <h5>Edit | Delete</h5>
          </div>
        </div>

        {/* row 2 */}
        <div className="row m-0 mt-2">
          <div className={"col-12 p-0 m-0 " + styles["col-input-code"]}>
            <h5>Security Code</h5>
            <div className={"input-group " + styles["search-group"]}>
              <input type="password" name="pass" maxLength={3} />

              {/* <span className="input-group-text" id="basic-addon1">
                <img src="/static/check-circle.svg" />
              </span> */}

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
