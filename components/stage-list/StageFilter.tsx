import React, { useEffect } from "react";
import styles from "../../styles/stage-list/stageFilter.module.scss";

type CardProps = {};
const StageFilterComponent = ({}: CardProps) => {
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
    <section id={styles["stage-list-filter"]}>
      {/* <select className={styles["select-ticket"]} aria-label="Quantity">
  
      </select> */}
      <select className={"form-select "+styles['select-ticket']}>
        <option value={1}>1 Ticket</option>
        <option value={2}>2 Tickets</option>
        <option value={3}>3 Tickets</option>
        <option value={4}>4 Tickets</option>
        <option value={5}>5 Tickets</option>
        <option value={6}>6 Tickets</option>
        <option value={7}>7 Tickets</option>
        <option value={8}>8 Tickets</option>
        <option value={8}>9 Tickets</option>
        <option value={8}>10 Tickets</option>
      </select>

      <div className={styles["slidecontainer"]}>
        <div className={"row m-0"}>
          <div className={"col-3 "}>
            <h4>
              $<span id="demo" />
            </h4>
          </div>

          <div className={"col-6 "+styles['slider-padding']}>
            <input
              type="range"
              min={18}
              max={1000}
              defaultValue={120}
              className={styles["slider"]}
              id="myRange"
              step="50"
            />
          </div>

          <div className={"col-3 "}>
            <h4>
              $1000
            </h4>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default StageFilterComponent;
