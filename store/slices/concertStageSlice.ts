import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import router from "next/router";
import {
  ConcertStageModel as ConcertStageModel,
  Section,
  SectionSelect,
} from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";

// Mock data
import concertStageDataFromJSON from "../../data-mock/concert_stage_data_list.json";

interface ConcertState {
  concertSelected: ConcertStageModel;

  sectionsFilter: Section[];
  amountTicketFilter: number;
  dicSections: Dictionary<Section>;

  sectionSelected: SectionSelect | null;
}

const initialState: ConcertState = {
  concertSelected: {
    id: "",
    concertItem: {
      id: "",
      name: "",
      date: "",
      time: "",
      title: "",
      subTitle: "",
    },
    sections: [],
  },
  sectionsFilter: [],
  dicSections: {},
  amountTicketFilter: 2,

  sectionSelected: null,
};

type FilterAction = {
  amountTicket: number;
  isLowPrice: boolean;
};
type DataCostTotalAction = {
  concertId:string;
  sectionIdSelected: string;
  amountTicketBuy: number;
};

export const getConcertStageList = createAsyncThunk(
  "concert-stage/getConcertStageList",
  async (idConcertStage: string, { rejectWithValue }) => {
    try {

      // Load ConcertStageData Mock data
      let indexStageData = Number(idConcertStage?.slice(idConcertStage.length - 1)) - 1;
      let objConcertStageData = indexStageData < concertStageDataFromJSON.length
          ? concertStageDataFromJSON[indexStageData]
          : null;

      if (objConcertStageData === null) return rejectWithValue(null);
      // console.log("LOAD objConcertStageData = ", objConcertStageData);

      return objConcertStageData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const concertStageSlice = createSlice({
  name: "concert-stage",
  initialState: initialState,
  reducers: {
    resetFilter: (state) => {
      concertStageSlice.caseReducers.filterConcertStage(state);
      state.amountTicketFilter = 2;
    },
    filterConcertStage: (state, action?: PayloadAction<FilterAction>) => {
      let objFilterAction: FilterAction =
        action?.payload != null
          ? action.payload
          : {
              amountTicket: 2,
              isLowPrice: true,
            };

      // Update amount filter selected
      state.amountTicketFilter = objFilterAction.amountTicket;

      // Filter balance ticket
      state.sectionsFilter = state.concertSelected?.sections.filter(
        (el) => el.balanceTicket >= objFilterAction.amountTicket
      );

      // Filter price ASC
      if (objFilterAction.isLowPrice)
        state.sectionsFilter.sort((a, b) => a.price - b.price);
      // Filter price DESC
      else state.sectionsFilter.sort((a, b) => b.price - a.price);

      concertStageSlice.caseReducers.buildDictionarySections(state);
    },
    buildDictionarySections: (state) => {
      state.dicSections = <Dictionary<Section>>(
        Object.fromEntries(
          state.sectionsFilter.map(({ key, ...rest }) => [key, rest])
        )
      );
    },

    // ---- Section ---------

    buildSectionSelected: (state, action: PayloadAction<Section>) => {
      let objSectionSelect: SectionSelect = {
        ...action.payload,
        amountBuy: state.amountTicketFilter,
      };

      state.sectionSelected = objSectionSelect;
    },
    setSectionSelected: (state, action: PayloadAction<SectionSelect>) => {
      state.sectionSelected = {...action.payload};
    },

    resetSelectionSelected: (state) => {
      state.sectionSelected = null;
    },
    updateSectionSelected: (state, action: PayloadAction<SectionSelect>) => {
      state.sectionSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getConcertStageList.fulfilled,
      (state, action: PayloadAction<ConcertStageModel>) => {
        if (action.payload != null) {
          state.concertSelected = action.payload;

          // Default filter
          concertStageSlice.caseReducers.resetFilter(state);
        }
      }
    );
    builder.addCase(
      getConcertStageList.rejected,
      (state, action: PayloadAction<any>) => {
        alert("Not found stage");
        router.push(`/concert-list/ed-sheeran`);
        throw action.payload;
      }
    );
  },
});

export const {
  filterConcertStage,
  buildSectionSelected,
  setSectionSelected,
  resetSelectionSelected,
  updateSectionSelected,
} = concertStageSlice.actions;

export const ConcertStageSelector = (store: RootState): ConcertState =>
  store.concertStageSlice;
// export reducer
export default concertStageSlice.reducer;
