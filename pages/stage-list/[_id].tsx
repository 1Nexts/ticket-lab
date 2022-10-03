import HeaderMenu from "@/components/header-menu/HeaderMenu";
import StageFilterComponent from "@/components/stage-list/stage-filter/StageFilterComponent";
import SectionListComponent from "@/components/stage-list/section-list/SectionListComponent";
import StageExAComponent from "@/components/stage-template/stage-exa/StageExAComponent";
import { useRouter } from "next/router";
import React, {  useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";

import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import {
  ConcertStageSelector,
  getConcertStageList,
  resetSelectionSelected,
} from "@/store/slices/concertStageSlice";
import SubTotalComponent from "@/components/stage-list/sub-total/SubTotalComponent";

export default function ConcertList() {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { _id } = router.query;
  
  useEffect(() => {
    if (_id !== undefined) {
      dispatch(getConcertStageList(_id + ""));
      dispatch(resetSelectionSelected());
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
                  <StageExAComponent
                    dicSections={concertStage.dicSections}
                    sectionsFilter={concertStage.sectionsFilter}
                  ></StageExAComponent>
                </div>

                <div
                  className={
                    "col-12 col-md-4 p-0 " +
                    styles["right-content"]
                  }
                >
                  {concertStage.sectionSelected === null ? (
                    <div>
                      <StageFilterComponent></StageFilterComponent>
                      <SectionListComponent></SectionListComponent>
                    </div>
                  ) : (
                    <div>
                      <SubTotalComponent></SubTotalComponent>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
}
