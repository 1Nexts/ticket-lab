import React, { useEffect } from "react";
import styles from "./PaymentEditComponent.module.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import {
  creditCardSelector,
  editCreditCard,
} from "@/store/slices/creditCardSlice";
import { CreditCard } from "@/models/creditCard.model";
import { LooseObject } from "@/models/dictionary.model";
import { RegxCreditCardNo, RegxNameOnCreditCard } from "@/utils/regx";

type CardProps = {
  setMode: Function;
};


const PaymentEditComponent = ({ setMode }: CardProps) => {
  const creditCard = useSelector(creditCardSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: { ...creditCard.creditCardSelected },
    validate: (values) => {
      let errors: LooseObject = {};

      if (
        !values.nameOnCard ||
        values.nameOnCard.match(RegxNameOnCreditCard) === null
      ) {
        errors.nameOnCard = "Please enter your first name last name.";
      }

      if (!values.cardNo ||  values.cardNo.match(RegxCreditCardNo) === null) {
        errors.cardNo =
          "Please check your credit card number and try again.(Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards)";
      }

      if (!values.exp || values.exp.length != 5) {
        errors.exp =
          "The expiration date you entered is invalid Please check and reenter the correct date.";
      }

      if (values.country == "") {
        errors.country = "Please choose your contry.";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const _objCreditCard: CreditCard = {
        id: values.id!,
        cardNo: values.cardNo!,
        nameOnCard: values.nameOnCard!,
        exp: values.exp!,
        country: values.country!,
      };

      try {
        const response = await dispatch(editCreditCard(_objCreditCard));
      if (response.meta.requestStatus === "fulfilled") setMode(1);
      } catch (error) {
        console.log("error add creditcard = ",error);
      }
    },
  });

  // TODO Edit to adanve format (Current v.basic)
  function formatExp(expDate: string) {
    expDate = expDate.replace(/[^0-9]/g, "").replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    );

    // add /
    if (expDate.length > 2) {
      const day = expDate.substring(0, 2);
      const month = expDate.substring(2, expDate.length);
      expDate = day + "/" + month;
    }

    return expDate;
  }

  return (
    <section id={styles["payment-edit"]}>
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
          {formik.errors.nameOnCard && (
            <div className="error">{formik.errors.nameOnCard} </div>
          )}
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
              placeholder="4111111111111111"
              onChange={formik.handleChange}
              value={formik.values.cardNo}
            />
          </div>

          {formik.errors.cardNo && (
            <div className="error">{formik.errors.cardNo} </div>
          )}
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
            value={formatExp(formik.values.exp!)}
          />
          {formik.errors.exp && (
            <div className="error">{formik.errors.exp} </div>
          )}
        </div>
        <div className="col-7 d-xl-none"></div>

        <div className="col-md-12">
          <label className="form-label">Country</label>
          <select
            id="country"
            name="country"
            className="form-select"
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            <option value="">Choose your contry</option>
            <option value="1">Contry A</option>
            <option value="2">Contry B</option>
            <option value="3">Contry C</option>
            <option value="4">Contry D</option>
          </select>
          {formik.errors.country && (
            <div className="error">{formik.errors.country} </div>
          )}
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

          <button
            type="submit"
            className="btn btn-success"
            disabled={!formik.isValid}
          >
            Edit Card
          </button>
        </div>
      </form>
      <form></form>
    </section>
  );
};

export default PaymentEditComponent;
