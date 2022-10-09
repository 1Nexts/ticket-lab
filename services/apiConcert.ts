import { Concert } from "@/models/concert.model";
import httpClient from "@/utils/httpClient";
import { timeout } from "utils/utils";


export const getConcertById = async (concertId:string): Promise<Concert> => {
  
    try {
        // Call Next api
        const response = await httpClient.post<Concert>(
            `/concert/${concertId}`,
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