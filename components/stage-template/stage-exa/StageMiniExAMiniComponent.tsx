import { Section, SectionSelect } from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./StageMiniExAComponent.module.scss";
import {
  ConcertStageSelector,
} from "@/store/slices/concertStageSlice";

const StageMiniExAComponent = () => {
  const concertStage = useSelector(ConcertStageSelector);


  function getStyleCustomSectionBySectionId(sectionId: string) {


    concertStage
    return (
      concertStage.sectionSelected == null ||
      (concertStage.sectionSelected?.key !== sectionId && `${styles["stage-close"]}`)
    );
  }
  return (
    <section id={styles["section-stage-mini"]}>
      <div className={styles.block}>
        {/* Row 1 */}
        <div className={styles["stage-container"]}>
          <div className={"row m-0 justify-content-center"}>
            <div className={"col-12 theme-bg-main " + styles["stage-back"]}>
              Stage Example A
            </div>
          </div>

          <div className={"row m-0"}>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-left"]} ` +
                getStyleCustomSectionBySectionId("sec-4")
              }
            >
              4
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-5")
              }
            >
              5
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-6")
              }
            >
              6
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-7")
              }
            >
              7
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-8")
              }
            >
              8
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right"]} ` +
                getStyleCustomSectionBySectionId("sec-9")
              }
            >
              9
            </div>
          </div>
          <div className={"row m-0 justify-content-center"}>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-left-no-border"]} ` +
                getStyleCustomSectionBySectionId("sec-1")
              }
            >
              1
            </div>
            <div
              className={
                `col-4 theme-bg-main2 ${styles["stage"]} ${styles["stage-middle"]} ` +
                getStyleCustomSectionBySectionId("sec-2")
              }
            >
              2
            </div>
            <div
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right-no-border"]} ` +
                getStyleCustomSectionBySectionId("sec-3")
              }
            >
              3
            </div>
          </div>

          <div className={"row m-0 justify-content-center"}>
            <div className={`col-5  ${styles["stage-main"]} `}>Stage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageMiniExAComponent;

