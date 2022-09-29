import HeaderMenu from "@/components/header-menu/HeaderMenu";
import StageFilterComponent from "@/components/stage-list/StageFilter";
import StageExAComponent from "@/components/stage-template/StageExA";
import router from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";

export default function StageList() {
  useEffect(() => {
    console.log("Start useEffect");

    return () => {};
  }, []);

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["stage-list"]}>
          <div className="block">
            {/* Show detail */}
            <div className={styles["show-detail"]}>
              <h4>Carrie Underwood - The Denim & Rhinestones</h4>
              <br />
              <h5>Sat • Oct 15 • 7:30 PM</h5>
              <h5>Bon Secours Wellness Arena , Greenville, SC</h5>
            </div>

            {/* Section Content */}
            <div className={"row m-0 " + styles["block-content"]}>
              <div className={"col-12 col-md-8 p-0"}>
                <StageExAComponent></StageExAComponent>
              </div>
              <div className={"col-12 col-md-4 p-0 bg-secondary"}>
                <StageFilterComponent></StageFilterComponent>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
