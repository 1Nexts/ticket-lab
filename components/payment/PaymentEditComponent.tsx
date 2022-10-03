import React from "react";
import styles from "./PaymentEditComponent.module.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import {
  addCreditCard,
  creditCardSelector,
  editCreditCard,
} from "@/store/slices/creditCardSlice";
import { CreditCard } from "@/models/creditCard.model";

type CardProps = {
  setMode: any;
};

const PaymentEditComponent = ({ setMode }: CardProps) => {
  const creditCard = useSelector(creditCardSelector);
  const dispatch = useAppDispatch();


  const formik = useFormik({

    initialValues:{...creditCard.creditCardSelected,securityCode:""},
    // initialValues: {
    //   cardNo: creditCard.creditCardSelected?.cardNo,
    //   nameOnCard: creditCard.creditCardSelected?.nameOnCard,
    //   exp: creditCard.creditCardSelected?.exp,
    //   securityCode: "",
    //   country: creditCard.creditCardSelected?.country,
    // },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));

      const _objCreditCard: CreditCard = {
        id: values.id!,
        cardNo: values.cardNo!,
        nameOnCard: values.nameOnCard!,
        exp: values.exp!,
        country: values.country!,
      };

      const response = await dispatch(editCreditCard(_objCreditCard));
      if (response.meta.requestStatus === "fulfilled") setMode(1);
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
              id="cardNo"
              name="cardNo"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.cardNo}
            />
          </div>
        </div>

        <div className="col-5 col-xl-3">
          <label className="form-label">Expiration Date</label>
          <input
            id="exp"
            name="exp"
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="DD/YYYY"
            minLength={5}
            maxLength={5}
            onChange={formik.handleChange}
            value={formik.values.exp}
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
            id="country"
            name="country"
            className="form-select"
            onChange={formik.handleChange}
            value={formik.values.country}
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
            Edit Card
          </button>
        </div>
      </form>
      <br /> <br /> <br /> <br /> <br /> <br />
      <form></form>
    </section>
  );
};

export default PaymentEditComponent;
