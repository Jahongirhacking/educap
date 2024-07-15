import ILang from "@/types/ILang";
import { languageSelect } from "@/utils/staticVariables";
import { createSlice } from "@reduxjs/toolkit";

const initialState = languageSelect[0];

const languageSlice = createSlice({
  name: "language-slice",
  initialState,
  reducers: {
    onChange: (_, action: { payload: ILang }) => {
      return languageSelect.find((el) => el.value === action.payload.value);
    },
    initialize: () => {
      return initialState;
    },
  },
});

export const { onChange, initialize } = languageSlice.actions;

export default languageSlice.reducer;
