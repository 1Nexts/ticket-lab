import { ConcertStageModel } from "@/models/concertStage.model";
import httpClient from "@/utils/httpClient";
import { timeout } from "utils/utils";

export const getConcertStageById = async (idConcertStage: string): Promise<ConcertStageModel> => {
  try {
    // Call Next api
    const response = await httpClient.post<ConcertStageModel>( `/concert-stage/${idConcertStage}`,
      {},
      {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
      }
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


