import { Section } from "@/models/concertStageData.model";
import React from "react";
import styles from "./item.module.scss";

type CardProps = {
  objSection: Section;
};
const SectionItemComponent = ({ objSection }: CardProps) => {
  return (
    <div className={"col-12 p-0 " + styles["blockItemSelect"]}>
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-7 p-0 " + styles["col-1"]}>
            <h5>{objSection?.key} : {objSection?.sellTicket}/{objSection?.allTicket} tickets</h5>
            <h5>{objSection?.type}</h5>
          </div>

          <div className={"col-5 p-0 m-0 " + styles["col-3"]}>
            <h5> ${objSection.price} ea</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionItemComponent;
