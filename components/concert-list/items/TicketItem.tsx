import { ConcertItem } from "@/models/concert.model";
import router from "next/router";
import React, { useCallback, useEffect } from "react";
import styles from "./ticketItem.module.scss";

type CardProps = {
  objConcertItem: ConcertItem;
};
const TicketItemComponent = ({ objConcertItem }: CardProps) => {
  const onClickSeeTickets = useCallback(() => {
  
    console.log("objConcertItem select = ",objConcertItem);
      router.push(`/stage-list/${objConcertItem.id}`);
  }, []);

  useEffect(() => {
    // console.log("objConcertItem = ", objConcertItem);
  }, [objConcertItem]);

  return (
    <div
      className={
        "col-12 col-md-12 col-lg-12 col-xl-12 p-0 " + styles["block-ticket"]
      }
    >
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-12 col-sm-3 col-md-2 p-0 " + styles["col-1"]}>
            <h5>{objConcertItem.date}</h5>
            <h6> {objConcertItem.time}</h6>
          </div>

          <div
            className={"col-12 col-sm-6 col-md-8 p-0 m-0 " + styles["col-2"]}
          >
            <h5>{objConcertItem.title}</h5>
            <h6>{objConcertItem.subtitle}</h6>
          </div>

          <div
            className={"col-12 col-sm-3 col-md-2 p-0 m-0 " + styles["col-3"]}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onClickSeeTickets()}
            >
              See Tickets
            </button>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default TicketItemComponent;
