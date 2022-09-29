import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";

export default function StageList() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      <div id="wrapper-header">
        <div className="header-block">
          <h3> Header Stage list</h3>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              router.push(`/ticket-list`);
            }}
          >
            Ticket list
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              router.push(`/final-cost`);
            }}
          >
            Final cost
          </button>
        </div>
      </div>

      <div id="wrapper">
        <section id={styles.header}>
          <div className={styles.block}>
            <h3>Detail Show</h3>
          </div>
        </section>

        {/* Section Content */}
        <section id={styles.content}>
          <div className={styles.block}>
            <div className={"row m-0 " + styles["content"]}>
              <div className={"col-12 col-md-8 p-0"}>
                <h3>Stage</h3>
              </div>
              <div className={"col-12 col-md-4 p-0 bg-danger"}>
                <h3>Filter</h3>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
