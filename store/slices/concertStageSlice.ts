import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import router from "next/router";
import { ConcertStageData } from "@/models/concertStageData.model";


// Mock data
import concertStageDataFromJSON from "../../data-mock/concert_stage_data_list.json";


interface ConcertState {
  objConcertStageData?: ConcertStageData;
  
}
const initialState: ConcertState = {
 
};

export const getConcertStageList = createAsyncThunk(
  "concert-stage/getConcertStageList",
  async (idConcertStage: string, { rejectWithValue }) => {
    try {

      // Mock data
      let indexStageData = Number(idConcertStage?.slice(idConcertStage.length - 1)) - 1;
      let objConcertStageData =
        indexStageData < concertStageDataFromJSON.length
          ? concertStageDataFromJSON[indexStageData]
          : null;
      
      if(objConcertStageData === null)
        return rejectWithValue(null);
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
    clearOrders: (state) => {
      // state.orders = [];
    },
  },
  extraReducers: (builder) => {

    builder.addCase(
      getConcertStageList.fulfilled,
      (state, action: PayloadAction<any>) => {

        if(action.payload != null){
          state.objConcertStageData = action.payload;
        }
      }
    );
    builder.addCase(
      getConcertStageList.rejected,
      (state, action: PayloadAction<any>) => {
        alert("Not found stage")
        router.push(`/concert-list/ed-sheeran`);
        throw action.payload;
      }
    );
  },
});

export const { clearOrders } = concertStageSlice.actions;

export const ConcertStageSelector = (store: RootState): ConcertState => store.concertStageSlice;
// export reducer
export default concertStageSlice.reducer;
