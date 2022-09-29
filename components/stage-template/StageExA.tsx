import React from "react";
import styles from "../../styles/stage-template/stageExA.module.scss";

type CardProps = {};
const StageExAComponent = ({}: CardProps) => {
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
            <div className={"col-2 " + styles["stage-left"]}>
              <h3>4</h3>
            </div>
            <div className={"col-2 " + styles["stage"]}>
              <h3>5</h3>
            </div>
            <div className={"col-2 " + styles["stage"]}>
              <h3>6</h3>
            </div>
            <div className={"col-2 " + styles["stage"]}>
              <h3>7</h3>
            </div>
            <div className={"col-2 " + styles["stage"]}>
              <h3>8</h3>
            </div>
            <div className={"col-2 " + styles["stage-right"]}>
              <h3>9</h3>
            </div>
          </div>

          <div className={"row m-0 justify-content-center"}>
            <div className={"col-2 " + styles["stage-left"]}>
              <h3>1</h3>
            </div>
            <div className={"col-4 " + styles["stage-middle"]}>
              <h3>2</h3>
            </div>
            <div className={"col-2 " + styles["stage-right"]}>
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
