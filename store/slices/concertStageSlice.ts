import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import router from "next/router";
import {
  ConcertStageModel as ConcertStageModel,
  Section,
  SectionSelect,
  SectionControler,
} from "@/models/concertStage.model";
import { Dictionary } from "@/models/dictionary.model";

// Mock data
import concertStageDataFromJSON from "../../data-mock/concert_stage_data_list.json";
import { getConcertStageById } from "@/services/apiConcertStage";

interface ConcertState {
  concertSelected: ConcertStageModel | null;
  amountTicketFilter: number;
  sectionsFilter: Section[];
  dicSectionControler: Dictionary<SectionControler>;
  sectionSelected: SectionSelect | null;
}

const initialState: ConcertState = {
  concertSelected: null,
  sectionsFilter: [],
  amountTicketFilter: 2,
  sectionSelected: null,
  dicSectionControler: {}, // Handle section data, toggle tooltip
};

type FilterAction = {
  amountTicket: number;
  isLowPrice: boolean;
};
type SetSectionToolTipAction = {
  secId: string;
  isOpen: boolean;
};

export const getConcertStageList = createAsyncThunk(
  "concert-stage/getConcertStageList",
  async (idConcertStage: string, { rejectWithValue }) => {
    try {
      let objConcertStageData: ConcertStageModel = await getConcertStageById(
        idConcertStage
      );
      if (!objConcertStageData) return rejectWithValue(null);

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
    resetConcertStage: (state) => {
      state.concertSelected = null;
      state.sectionsFilter = [];
      state.amountTicketFilter = 2;
      state.sectionSelected = null;
      state.dicSectionControler = {};
    },

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
      if (state.concertSelected != null) {
        state.sectionsFilter = state.concertSelected?.sections.filter(
          (el) => el.balanceTicket >= objFilterAction.amountTicket
        );
      }
      // Filter price ASC
      if (objFilterAction.isLowPrice)
        state.sectionsFilter.sort((a, b) => a.price - b.price);
      // Filter price DESC
      else state.sectionsFilter.sort((a, b) => b.price - a.price);
    },

    buildDictionarySections: (state) => {
      state.concertSelected?.sections.forEach((objSection) => {
        const objSectionControler: SectionControler = {
          key: objSection.key,
          isOpen: false,
          objSection: objSection,
        };
        state.dicSectionControler[objSection.key] = objSectionControler;
      });
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
      state.sectionSelected = { ...action.payload };
    },

    resetSelectionSelected: (state) => {
      state.sectionSelected = null;
    },
    updateSectionSelected: (state, action: PayloadAction<SectionSelect>) => {
      state.sectionSelected = { ...action.payload };
    },

    toggleSectionTooltip: (state, action: PayloadAction<string>) => {
      const secId = action.payload;

      if (state.dicSectionControler.hasOwnProperty(secId))
        state.dicSectionControler[secId].isOpen =
          !state.dicSectionControler[secId].isOpen;
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
          concertStageSlice.caseReducers.buildDictionarySections(state);
        }
      }
    );
    builder.addCase(
      getConcertStageList.rejected,
      (state, action: PayloadAction<any>) => {
        router.push(`/concert-list/ed-sheeran`);
        alert("Not found stage");

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
  toggleSectionTooltip,
  resetConcertStage,
} = concertStageSlice.actions;

export const ConcertStageSelector = (store: RootState): ConcertState =>
  store.concertStageSlice;
// export reducer
export default concertStageSlice.reducer;
