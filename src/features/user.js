import { createSlice } from "@reduxjs/toolkit";

const initailSateValue = { name: "", descriprtion: "This", price: 0 };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initailSateValue },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = initailSateValue;
    },
  },
});

// Exporting the diffrent actions
export const { change, reset } = userSlice.actions;

export default userSlice.reducer;
