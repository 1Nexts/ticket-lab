import React from "react";
import styles from "./PaymentAddComponent.module.scss";
import { useFormik } from "formik";

type CardProps = {
  setMode: any;
};

const PaymentAddComponent = ({ setMode }: CardProps) => {
  const formik = useFormik({
    initialValues: {
      nameOnCard: "",
      cardNumber: "",
      expCard: "",
      securityCode: "",
      inputContry: 2,
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
     
    },
  });

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
      <br></br>
      <form className="row g-3" onSubmit={formik.handleSubmit}>
        <div className="col-12">
          <label className="form-label">Name on Card</label>
          <input
            id="nameOnCard"
            name="nameOnCard"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.nameOnCard}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Card number</label>
          <div className="input-group">
            <div className="input-group-text bg-white">
              <img
                src="/static/credit-cards/threeDigits.svg"
                className="px-2"
                width={42}
              />
            </div>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.cardNumber}
            />
          </div>
        </div>

        <div className="col-5 col-xl-3">
          <label className="form-label">Expiration Date</label>
          <input
            id="expCard"
            name="expCard"
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="DD/YYYY"
            minLength={5}
            maxLength={5}
            onChange={formik.handleChange}
            value={formik.values.expCard}
          />
        </div>
        <div className="col-7 d-xl-none"></div>

        <div className="col-5 col-xl-3">
          <label className="form-label">Security Code</label>
          <input
            id="securityCode"
            name="securityCode"
            type="password"
            maxLength={3}
            className="form-control"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.securityCode}
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
          <select
            id="inputContry"
            name="inputContry"
            className="form-select"
            onChange={formik.handleChange}
            value={formik.values.inputContry}
          >
            <option value="1">Contry A</option>
            <option value="2">Contry B</option>
            <option value="3">Contry C</option>
            <option value="4">Contry D</option>
          </select>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button
            type="button"
            className="btn text-success"
            onClick={() => {
              setMode(1);
            }}
          >
            Cancel
          </button>

          <button type="submit" className="btn btn-success">
            Add New Card
          </button>
        </div>
      </form>
      <br /> <br /> <br /> <br /> <br /> <br />
      <form></form>
    </section>
  );
};

export default PaymentAddComponent;
