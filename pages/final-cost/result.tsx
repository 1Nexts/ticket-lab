import HeaderMenu from "@/components/header-menu/HeaderMenu";
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
      <HeaderMenu></HeaderMenu>
      
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
                    <div className={"col-12 p-0 text-center"}>
                      <img src="/static/check-circle.svg" width={150} />
                    </div>
                    <br />
                    <div className={"col-12 p-0 text-center"}>
                      <h1>Success</h1>
                    </div>
                    <div className={"col-12 p-0 text-center"}>
                      <h3>Check your email for a ticket</h3>
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
