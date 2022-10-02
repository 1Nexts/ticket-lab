import { ConcertStageSelector } from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import { SERVICE_FEE_PERCENT } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./costTotal.module.scss";

type CardProps = {};
const FinalCostTotalComponent = ({}: CardProps) => {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();
  
  const [objSectionSelected, setObjSectionSelected] = useState({
    key: "",
    sellTicket: 0,
    allTicket: 0,
    balanceTicket: 0,
    price: 0,
    type: "",
    amountBuy: 0,
  });

  // let costTotal = 0;

  useEffect(() => {
    console.log("Start useEffect ");

    if (concertStage?.sectionSelected != null) {
      setObjSectionSelected({ ...concertStage.sectionSelected });
    }

    return () => {
      console.log("Return useEffect ");
    };
  }, []);
  
  return (
    <section id={styles["cost-total"]}>
      <div className={styles["block-total"]}>
        {/* Total */}
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h4>Total</h4>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h4>${((objSectionSelected.price * objSectionSelected.amountBuy) + (objSectionSelected.price * SERVICE_FEE_PERCENT * objSectionSelected.amountBuy)).toFixed(2)}</h4>
          </div>
        </div>
        <br />

        {/* Tickets */}
        <h5>Tickets</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">
              Resale Tickets: ${objSectionSelected.price.toFixed(2)} x {objSectionSelected.amountBuy}
            </h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">
              ${(objSectionSelected.price * objSectionSelected.amountBuy).toFixed(2)}
            </h5>
          </div>
        </div>

        {/* Fee */}
        <h5>Fee</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">
              Service Fee: ${(objSectionSelected.price * SERVICE_FEE_PERCENT).toFixed(2)} x{" "}
              {objSectionSelected.amountBuy}
            </h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">
              ${(objSectionSelected.price * SERVICE_FEE_PERCENT * objSectionSelected.amountBuy).toFixed(2)}
            </h5>
          </div>
        </div>

        {/* Delevery */}
        <h5>Delevery</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">Mobile Entry</h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">Free</h5>
          </div>
        </div>

        <br />
        <h5 className="text-primary">Cancle order</h5>
        <br />
        <h5 className="text-black">All Sales Final - No Refunds</h5>

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
function setAmountBuy(amountBuy: number) {
  throw new Error("Function not implemented.");
}

