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
    test: () => {
      console.log("test");
    },
  },
});

export const { test } = moneySlice.actions;
export default moneySlice;
