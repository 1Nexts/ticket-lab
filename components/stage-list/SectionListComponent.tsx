import React, { useEffect } from "react";
import styles from "./SectionListComponent.module.scss";
import SectionItemComponent from "./items/SectionItemComponent";

import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { ConcertStageSelector } from "@/store/slices/concertStageSlice";
import { Section } from "@/models/concertStageData.model";

type CardProps = {};
const SectionListComponent = ({}: CardProps) => {
  const concertStage = useSelector(ConcertStageSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {

  
  }, []);

  
  return (
    <section id={styles["stage-list-select"]}>
       <div className={styles["header"]}>
        <h3>Select Section</h3>
       </div>
      <div className={styles["block-content"]}>
        {
          <div>
            {concertStage.sectionsFilter.map((objSection: Section) => (
              <div key={objSection.key}>
                <SectionItemComponent objSection={objSection}></SectionItemComponent>
                <hr />
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
};

export default SectionListComponent;
