import { Concert } from "@/models/concert.model";
import type { NextApiRequest, NextApiResponse } from "next";
import concertDataFromJSON from "../../../data-mock/concert_list.json";

export default async function getConcertById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query:{concertId}} = req;
    
    // Call api
    const consert: Concert = concertDataFromJSON;
    res.json(consert);
    
  } catch (error: any) {
    res.status(400).end();
  }
}
