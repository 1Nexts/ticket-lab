import HeaderMenu from "@/components/header-menu/HeaderMenu";
import React, { useEffect } from "react";
import styles from "../../styles/final-cost/result.module.scss";

export default function SeatList() {
  useEffect(() => {
    console.log("Start useEffect");

    return () => {};
  }, []);

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["final-cost-result"]}>
          <div className="block">
            <div className={styles["block-content"]}>Final cost result</div>
          </div>
        </section>
      </div>
    </div>
  );
}
