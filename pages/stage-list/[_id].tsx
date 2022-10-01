import HeaderMenu from "@/components/header-menu/HeaderMenu";
import StageFilterComponent from "@/components/stage-list/StageFilter";
import StageSelectComponent from "@/components/stage-list/StageSelect";
import StageExAComponent from "@/components/stage-template/StageExA";
import { GetServerSideProps } from "next";
import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";



type Props = {
  objConcertStageData: ConcertStageData;
};

export default function ConcertList({ objConcertStageData }: Props) {

  const objConcertItem: ConcertItem = objConcertStageData?.concertItem;

  
  useEffect(() => {
    console.log("Start useEffect ",objConcertStageData);

    if(objConcertStageData === null)
    {
      alert("Not found Stage");
      router.push(`/concert-list/ed-sheeran`);
    }
    return () => {};
  }, []);

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["stage-list"]}>
          <div className="block">
            {/* Show detail */}
            <div className={styles["show-detail"]}>
              <h3>{objConcertItem?.title}</h3>
              <br />
              <h4>{objConcertItem?.subTitle}</h4>
              <h4>{objConcertItem?.date} {" "} {objConcertItem?.time}</h4>
            </div>

            {/* Section Content */}
            <div className={"row m-0 " + styles["block-content"]}>
              <div className={"col-12 col-md-8 p-0"}>
                <StageExAComponent></StageExAComponent>
              </div>
              <div className={"col-12 col-md-4 p-0 bg-secondary "+styles["right-content"]}>
                <StageFilterComponent></StageFilterComponent>
                <StageSelectComponent></StageSelectComponent>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


import concertStageDataFromJSON from "../../data-mock/concert_stage_data_list.json";
import { Concert, ConcertItem } from "@/models/concert.model";
import { ConcertStageData } from "@/models/concertStageData.model";
export const getServerSideProps: GetServerSideProps = async ({query}) => {
  try {

    // TODO Get From API
    const { _id } = query;
    let indexStageData = Number(_id?.slice(_id.length-1))-1;
    
    let objConcertStageData =  indexStageData < concertStageDataFromJSON.length ? concertStageDataFromJSON[indexStageData] : null;
    return {
      props: {
        objConcertStageData: indexStageData < concertStageDataFromJSON.length ? concertStageDataFromJSON[indexStageData] : null,
      },
    };
  } catch (error) {
    throw error;
  }
};
