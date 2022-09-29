import HeaderMenu from "@/components/header-menu/HeaderMenu";
import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/final-cost/index.module.scss";

export default function FinalCost() {
  useEffect(() => {
    console.log("Start useEffect");

    return () => {};
  }, []);

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["final-cost"]}>
          <div className="block">
            <div className={"row m-0 " + styles["block-content"]}>
              <div className={"col-12 col-md-7 p-0 "+styles['block-content-left']}>
                <h3>Delivery</h3>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Payment</h3>
              </div>
              <div className={"col-12 col-md-5 p-0 "+styles['block-content-right']}>
                <h3>Total</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
