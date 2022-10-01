
export interface Concert {
  title: string;
  subTitle: string;
  concertList: ConcertItem[];
}

export interface ConcertItem {
    id: string;
    name: string;
    date: string;
    time: string;
    title: string;
    subTitle: string;
  }
  