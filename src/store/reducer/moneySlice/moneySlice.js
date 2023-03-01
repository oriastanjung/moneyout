import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  total: 0,
  user: "",
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    test: (state) => {
      console.log("test");
      state.total = initialState.total
    },
    setUser : (state, action) => {
      state.user = action.payload;
    },
    addToPengeluaran : (state, action) => {
      // console.log("payload >>> ", action.payload)
      state.data = [action.payload, ...state.data]
      state.total = +action.payload.biaya + state.total

    }
  },
});

export const { test, setUser, addToPengeluaran } = moneySlice.actions;
export default moneySlice.reducer;
