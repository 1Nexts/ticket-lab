import HeaderMenu from "@/components/header-menu/HeaderMenu";
import StageFilterComponent from "@/components/stage-list/StageFilter";
import StageSelectComponent from "@/components/stage-list/StageSelect";
import StageExAComponent from "@/components/stage-template/StageExA";
import { GetServerSideProps } from "next";
import router, { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";
import { Concert, ConcertItem } from "@/models/concert.model";
import { ConcertStageData } from "@/models/concertStageData.model";

import { store, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import {
  ConcertStageSelector,
  getConcertStageList,
} from "@/store/slices/concertStageSlice";

export default function ConcertList() {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { _id } = router.query;
  console.log("_id", _id);

  // const loadConcertStageList = useCallback(async (_id: string) => {
  //   try {
  //     dispatch(getConcertStageList(_id));
  //   } catch (error) {
  //     console.log("error loadConcertStageList");
  //   }
  // }, []);

  useEffect(() => {
    console.log("Start useEffect ");

    if (_id !== undefined) {
      dispatch(getConcertStageList(_id + ""));

      // Not found data
      // if (objConcertStageData === null) {
      //   alert("Not found Stage");
      //   router.push(`/concert-list/ed-sheeran`);
      //   return;
      // }
    }
  }, [_id]);

  return (
    concertStage !== null && (
      <div>
        <HeaderMenu></HeaderMenu>

        <div id="wrapper">
          <section id={styles["stage-list"]}>
            <div className="block">
              {/* Show detail */}
              <div className={styles["show-detail"]}>
                <h3>{concertStage?.objConcertStageData?.concertItem?.title}</h3>
                <br />
                <h4>
                  {concertStage?.objConcertStageData?.concertItem?.subTitle}
                </h4>
                <h4>
                  {concertStage?.objConcertStageData?.concertItem?.date}{" "}
                  {concertStage?.objConcertStageData?.concertItem?.time}
                </h4>
              </div>

              {/* Section Content */}
              <div className={"row m-0 " + styles["block-content"]}>
                <div className={"col-12 col-md-8 p-0"}>
                  <StageExAComponent></StageExAComponent>
                </div>
                <div
                  className={
                    "col-12 col-md-4 p-0 bg-secondary " +
                    styles["right-content"]
                  }
                >
                  <StageFilterComponent></StageFilterComponent>
                  <StageSelectComponent></StageSelectComponent>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
}
