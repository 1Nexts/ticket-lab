import { Section, SectionControler } from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";
import { toggleSectionTooltip } from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { Tooltip } from "reactstrap";
import styles from "./StageExAComponent.module.scss";

type CardProps = {
  dicSectionControler: Dictionary<SectionControler>;
  sectionsFilter: Section[];
};
const StageExAComponent = ({
  dicSectionControler,
  sectionsFilter,
}: CardProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
  }, [sectionsFilter]);

  function getStyleCustomSectionBySectionId(sectionId: string) {
    return (
      sectionsFilter.find((element) => element.key === sectionId) ===
        undefined && `${styles["stage-close"]}`
    );
  }

  function SectionTooltipItem(secId: string) {
    const toggle = () => {
      dispatch(toggleSectionTooltip(secId));
    };
    return (
      <span>
        <Tooltip
          placement={"top"}
          isOpen={
            dicSectionControler?.hasOwnProperty(secId) === true
              ? dicSectionControler[secId].isOpen
              : false
          }
          target={"Tooltip-" + secId}
          toggle={toggle}
        >
          {getSectionPriceBySectionId(secId)}
        </Tooltip>
      </span>
    );
  }
  function getSectionPriceBySectionId(sectionId: string) {
    if (
      sectionsFilter.find((element) => element.key === sectionId) === undefined
    ) {
      return "No Seats Available";
    } else {
      return "$" + dicSectionControler[sectionId]?.objSection.price;
    }
  }

  return (
    <section id={styles["section-stage"]}>
      <div className={styles.block}>

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
              {SectionTooltipItem("sec-4")}4
            </div>

            <div
              id={"Tooltip-sec-5"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-5")
              }
            >
              {SectionTooltipItem("sec-5")}5
            </div>

            <div
              id={"Tooltip-sec-6"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-6")
              }
            >
              {SectionTooltipItem("sec-6")}6
            </div>

            <div
              id={"Tooltip-sec-7"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-7")
              }
            >
              {SectionTooltipItem("sec-7")}7
            </div>

            <div
              id={"Tooltip-sec-8"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ` +
                getStyleCustomSectionBySectionId("sec-8")
              }
            >
              {SectionTooltipItem("sec-8")}8
            </div>

            <div
              id={"Tooltip-sec-9"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right"]} ` +
                getStyleCustomSectionBySectionId("sec-9")
              }
            >
              {SectionTooltipItem("sec-9")}9
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
              {SectionTooltipItem("sec-1")}1
            </div>
            <div
              id={"Tooltip-sec-2"}
              className={
                `col-4 theme-bg-main2 ${styles["stage"]} ${styles["stage-middle"]} ` +
                getStyleCustomSectionBySectionId("sec-2")
              }
            >
              {SectionTooltipItem("sec-2")}2
            </div>
            <div
              id={"Tooltip-sec-3"}
              className={
                `col-2 theme-bg-main2 ${styles["stage"]} ${styles["stage-right-no-border"]} ` +
                getStyleCustomSectionBySectionId("sec-3")
              }
            >
              {SectionTooltipItem("sec-3")}3
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
