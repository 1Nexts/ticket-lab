import { ConcertStageSelector } from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import { SERVICE_FEE_PERCENT } from "@/utils/constant";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/final-cost/result.module.scss";

type CardProps = {};
const FinalCostResult = ({}: CardProps) => {
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
    if (concertStage?.sectionSelected != null) {
      setObjSectionSelected({ ...concertStage.sectionSelected });
    }
  }, [concertStage.sectionSelected]);

  return (
    <div>
      <div id="wrapper">
        <section id={styles["final-cost"]}>
          <div className="block">
            <br />
            <br />
            <br />
            <br />
            <div className={"row m-0 " + styles["block-content"]}>
              <div className={"col-1 col-md-3 p-0"}></div>

              <div
                className={
                  "col-10 col-md-6 p-0 " + styles["block-content-right"]
                }
              >
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
                            objSectionSelected.price *
                              objSectionSelected.amountBuy +
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
                          Resale Tickets: ${objSectionSelected.price.toFixed(2)}{" "}
                          x {objSectionSelected.amountBuy}
                        </h5>
                      </div>

                      <div className={"col-1 p-0 "}></div>

                      <div className={"col-3 p-0 " + styles["col-2"]}>
                        <h5 className="text-secondary">
                          $
                          {(
                            objSectionSelected.price *
                            objSectionSelected.amountBuy
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
                          {(
                            objSectionSelected.price * SERVICE_FEE_PERCENT
                          ).toFixed(2)}{" "}
                          x {objSectionSelected.amountBuy}
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
                    <button
                      type="button"
                      className={"btn btn-success " + styles["btn-place-order"]}
                      onClick={() => {
                        router.push(`/concert-list/ed-sheeran`);
                      }}
                    >
                      Thank you for test
                    </button>
                  </div>
                </section>
              </div>

              <div className={"col-1 col-md-3 p-0 "}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinalCostResult;
