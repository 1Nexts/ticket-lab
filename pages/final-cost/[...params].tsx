import FinalCostTotalComponent from "@/components/final-cost/cost-total/CostTotalComponent";
import DeliveryComponent from "@/components/final-cost/delivery/DeliveryComponent";
import HeaderMenu from "@/components/header-menu/HeaderMenu";
import PaymentCard from "@/components/payment/PaymentComponent";
import { SectionSelect } from "@/models/concertStage.model";
import {
  ConcertStageSelector,
  getConcertStageList,
  setSectionSelected,
} from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/final-cost/index.module.scss";

export default function FinalCost() {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {
    try {
      if (params != undefined) {
        const concertId: string = params[0];
        const sectionIdSelected: string = params[1];
        const amountTicket = Number(params[2]);

        // Case refresh browser
        if (concertStage.sectionSelected === null) {
          handleRefreshPage(concertId, sectionIdSelected, amountTicket);
        } else {
          localStorage.setItem(
            "SectionSelected",
            JSON.stringify(concertStage.sectionSelected)
          );
        }
      }
    } catch (error) {
      // handle in redux store
    }
  }, [router]);

  async function handleRefreshPage(
    concertId: string,
    sectionIdSelected: string,
    amountTicket: number
  ) {
    try {
      const responseConcertStage = await dispatch( getConcertStageList(concertId) );

      if (responseConcertStage.meta.requestStatus === "fulfilled") {

        // load section select
        let objSectionSelected: SectionSelect = JSON.parse(
          localStorage.getItem("SectionSelected") || "{}"
        );
        
        // check not found section selected
        if (Object.keys(objSectionSelected).length !== 0) {
          amountTicket > 0 && (objSectionSelected.amountBuy = amountTicket);// set amount from url
          dispatch(setSectionSelected(objSectionSelected));
        }
        else{
          alert("Not found section select");
          router.push(`/stage-list/${concertId}`);
        }
      }
      // case else handle in redux
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["final-cost"]}>
          <div className="block">
            <div className={"row m-0 " + styles["block-content"]}>
              <div
                className={
                  "col-12 col-md-7 p-0 " + styles["block-content-left"]
                }
              >
                <DeliveryComponent
                  concertSelected={concertStage?.concertSelected}
                ></DeliveryComponent>

                <PaymentCard></PaymentCard>
              </div>
              <div
                className={
                  "col-12 col-md-5 p-0 " + styles["block-content-right"]
                }
              >
                <FinalCostTotalComponent></FinalCostTotalComponent>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
