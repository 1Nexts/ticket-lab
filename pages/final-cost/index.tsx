import DeliveryComponent from "@/components/final-cost/Delivery";
import HeaderMenu from "@/components/header-menu/HeaderMenu";
import PaymentCard from "@/components/payment/Payment";
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
              <div
                className={
                  "col-12 col-md-7 p-0 " + styles["block-content-left"]
                }
              >
                <DeliveryComponent></DeliveryComponent>
                <br />

                <PaymentCard></PaymentCard>
              </div>
              <div
                className={
                  "col-12 col-md-5 p-0 " + styles["block-content-right"]
                }
              >
                <h3>Total</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
