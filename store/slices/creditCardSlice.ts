import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CreditCard } from "@/models/creditCard.model";
import { RootState } from "../store";
import * as apiCreditCardService from "@/services/apiCreditCard";

interface CreditCardState {
  creditCards: CreditCard[];
  creditCardSelected: CreditCard | null;
  securityCode: string;
}
const initialState: CreditCardState = {
  creditCards: [],
  creditCardSelected: null,
  securityCode: "",
};

export const loadCreditCards = createAsyncThunk("crditcard/get", async () => {
  try {
    return await apiCreditCardService.getCreditCard();
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const deleteCreditCard = createAsyncThunk(
  "crditcard/delete",
  async (id: string) => {
    try {
      return await apiCreditCardService.deleteCreditCard(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addCreditCard = createAsyncThunk(
  "crditcard/add",
  async (objCreditCardData: CreditCard) => {
    try {
      return await apiCreditCardService.addCreditCard(objCreditCardData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const editCreditCard = createAsyncThunk(
  "crditcard/edit",
  async (objCreditCardData: CreditCard) => {
    try {
      return await apiCreditCardService.editCreditCard(objCreditCardData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const creditCardSlice = createSlice({
  name: "credit-card",
  initialState: initialState,
  reducers: {
    resetAllCreditCard: (state) => {
      state.creditCards = [];
      state.creditCardSelected = null;
      state.securityCode = "";
    },
    setCreditCardSelected: (state, action: PayloadAction<CreditCard>) => {
      state.creditCardSelected = { ...action.payload };
    },
    resetCreditCardSelected: (state) => {
      state.creditCardSelected = null;
    },
    setSecurityCode: (state, action: PayloadAction<string>) => {
      state.securityCode = action.payload;
    },
    resetSecurityCode: (state) => {
      state.securityCode = "";
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
    builder.addCase(loadCreditCards.rejected, (state,action) => {
      // alert("FAIL LOAD CREDIT CARDS");
      throw action.payload;
    });

    builder.addCase(
      deleteCreditCard.fulfilled,
      (state, action: PayloadAction<string>) => {
        try {
          const idRemove: string = action.payload;
          let isSuccess: boolean = false;
          let objCreditCardData: CreditCard;
          for (var i = 0; i < state.creditCards.length; i++) {
            objCreditCardData = state.creditCards[i];
            if (objCreditCardData.id == idRemove) {
              state.creditCards.splice(i, 1);
              isSuccess = true;
              break;
            }
          }

          if (isSuccess) {
            // Fix delete selected card
            if (state.creditCardSelected?.id === idRemove) {
              state.creditCardSelected = null;
            }
            alert("SUCCESS REMOVE CREDIT CARDS");
          } else {
            alert("FAIL REMOVE CREDIT CARDS");
          }
        } catch (error) {
          alert("FAIL REMOVE CREDIT CARDS");
        }
      }
    );
    builder.addCase(deleteCreditCard.rejected, (state,action) => {
      alert("FAIL REMOVE CREDIT CARDS");
      throw action;
    });

    builder.addCase(
      addCreditCard.fulfilled,
      (state, action: PayloadAction<CreditCard>) => {
        try {
          let objCreditCardUpdate: CreditCard = action.payload;
          // Build index
          objCreditCardUpdate.id = (state.creditCards.length + 1).toString();
          // Add
          state.creditCards.push(objCreditCardUpdate);

          // alert("SUCCESS ADD CREDIT CARDS");
        } catch (error) {
          alert("FAIL ADD CREDIT CARDS");
          throw error;
        }
      }
    );
    builder.addCase(addCreditCard.rejected, (state,action) => {
      alert("FAIL ADD CREDIT CARDS");
      throw action;
    });

    builder.addCase(
      editCreditCard.fulfilled,
      (state, action: PayloadAction<CreditCard>) => {
        try {
          let objCreditCardDataUpdate: CreditCard = action.payload;

          let isSuccess: boolean = false;
          for (var i = 0; i < state.creditCards.length; i++) {
            if (state.creditCards[i].id === objCreditCardDataUpdate.id) {
              state.creditCards[i] = objCreditCardDataUpdate;
              isSuccess = true;
              break;
            }
          }

          if (isSuccess) {
            // creditCardSlice.caseReducers.setCreditCardSelected(state,objCreditCardDataUpdate);
            state.creditCardSelected = { ...objCreditCardDataUpdate };
            alert("SUCCESS EDIT CREDIT CARDS");
          } else {
            alert("FAIL EDIT CREDIT CARDS");
          }
        } catch (error) {
          alert("FAIL EDIT CREDIT CARDS");
          throw error;
        }
      }
    );
    builder.addCase(editCreditCard.rejected, (state, action) => {
      alert("FAIL EDIT CREDIT CARDS");
      throw action;
    });
  },
});

export const {
  setCreditCardSelected,
  resetCreditCardSelected,
  setSecurityCode,
  resetSecurityCode,
  resetAllCreditCard,
} = creditCardSlice.actions;

export const creditCardSelector = (store: RootState): CreditCardState =>
  store.creditCard;
// export reducer
export default creditCardSlice.reducer;
function rejectWithValue(error: unknown): any {
  throw new Error("Function not implemented.");
}
