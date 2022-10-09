import StageMiniExAComponent from "@/components/stage-template/stage-exa/StageMiniExAMiniComponent";
import { ConcertStageSelector } from "@/store/slices/concertStageSlice";
import { creditCardSelector } from "@/store/slices/creditCardSlice";
import { SERVICE_FEE_PERCENT } from "@/utils/constant";
import { timeout } from "@/utils/utils";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CostTotalComponent.module.scss";

type CardProps = {};
const FinalCostTotalComponent = ({}: CardProps) => {
  const concertStage = useSelector(ConcertStageSelector);
  const creditCard = useSelector(creditCardSelector);

  const [objSectionSelected, setObjSectionSelected] = useState({
    key: "",
    sellTicket: 0,
    allTicket: 0,
    balanceTicket: 0,
    price: 0,
    type: "",
    amountBuy: 0,
  });

  useEffect(() => {
    if (concertStage?.sectionSelected != null) {
      setObjSectionSelected({ ...concertStage.sectionSelected });
    }
  }, [concertStage.sectionSelected]);

  async function onClickSubmit() {
    try {
      console.log("Submit Place order");

      if (concertStage.concertSelected && concertStage.sectionSelected) {
        let formData: FormData = new FormData();
        formData.append("concert_id", concertStage.concertSelected.id);
        formData.append("sec_id", concertStage.sectionSelected?.key!);
        formData.append(
          "amount_ticket",
          String(concertStage.sectionSelected?.amountBuy)
        );
        formData.append("security_key", creditCard.securityCode);

        // #### Call api #####
        // const response = await submitPlaceOrder(formData);
        router.push(`/final-cost/result`);
      }
      else{
        alert("Not found concert or section data");
      }
    } catch (error) {
      alert("Error Place order please try again.");
    }
  }

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
            <h4>
              $
              {(
                objSectionSelected.price * objSectionSelected.amountBuy +
                objSectionSelected.price *
                  SERVICE_FEE_PERCENT *
                  objSectionSelected.amountBuy
              ).toFixed(2)}
            </h4>
          </div>
        </div>
        <br />
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-12 p-0 "}>
            <StageMiniExAComponent />
          </div>
        </div>

        {/* Tickets */}
        <h5>Tickets</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">
              Resale Tickets: ${objSectionSelected.price.toFixed(2)} x{" "}
              {objSectionSelected.amountBuy}
            </h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">
              $
              {(
                objSectionSelected.price * objSectionSelected.amountBuy
              ).toFixed(2)}
            </h5>
          </div>
        </div>

        {/* Fee */}
        <h5>Fee</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">
              Service Fee: $
              {(objSectionSelected.price * SERVICE_FEE_PERCENT).toFixed(2)} x{" "}
              {objSectionSelected.amountBuy}
            </h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">
              $
              {(
                objSectionSelected.price *
                SERVICE_FEE_PERCENT *
                objSectionSelected.amountBuy
              ).toFixed(2)}
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
        <div>
          <button
            type="button"
            className="btn p-0"
            onClick={() => {
              router.back();
            }}
          >
            <h5 className="text-primary"> Cancle order</h5>
          </button>
        </div>
        <br />
        <h5 className="text-black">All Sales Final - No Refunds</h5>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            defaultChecked
            disabled={true}
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
          data-bs-toggle="modal"
          data-bs-target="#confirmSubmitModal"
          disabled={
            creditCard?.creditCardSelected === null ||
            creditCard?.securityCode.length !== 3
          }
          // onClick={async () => onClickSubmit()}
        >
          Place Order
        </button>
      </div>

      <div
        className="modal fade"
        id="confirmSubmitModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Confirm Place Order
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* 
            <div className="modal-body">
            Confirm Place Order
            </div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={async () => onClickSubmit()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCostTotalComponent;
