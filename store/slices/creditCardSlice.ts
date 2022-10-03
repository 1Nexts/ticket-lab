import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CreditCard } from "@/models/creditCard.model";
import { RootState } from "../store";
import * as apiCreditCardService from "@/services/apiCreditCard";

interface CreditCardState {
  creditCards: CreditCard[];
  creditCardSelected: CreditCard | null;
}
const initialState: CreditCardState = {
  creditCards: [],
  creditCardSelected: null,
};

export const loadCreditCards = createAsyncThunk("crditcard/get", async () => {
  return await apiCreditCardService.getCreditCard();
});
export const deleteCreditCard = createAsyncThunk(
  "crditcard/delete",
  async (id: string) => {
    return await apiCreditCardService.deleteCreditCard(id);
  }
);
export const addCreditCard = createAsyncThunk(
  "crditcard/add",
  async (objCreditCardData: CreditCard) => {
    return await apiCreditCardService.addCreditCard(objCreditCardData);
  }
);
export const editCreditCard = createAsyncThunk(
  "crditcard/edit",
  async (objCreditCardData: CreditCard) => {
    return await apiCreditCardService.editCreditCard(objCreditCardData);
  }
);

const creditCardSlice = createSlice({
  name: "credit-card",
  initialState: initialState,
  reducers: {
    setCreditCardSelected: (state, action: PayloadAction<CreditCard>) => {
      state.creditCardSelected = { ...action.payload };
    },
    resetCreditCardSelected: (state) => {
      state.creditCardSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadCreditCards.fulfilled,
      (state, action: PayloadAction<CreditCard[] | null>) => {
        if (action.payload != null) {
          state.creditCards = action.payload;
        }
      }
    );
    builder.addCase(loadCreditCards.rejected, () => {
      alert("FAIL LOAD CREDIT CARDS");
    });

   
  },
});

export const { setCreditCardSelected,resetCreditCardSelected } = creditCardSlice.actions;

export const creditCardSelector = (store: RootState): CreditCardState =>
  store.creditCard;
// export reducer
export default creditCardSlice.reducer;
