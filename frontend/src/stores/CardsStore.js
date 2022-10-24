import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    setCardsState: (state, action) => {
      state = action.payload;
      return state;
    },
    addCardsState: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});

export const { setCardsState } = cardSlice.actions;

export const CardsStore = configureStore({
  reducer: {
    cards: cardSlice.reducer
  }
});
