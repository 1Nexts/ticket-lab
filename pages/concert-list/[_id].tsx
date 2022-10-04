import HeaderMenu from "@/components/header-menu/HeaderMenu";
import TicketItemComponent from "@/components/concert-list/items/TicketItem";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/concert-list/index.module.scss";
import { GetServerSideProps } from "next";

type Props = {
  concertData?: Concert;
};

export default function ConcertList({ concertData }: Props) {
  const [concertListFilter, setConcertListFilter] = useState<ConcertItem[]>([]);

  useEffect(() => {

    concertData !== undefined && setConcertListFilter(concertData.concertList);

    return () => {};
  }, []);

  function filterConcert(search:string) {

    console.log(search);
    
   let concertListFilter = concertData?.concertList.filter(
      (el) =>
        el.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        el.subTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        el.date.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        el.time.toLowerCase().indexOf(search.toLowerCase()) !==
          -1
    );

    concertListFilter !== undefined && setConcertListFilter(concertListFilter);
  }

  return (
    <div>
      <HeaderMenu></HeaderMenu>

      <div id="wrapper">
        <section id={styles["section-concert-list"]}>
          <div className="block">
            {/* Show detail */}
            <div className={styles["show-detail"]}>
              <h3>{concertData?.title}</h3>
              <br />
              <h4>{concertData?.subTitle}</h4>
            </div>

            <div className={"input-group " + styles["search-group"]}>
              <span className="input-group-text" id="basic-addon1">
                <img src="/static/search.svg" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search show"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  let search: string = event.target.value;
                  filterConcert(search);
                }}
              />
            </div>

            <div className={styles["block-content"]}>
              <div className={"row m-0 "}>
                {concertListFilter.map((objConcertItem: ConcertItem) => {
                  return (
                    <TicketItemComponent
                      key={objConcertItem.id}
                      objConcertItem={objConcertItem}
                    ></TicketItemComponent>
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

import concertDataFromJSON from "../../data-mock/concert_list.json";
import { Concert, ConcertItem } from "@/models/concert.model";
export const getServerSideProps: GetServerSideProps = async ({query}) => {
  try {

    // TODO Get From API
    const { _id } = query;

    return {
      props: {
        concertData: concertDataFromJSON,
      },
    };
  } catch (error) {
    throw error;
  }
};
