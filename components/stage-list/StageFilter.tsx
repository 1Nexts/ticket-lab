import { filterConcertStage } from "@/store/slices/concertStageSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import styles from "./stageFilter.module.scss";

type CardProps = {};
const StageFilterComponent = ({}: CardProps) => {
  const dispatch = useAppDispatch();
  const [ticketAmountSelected, setTicketAmountSelected] = useState(2);
  const [isLowPrice, setIsLowPrice] = useState(true);

  useEffect(() => {}, []);

  return (
    <section id={styles["stage-list-filter"]}>
      {/* <select className={styles["select-ticket"]} aria-label="Quantity">
  
      </select> */}
      <select
        className={"form-select " + styles["select-ticket"]}
        defaultValue={ticketAmountSelected}
        onChange={(event: React.ChangeEvent<any>) => {
          let amountTicket: number = event.target.value;
          setTicketAmountSelected(amountTicket);

          dispatch(
            filterConcertStage({
              amountTicket: amountTicket,
              isLowPrice: isLowPrice,
            })
          );
        }}
      >
        <option value={1}>1 Ticket</option>
        <option value={2}>2 Tickets</option>
        <option value={3}>3 Tickets</option>
        <option value={4}>4 Tickets</option>
        <option value={5}>5 Tickets</option>
        <option value={6}>6 Tickets</option>
        <option value={7}>7 Tickets</option>
        <option value={8}>8 Tickets</option>
        <option value={9}>9 Tickets</option>
        <option value={10}>10 Tickets</option>
      </select>

      <div className={styles["filter-price"]}>
        <div className={"row m-0"}>
          <hr />
          <div className={"col-6 " + (isLowPrice && styles["price-selected"])}>
            <button
              type="button"
              className="btn"
              onClick={() => {
                console.log("Onclick Low Price");

                setIsLowPrice(true);
                dispatch(
                  filterConcertStage({
                    amountTicket: ticketAmountSelected,
                    isLowPrice: true,
                  })
                );
              }}
            >
              Low Price
            </button>
          </div>

          <div className={"col-6 "+ (!isLowPrice && styles["price-selected"])}>
            <button
              type="button"
              className="btn"
              onClick={() => {
                console.log("Onclick Best Seats");

                setIsLowPrice(false);
                dispatch(
                  filterConcertStage({
                    amountTicket: ticketAmountSelected,
                    isLowPrice: false,
                  })
                );
              }}
            >
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
