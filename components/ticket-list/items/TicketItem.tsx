import React from "react";
import styles from "../../../styles/ticket-list/ticketItem.module.scss";

type CardProps = {};
const TicketItemComponent = ({}: CardProps) => {
  return (
    <div
      className={
        "col-12 col-md-12 col-lg-12 col-xl-12 p-0 " + styles["block-ticket"]
      }
    >
      <div className={styles["ticket-Item"]}>
        <div className="row m-0">
          <div className={"col-12 col-sm-3 col-md-2 p-0 " + styles["col-1"]}>
            <h5>OCT-15</h5>
            <h6> Sat 7:30pm</h6>
          </div>

          <div
            className={"col-12 col-sm-6 col-md-8 p-0 m-0 " + styles["col-2"]}
          >
            <h5>H5 Bon Secours Wellness Arena - Greenville, SC</h5>
            <h6>Carrie Underwood - The Denim &amp; Rhinestones</h6>
          </div>

          <div
            className={"col-12 col-sm-3 col-md-2 p-0 m-0 " + styles["col-3"]}
          >
            <button type="button" className="btn btn-primary">
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
