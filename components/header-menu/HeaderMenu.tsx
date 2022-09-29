import Link from "next/link";
import React from "react";
import styles from "../../styles/header-menu/header.module.scss";


type CardProps = {

};
const HeaderMenu = ({  }: CardProps) => {

  return (
    <section id={styles["wrapper-header"]}>
        <div className={styles["header-block"]}>
          <div>
            <ul className="navbar-nav flex-row flex-wrap text-white">
              <li className="nav-item">
                <h3 className="text-white font-weight-bold px-3">Tickets</h3>
              </li>
              <li className="nav-item">
                <Link href="/ticket-list">
                  <a className="nav-link py-2 px-3">Ticket</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/stage-list">
                  <a className="nav-link py-2 px-3">Stage</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/final-cost">
                  <a className="nav-link py-2 px-3">Cost</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
};

export default HeaderMenu;
