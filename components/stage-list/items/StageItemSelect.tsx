import React from "react";
import styles from "./item.module.scss";

type CardProps = {};
const StageItemSelectComponent = ({}: CardProps) => {
  return (
    <div className={"col-12 p-0 " + styles["blockItemSelect"]}>
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-7 p-0 " + styles["col-1"]}>
            <h5>Sec-4 </h5>
            <h6>90/100 tickets : Standard ticket</h6>
          </div>

          <div className={"col-5 p-0 m-0 " + styles["col-3"]}>
            <h5> $25 ea</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageItemSelectComponent;
