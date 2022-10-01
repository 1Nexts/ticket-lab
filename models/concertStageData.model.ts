import { ConcertItem } from "./concert.model";

export interface ConcertStageData {
  id: string;
  concertItem: ConcertItem;
  sec1: Section;
  sec2: Section;
  sec3: Section;
  sec4: Section;
  sec5: Section;
  sec6: Section;
  sec7: Section;
  sec8: Section;
  sec9: Section;
}

export interface Section {
  type: string;
  allTicket: number;
  sellTicket: number;
  balanceTicket: number;
  price: number;
}
