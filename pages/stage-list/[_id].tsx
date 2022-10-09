import HeaderMenu from "@/components/header-menu/HeaderMenu";
import StageFilterComponent from "@/components/stage-list/stage-filter/StageFilterComponent";
import SectionListComponent from "@/components/stage-list/section-list/SectionListComponent";
import StageExAComponent from "@/components/stage-template/stage-exa/StageExAComponent";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../../styles/stage-list/index.module.scss";

import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import {
  ConcertStageSelector,
  getConcertStageList,
  resetSelectionSelected,
} from "@/store/slices/concertStageSlice";
import SubTotalComponent from "@/components/stage-list/sub-total/SubTotalComponent";

export default function ConcertList() {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {

    if (_id) loadStageList(_id + "");
    
  }, [_id]);

  async function loadStageList(_id: string) {
    try {
      const response = await dispatch(getConcertStageList(_id + ""));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(resetSelectionSelected());
      }
    } catch (error) {
      // alert not found stage
    }
  }

  return (
    concertStage !== null && (
      <div>
        <HeaderMenu></HeaderMenu>

        <div id="wrapper">
          <section id={styles["stage-list"]}>
            <div className="block">
              {/* Show detail */}
              <div className={"theme-bg-main " + styles["show-detail"]}>
                <h3>{concertStage?.concertSelected?.concertItem?.title}</h3>
                <br />
                <h4>{concertStage?.concertSelected?.concertItem?.subTitle}</h4>
                <h4>
                  {concertStage?.concertSelected?.concertItem?.date}{" "}
                  {concertStage?.concertSelected?.concertItem?.time}
                </h4>
              </div>

              {/* Section Content */}
              <div className={"row m-0 " + styles["block-content"]}>
                <div className={"col-12 col-md-8 p-0"}>
                  <StageExAComponent
                    dicSectionControler={concertStage.dicSectionControler}
                    sectionsFilter={concertStage.sectionsFilter}
                  ></StageExAComponent>
                </div>

                <div
                  className={"col-12 col-md-4 p-0 " + styles["right-content"]}
                >
                  {concertStage.sectionSelected === null ? (
                    <div>
                      <StageFilterComponent></StageFilterComponent>
                      <SectionListComponent></SectionListComponent>
                    </div>
                  ) : (
                    <div>
                      <SubTotalComponent></SubTotalComponent>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
}
