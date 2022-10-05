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

      let formData: FormData = new FormData();
      formData.append("concert_id", concertStage.concertSelected.id);
      formData.append("sec_id", concertStage.sectionSelected?.key!);
      formData.append(  "amount_ticket", String(concertStage.sectionSelected?.amountBuy) );
      formData.append("security_key", creditCard.securityCode);
      // Display the key/value pairs
      // for (const pair of formData.entries()) {
      //   console.log(`${pair[0]}, ${pair[1]}`);
      // }


      // #### Call api #####
      // const response = await submitPlaceOrder(formData);
      // loading
      await timeout(3000);
      router.push(`/final-cost/result`);

      
    } catch (error) {
      alert("Error Place order please try again.")
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
          disabled={
            creditCard.creditCardSelected === null ||
            creditCard.securityCode.length !== 3
          }
          onClick={async () => onClickSubmit()}
          // onClick={() => {
          //   router.push(`/final-cost/result`);
          // }}
        >
          Place Order
        </button>
      </div>
    </section>
  );
};
export default FinalCostTotalComponent;
