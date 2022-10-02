import FinalCostTotalComponent from "@/components/final-cost/CostTotal";
import DeliveryComponent from "@/components/final-cost/Delivery";
import HeaderMenu from "@/components/header-menu/HeaderMenu";
import PaymentCard from "@/components/payment/Payment";
import { ConcertStageData } from "@/models/concertStageData.model";
import {
  ConcertStageSelector,
  getConcertStageList,
  buildSectionSelected,
  setSectionSelected,
} from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/final-cost/index.module.scss";

export default function FinalCost() {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {
    console.log("Start useEffect ", params);
    if (params != undefined) {
      const concertId: string = params[0];
      const sectionIdSelected: string = params[1];
      const amountTicket = Number(params[2]);
      // console.log(concertId,sectionIdSelected,amountTicket);

      // Case refresh browser
      if(concertStage.sectionSelected === null){
        console.log("Load ..........");
        
        loadConcertAndSectionSelectedDataFromAPI(
          concertId,
          sectionIdSelected,
          amountTicket
        );
      }
      else{
       localStorage.setItem("SectionSelected",JSON.stringify(concertStage.sectionSelected))

      }
    }
    return () => {};
  }, [router]);

  useEffect(() => {
    
  }, [])
  

  async function loadConcertAndSectionSelectedDataFromAPI(
    concertId: string,
    sectionIdSelected: string,
    amountTicket: number
  ) {
    try {

      // submit = concertId, sectionId, amountTicket
      
      const responseConcertStage = await dispatch(getConcertStageList(concertId));
      if (responseConcertStage.meta.requestStatus === "fulfilled") {
        // let objConcertStageData = responseConcertStage.payload;
        
        // load section select
        let objSectionSelected = JSON.parse(localStorage.getItem("SectionSelected") || '{}');
        dispatch(setSectionSelected(objSectionSelected));
      }

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
                <DeliveryComponent></DeliveryComponent>

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
