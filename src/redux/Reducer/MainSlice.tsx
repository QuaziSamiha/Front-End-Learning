import { IMainState } from "@/interfaces/reduxInterfaces/mainSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IMainState = {
  search: false,
  add: false,
  toggle: false,
  val: {},
};

export const MainSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleInitialSearch: (state) => {
      state.search = true;
    },
    handleInitialSearchStop: (state) => {
      state.search = false;
    },
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    handleAddModalClose: (state) => {
      state.add = false;
    },
    handleToggle: (state) => {
      state.toggle = !state.toggle;
    },
    rowValue: (state, action) => {
      state.val = action.payload; // Updating Redux state with the rowData
    },
  },
});

export const {
  handleInitialSearch,
  handleInitialSearchStop,
  handleAddModalOpen,
  handleAddModalClose,
  handleToggle,
  rowValue,
} = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: IMainState;
};
