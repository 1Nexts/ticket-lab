import { ConcertItem } from "./concert.model";

export interface ConcertStageModel {
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

export interface SectionSelect {
  key: string;
  sellTicket: number;
  allTicket: number;
  balanceTicket: number;
  price: number;
  type: string;
  amountBuy:number
}


export interface SectionControler {
  key: string;
  isOpen: boolean;
  objSection:Section;
}

