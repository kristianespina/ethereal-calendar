import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ScheduleState, Schedule } from "../../types/schedule";

// Define the initial state using that type
const initialState: ScheduleState = {
  list: [],
  selected: undefined,
  filter: "",
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateSchedule: (state, action: PayloadAction<Schedule[]>) => {
      return {
        ...state,
        list: action.payload,
      };
    },
    select: (state, action: PayloadAction<number>) => {
      state.selected = state.list.find((el) => el.id === action.payload);
    },
    clearSelected: (state) => {
      state.selected = undefined;
    },
    removeById: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
    edit: (state, action: PayloadAction<Schedule>) => {
      const _id = action.payload.id;
      const targetIndex = state.list.findIndex((el) => el.id === _id);
      state.list[targetIndex] = action.payload;
    },
    add: (state, action: PayloadAction<Schedule>) => {
      state.list.unshift(action.payload);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  updateSchedule,
  select,
  clearSelected,
  removeById,
  edit,
  add,
  setFilter,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
