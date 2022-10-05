import { SectionSelect } from "@/models/concertStage.model";
import {
  ConcertStageSelector,
  resetSelectionSelected,
  updateSectionSelected,
} from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SubTotalComponent.module.scss";
import { SERVICE_FEE_PERCENT } from "@/utils/constant";

type CardProps = {};
const SubTotalComponent = ({}: CardProps) => {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  let [amountBuy, setAmountBuy] = useState<number>(2);
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
    console.log("Start useEffect ");

    if (concertStage?.sectionSelected != null) {
      setObjSectionSelected({ ...concertStage.sectionSelected });
      setAmountBuy(concertStage.sectionSelected.amountBuy);
    }

    return () => {
      console.log("Return useEffect ");
      setAmountBuy(2);
    };
  }, []);

  useEffect(() => {
    console.log("Start useEffect 2");
  }, [amountBuy]);

  return (
    <section id={styles["cost-total"]}>
      <div className={styles["block-total"]}>
        {/* Total */}
        <div className={"row m-0 " + styles["header-row"]}>
          <div className={"col-3 p-0 " + styles["col-1"]}></div>
          <div className={"col-6 p-1 " + styles["col-2"]}>
            <h3>{concertStage.sectionSelected?.key}</h3>
          </div>
          <div className={"col-3 p-1 " + styles["col-3"]}>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                dispatch(resetSelectionSelected());
              }}
            ></button>
          </div>

          <hr />

        </div>
        <br />
       

        {/* Row Ticket amount */}
        <div className={"row m-0 " + styles["ticket-amount-row"]}>
          <div className={"col-4 p-0 text-right"}>
            <button
              type="button"
              className={"btn "+ (amountBuy <= 1 && "bg-secondary")}
              onClick={() => {
                if (amountBuy > 1) {
                  setAmountBuy(Number(amountBuy) - 1);
                }
              }}
            >
              <img src="/static/dash-white.svg" />
            </button>
          </div>
          <div className={"col-4 p-0 "}>
            <h3 className="p-0">{amountBuy}</h3>
          </div>
          <div className={"col-4 p-0 text-left"}>
            <button
              type="button"
              className={"btn "+ (amountBuy >= objSectionSelected.balanceTicket && "bg-secondary")}
              onClick={() => {
                console.log(
                  "objSectionSelected.balanceTicket = ",
                  objSectionSelected.balanceTicket
                );

                if (amountBuy < objSectionSelected.balanceTicket) {
                  setAmountBuy(Number(amountBuy) + 1);
                }
              }}
            >
              <img src="/static/plus-white.svg" />
            </button>
          </div>
        </div>
        <br />

        {/* <h5>Balance : {concertStage.sectionSelected?.sellTicket}/{concertStage.sectionSelected?.allTicket} tickets</h5> */}
        {/* <br /> */}

        {/* Tickets */}
        <h5>Tickets</h5>
        <div className={"row m-0 " + styles["item-row"]}>
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5 className="text-secondary">
              {concertStage.sectionSelected?.type}: $
              {objSectionSelected.price.toFixed(2)} x {amountBuy}
            </h5>
          </div>

          <div className={"col-1 p-0 "}></div>

          <div className={"col-3 p-0 " + styles["col-2"]}>
            <h5 className="text-secondary">
              ${(objSectionSelected.price * amountBuy).toFixed(2)}
            </h5>
          </div>
        </div>

        <br />
        <button
          type="button"
          className={"btn btn-success " + styles["btn-place-order"]}
          onClick={() => {
            dispatch(
              updateSectionSelected({
                ...objSectionSelected,
                amountBuy: amountBuy,
              })
            );
            router.push(`/final-cost/${concertStage.concertSelected.id}/${objSectionSelected.key}/${amountBuy}`);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default SubTotalComponent;
