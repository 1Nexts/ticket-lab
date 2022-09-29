import HeaderMenu from "@/components/header-menu/HeaderMenu";
import TicketItemComponent from "@/components/ticket-list/items/TocketItem";
import Link from "next/link";
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
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles.header}>
          <div className={styles.block}>
            <div className={"input-group " + styles["search-group"]}>
              <span className="input-group-text" id="basic-addon1">
                <img src="/static/search.svg" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search ticket"
              />
            </div>
          </div>
        </section>

        <section id={styles.content}>
          <div className={styles.block}>
            <div className={"row " + styles["content"]}>
              {[1, 2, 3, 4].map((value) => {
                return (
                <TicketItemComponent key={value}></TicketItemComponent>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
