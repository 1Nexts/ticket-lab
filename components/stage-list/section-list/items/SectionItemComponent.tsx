import { Section } from "@/models/concertStageData.model";
import { buildSectionSelected } from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";
import styles from "./item.module.scss";

type CardProps = {
  objSection: Section;
};
const SectionItemComponent = ({ objSection }: CardProps) => {
  const dispatch = useAppDispatch();
  
  return (
    <div
      className={"col-12 p-0 " + styles["blockItemSelect"]}
      onClick={() => {
      
        dispatch(
          buildSectionSelected(objSection)
        );
      }}
    >
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-8 p-0 " + styles["col-1"]}>
            <h5>
              <b>{objSection?.key}</b>
            </h5>
            <h5>
              {objSection?.sellTicket}/{objSection?.allTicket} tickets
            </h5>
          </div>

          <div className={"col-4 p-0 m-0 " + styles["col-3"]}>
            <h5>
              {" "}
              <b>${objSection.price} ea</b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionItemComponent;
