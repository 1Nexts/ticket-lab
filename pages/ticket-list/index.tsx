import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/ticket-list/index.module.scss";

export default function TicketList() {
  useEffect(() => {
    console.log("Start useEffect");

    return () => {};
  }, []);

  return (
    <div>
      <div id="wrapper-header">
        <div className="header-block">
          <h3>Header Ticket list</h3>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              router.push(`/stage-list`);
            }}
          >
            Stage list
          </button>
        </div>
      </div>

      <div id="wrapper">
        <section id={styles.header}>
          <div className={styles.block}>
            <h3>Search</h3>
          </div>
        </section>

        {/* Section Content */}
        <section id={styles.content}>
          <div className={styles.block}>
            <div className={"row m-0 " + styles["content"]}>
              <h3>Order list</h3>
              {/* {objServices &&
                objServices.map((item) => {
                  return (
                    <ServiceCard
                      key={item?._id}
                      serviceID={item?._id}
                      name={ item?.name.split(" ")[0].split("(")[0]}
                      picture={item?.picture}
                      price={item?.price}
                    />
                  );
                })} */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
