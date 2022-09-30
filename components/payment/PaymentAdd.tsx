import React from "react";
import styles from "./paymentAdd.module.scss";

type CardProps = {};
const PaymentAddComponent = ({}: CardProps) => {
  return (
    <section id={styles["payment-add"]}>
      {/* Card Type Support */}
      <div>
        <img src="/static/credit-cards/visa.png" width={64} className="px-2" />
        <img
          src="/static/credit-cards/master-card.svg"
          width={64}
          className="px-2"
        />
        <img
          src="/static/credit-cards/american-express.svg"
          width={64}
          className="px-2"
        />
      </div>

      <form className="row g-3" autoComplete="off">
        <div className="col-12">
          <label className="form-label">Name on Card</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-sm-12">
          <label className="form-label">Card number</label>
          <div className="input-group">
            <div className="input-group-text bg-white">
              <img
                src="/static/credit-cards/threeDigits.svg"
                className="px-2"
                width={42}
              />
            </div>
            <input type="text" className="form-control" defaultValue={""} />
          </div>
        </div>

        <div className="col-5 col-xl-3">
          <label className="form-label">Expiration Date</label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="DD/YYYY"
            minLength={5}
            maxLength={5}
          />
        </div>
        <div className="col-7 d-xl-none"></div>

        <div className="col-5 col-xl-3">
          <label className="form-label">Security Code</label>
          <input
            type="password"
            maxLength={3}
            className="form-control"
            autoComplete="off"
            defaultValue={""}
          />
        </div>

        <div className="col-7 col-xl-6 pt-2">
          <label className="form-label">
            <br />
            <img
              src="/static/credit-cards/threeDigits.svg"
              className={styles["img3digit"]}
            />
            <span>3-digits back of card</span>
          </label>
        </div>

        <div className="col-md-12">
          <label className="form-label">Country</label>
          <select id="inputContry" className="form-select" defaultValue={2}>
            <option value="1">Contry A</option>
            <option value="2">Contry B</option>
            <option value="3">Contry C</option>
            <option value="4">Contry D</option>
          </select>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn text-success">
            Cancel
          </button>

          <button type="submit" className="btn btn-success">
            Add New Card
          </button>
        </div>
      </form>
    </section>
  );
};

export default PaymentAddComponent;
