import React, { useEffect } from "react";
import styles from "./stageFilter.module.scss";

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
      <select className={"form-select " + styles["select-ticket"]}>
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

      <div className={styles["filter-price"]}>
        <div className={"row m-0"}>
          <hr />
          <div className={"col-6 " + styles["price-selected"]}>
            <button type="button" className="btn">
              Low Price
            </button>
          </div>

          <div className={"col-6 "}>
            <button type="button" className="btn">
              Best Seats
            </button>
          </div>

          <hr />
        </div>
      </div>
    </section>
  );
};

export default StageFilterComponent;
