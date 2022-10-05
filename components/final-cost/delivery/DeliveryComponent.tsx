import { ConcertStageModel } from "@/models/concertStage.model";
import React from "react";
import styles from "./DeliveryComponent.module.scss";

type CardProps = {
  concertSelected: ConcertStageModel;
};
const DeliveryComponent = ({ concertSelected }: CardProps) => {
  
  return (
    <section id={styles["delevery"]}>
      <div className={styles["block-delevery"]}>
        <h4>
          Delivery <img src="/static/check-circle.svg" />
        </h4>
        <br />
        <h5>Mobile Entry - Free</h5>

        <h6>
          Tickets Avaliable by {concertSelected?.concertItem.time} {concertSelected?.concertItem.date}, 2022 These mobile tickets will be
          transferred directly to you from a trusted seller,We'll email you
          instructions on how to accept them on the original ticket provider's
          mobile app.
        </h6>
      </div>
    </section>
  );
};

export default DeliveryComponent;
