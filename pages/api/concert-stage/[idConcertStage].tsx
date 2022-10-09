import { Concert } from "@/models/concert.model";
import { ConcertStageModel } from "@/models/concertStage.model";
import type { NextApiRequest, NextApiResponse } from "next";
import concertStageDataFromJSON from "../../../data-mock/concert_stage_data_list.json";

export default async function getConcertById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { idConcertStage },
    } = req;

    let objConcertStageData = concertStageDataFromJSON.find(
      (objConcert) => objConcert.id === idConcertStage
    );
      
    if (objConcertStageData) res.json(objConcertStageData);
    else res.status(400).end();

  } catch (error: any) {
    res.status(400).end();
  }
}
