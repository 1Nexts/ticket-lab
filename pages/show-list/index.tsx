import HeaderMenu from "@/components/header-menu/HeaderMenu";
import TicketItemComponent from "@/components/show-list/items/TicketItem";
import Link from "next/link";
import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/show-list/index.module.scss";

export default function ShowList() {
  useEffect(() => {
    console.log("Start useEffect");

    return () => {};
  }, []);

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">

        <section id={styles["section-show-list"]}>
          <div className="block">

            <div className={"input-group " + styles["search-group"]}>
              <span className="input-group-text" id="basic-addon1">
                <img src="/static/search.svg" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search show"
              />
            </div>

            <div className={styles["block-content"]}>
              <div className={"row m-0 "}>
                {[1, 2, 3, 4].map((value) => {
                  return (
                    <TicketItemComponent key={value}></TicketItemComponent>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
