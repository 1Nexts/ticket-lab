import { Section } from "@/models/concertStageData.model";
import { Dictionary } from "@/models/dictionary.model";
import React, { useEffect } from "react";
import styles from "./stageExA.module.scss";

type CardProps = {
  dicSections: Dictionary<Section>;
  sectionsFilter: Section[];
};
const StageExAComponent = ({ dicSections, sectionsFilter }: CardProps) => {
  useEffect(() => {
    // console.log("sectionsFilter = ", sectionsFilter);


    
  }, [dicSections, sectionsFilter]);

  function getStyleCustomSectionBySectionId(sectionId:string) {
    
    return dicSections[sectionId]?.balanceTicket <= 0 || dicSections.hasOwnProperty(sectionId) == false && `${styles["stage-close"]}`;
  }
  return (
    <section id={styles["section-stage"]}>
      <div className={styles.block}>
        {/* Row 1 */}
        <div className={styles["stage-container"]}>
          <div className={"row m-0 justify-content-center"}>
            <div className={"col-12 " + styles["stage-back"]}>
              <h3>Stage Example A</h3>
            </div>
          </div>

          <div className={"row m-0"}>
          <div className={`col-2 ${styles["stage-left"]} ` + getStyleCustomSectionBySectionId('Sec-4')}>
              <h3>4 </h3>
            </div>
            <div className={`col-2 ${styles["stage"]} ` + getStyleCustomSectionBySectionId('Sec-5')}>
              <h3>5</h3>
            </div>
            <div className={`col-2 ${styles["stage"]} ` + getStyleCustomSectionBySectionId('Sec-6')}>
              <h3>6</h3>
            </div>
            <div className={`col-2 ${styles["stage"]} ` + getStyleCustomSectionBySectionId('Sec-7')}>
              <h3>7</h3>
            </div>
            <div className={`col-2 ${styles["stage"]} ` + getStyleCustomSectionBySectionId('Sec-8')}>
              <h3>8</h3>
            </div>
            <div className={`col-2 ${styles["stage-right"]} ` + getStyleCustomSectionBySectionId('Sec-9')}>
              <h3>9</h3>
            </div>
          </div>
          <div className={"row m-0 justify-content-center"}>
            <div className={`col-2 ${styles["stage-left"]} ` + getStyleCustomSectionBySectionId('Sec-1')}>
              <h3>1</h3>
            </div>
            <div
              className={ `col-4 ${styles["stage-middle"]} ` + getStyleCustomSectionBySectionId('Sec-2') }
            >
              <h3>2</h3>
            </div>
            <div className={`col-2 ${styles["stage-right"]} ` + getStyleCustomSectionBySectionId('Sec-3')}>
              <h3>3</h3>
            </div>
          </div>

          <div className={"row m-0 justify-content-center"}>
            <div className={"col-5 " + styles["stage-main"]}>
              <h3>Stage</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageExAComponent;
