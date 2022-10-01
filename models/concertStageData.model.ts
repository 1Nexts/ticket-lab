import { ConcertItem } from "./concert.model";

export interface ConcertStageData {
  id: string;
  concertItem: ConcertItem;
  sections: Section[];
}



export interface Section {
  key: string;
  sellTicket: number;
  allTicket: number;
  balanceTicket: number;
  price: number;
  type: string;
}

