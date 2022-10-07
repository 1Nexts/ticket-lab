import { Section } from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";
import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import styles from "./StageExAComponent.module.scss";

type CardProps = {
  dicSections: Dictionary<Section>;
  sectionsFilter: Section[];
};
const StageExAComponent = ({ dicSections, sectionsFilter }: CardProps) => {
  useEffect(() => {}, [dicSections, sectionsFilter]);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  function getStyleCustomSectionBySectionId(sectionId: string) {
    return (
      dicSections[sectionId]?.balanceTicket <= 0 ||
      (dicSections.hasOwnProperty(sectionId) == false &&
        `${styles["stage-close"]}`)
    );
  }

  function TooltipItem(secId: string) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
      <span>
        <Tooltip
          placement={"top"}
          isOpen={tooltipOpen}
          target={"Tooltip-" + secId}
          toggle={toggle}
        >
          {getSectionPriceBySectionId(secId)}
        </Tooltip>
      </span>
    );
  }
  function getSectionPriceBySectionId(sectionId: string) {
    if (dicSections.hasOwnProperty(sectionId) == false) {
      return "No Seats Available";
    } else {
      return "$" + dicSections[sectionId].price;
    }
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
              id={"Tooltip-sec-4"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-left"]} ` +
                getStyleCustomSectionBySectionId("sec-4")
              }
            >
              {TooltipItem("sec-4")}4
            </div>

            <div
              id={"Tooltip-sec-5"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-5")
              }
            >
              {TooltipItem("sec-5")}5
            </div>

            <div
              id={"Tooltip-sec-6"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-6")
              }
            >
              {TooltipItem("sec-6")}6
            </div>

            <div
              id={"Tooltip-sec-7"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-7")
              }
            >
              {TooltipItem("sec-7")}7
            </div>

            <div
              id={"Tooltip-sec-8"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-8")
              }
            >
              {TooltipItem("sec-8")}8
            </div>

            <div
              id={"Tooltip-sec-9"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right"]} ` +
                getStyleCustomSectionBySectionId("sec-9")
              }
            >
              {TooltipItem("sec-9")}9
            </div>
          </div>

          <div className={"row m-0 justify-content-center"}>
            <div
              id={"Tooltip-sec-1"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-left-no-border"]} ` +
                getStyleCustomSectionBySectionId("sec-1")
              }
            >
              {TooltipItem("sec-1")}1
            </div>
            <div
              id={"Tooltip-sec-2"}
              className={
                `col-4 theme-bg-main2 ${styles["stage"]} ${styles["stage-middle"]} ` +
                getStyleCustomSectionBySectionId("sec-2")
              }
            >
              {TooltipItem("sec-2")}2
            </div>
            <div
              id={"Tooltip-sec-3"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right-no-border"]} ` +
                getStyleCustomSectionBySectionId("sec-3")
              }
            >
              {TooltipItem("sec-3")}3
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

export default StageExAComponent;
