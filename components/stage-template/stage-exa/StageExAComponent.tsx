import { Section } from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";
import React, { useEffect } from "react";
import styles from "./StageExAComponent.module.scss";

type CardProps = {
  dicSections: Dictionary<Section>;
  sectionsFilter: Section[];
};
const StageExAComponent = ({ dicSections, sectionsFilter }: CardProps) => {
  useEffect(() => {}, [dicSections, sectionsFilter]);

  function getStyleCustomSectionBySectionId(sectionId: string) {
    return (
      dicSections[sectionId]?.balanceTicket <= 0 ||
      (dicSections.hasOwnProperty(sectionId) == false &&
        `${styles["stage-close"]}`)
    );
  }
  return (
    <section id={styles["section-stage"]}>
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
            <div
              className={`col-5  ${styles["stage-main"]} `}
            >
              Stage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageExAComponent;
