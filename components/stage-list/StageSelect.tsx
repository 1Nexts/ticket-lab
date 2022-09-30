import React, { useEffect } from "react";
import styles from "./StageSelect.module.scss";
import StageItemSelectComponent from "./items/StageItemSelect";

type CardProps = {};
const StageSelectComponent = ({}: CardProps) => {
  useEffect(() => {
    let slider = document.getElementById("myRange") as HTMLInputElement;
    let output = document.getElementById("demo") as HTMLInputElement;

    if (output != null && slider != null) {
      // output.innerHTML = slider.value;
      slider.oninput = function () {
        output.innerHTML = slider.value;

        console.log(slider.value);
      };
    }
  }, []);

  return (
    <section id={styles["stage-list-select"]}>
      {/* <div className={styles["header"]}>
        <hr />
        <h4> Stage Select</h4>
        <hr />
      </div> */}
      <div className={styles["block-content"]}>
        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>

        <StageItemSelectComponent></StageItemSelectComponent>
        <hr></hr>
      </div>
    </section>
  );
};

export default StageSelectComponent;
