import { createSlice } from "@reduxjs/toolkit";

const initalColor = { colorValue: "blue.600" };
export const colorSlice = createSlice({
  name: "color",
  initialState: { value: initalColor },
  reducers: {
    changeColor: (state) => {
      state.value = { colorValue: "red.600" };
    },
    resetColor: (state) => {
      state.value = initalColor;
    },
  },
});

export const { changeColor, resetColor } = colorSlice.actions;

export default colorSlice.reducer;
