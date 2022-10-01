import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import router from "next/router";
import { ConcertStageData, Section } from "@/models/concertStageData.model";

// Mock data
import concertStageDataFromJSON from "../../data-mock/concert_stage_data_list.json";

interface ConcertState {
  objConcertStageData: ConcertStageData;
  sectionsFilter: Section[];
}
const initialState: ConcertState = {
  objConcertStageData: {
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
  // sections: [],
  sectionsFilter: [],
};

type FilterAction = {
  amountTicket: number;
  isLowPrice: boolean;
};

export const getConcertStageList = createAsyncThunk(
  "concert-stage/getConcertStageList",
  async (idConcertStage: string, { rejectWithValue }) => {
    try {
      // Mock data
      let indexStageData =
        Number(idConcertStage?.slice(idConcertStage.length - 1)) - 1;
      let objConcertStageData =
        indexStageData < concertStageDataFromJSON.length
          ? concertStageDataFromJSON[indexStageData]
          : null;

      console.log("getConcertStageList = ", objConcertStageData);

      if (objConcertStageData === null) return rejectWithValue(null);

      return objConcertStageData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const concertStageSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    resetFilter: (state) => {
      concertStageSlice.caseReducers.filterConcertStage(state);
    },

    filterConcertStage: (state, action?: PayloadAction<FilterAction>) => {
      let objFilterAction: FilterAction =
        action?.payload != null
          ? action.payload
          : {
              amountTicket: 2,
              isLowPrice: true,
            };

      // Filter balance ticket
      state.sectionsFilter = state.objConcertStageData?.sections.filter(
        (el) => el.balanceTicket >= objFilterAction.amountTicket
        // el.balanceTicket === 0
      );

      // Filter price ASC
      if (objFilterAction.isLowPrice) {
        state.sectionsFilter.sort((a, b) => a.price - b.price);
      } else {
        // Filter price DESC
        state.sectionsFilter.sort((a, b) => b.price - a.price);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getConcertStageList.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload != null) {
          state.objConcertStageData = action.payload;

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

export const { filterConcertStage } = concertStageSlice.actions;

export const ConcertStageSelector = (store: RootState): ConcertState =>
  store.concertStageSlice;
// export reducer
export default concertStageSlice.reducer;
