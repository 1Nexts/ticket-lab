import React from "react";
import styles from "../../styles/final-cost/components/costTotal.module.scss";
type CardProps = {};
const FinalCostTotalComponent = ({}: CardProps) => {
  const ticketPrice = 76.0;
  const amountTicket = 2;
  const SERVICE_FEE_PERCENT = 0.1;


  return (
    <section id={styles["cost-total"]}>
      <div className={styles["block-total"]}>
        {/* Total */}
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-9 p-0 " + styles["col-1"]}>
            <h4>Total</h4>
          </div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h4>$999</h4>
          </div>
        </div>
        <br />

        {/* Tickets */}
        <h5>Tickets</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-9 p-0 " + styles["col-1"]}>
            <h6>
              Resale Tickets: ${ticketPrice.toFixed(2)} x {amountTicket}
            </h6>
          </div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h6>${(ticketPrice * amountTicket).toFixed(2)}</h6>
          </div>
        </div>

        {/* Fee */}
        <h5>Fee</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-9 p-0 " + styles["col-1"]}>
            <h6>
              Service Fee: ${(ticketPrice * SERVICE_FEE_PERCENT).toFixed(2)} x{" "}
              {amountTicket}
            </h6>
          </div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h6>
              ${(ticketPrice * SERVICE_FEE_PERCENT * amountTicket).toFixed(2)}
            </h6>
          </div>
        </div>

        {/* Delevery */}
        <h5>Delevery</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-9 p-0 " + styles["col-1"]}>
            <h6>Mobile Entry</h6>
          </div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h6>Free</h6>
          </div>
        </div>

        <br />
        <h5 className="text-primary">Cancle order</h5>
        <br />
        <h6 className="text-black">All Sales Final - No Refunds</h6>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            I Have read and agree to current{" "}
            <span className="text-primary">Terms of Use.</span>
          </label>
        </div>

        <br />
        <button
          type="button"
          className={"btn btn-success " + styles["btn-place-order"]}
          onClick={() => {
            console.log("xxxx");
          }}
        >
          Place Order
        </button>
      </div>
    </section>
  );
};

export default FinalCostTotalComponent;
