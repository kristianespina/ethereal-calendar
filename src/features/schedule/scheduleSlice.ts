import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ScheduleState, Schedule } from "../../types/schedule";

// Define the initial state using that type
const initialState: ScheduleState = {
  list: [],
  selected: undefined,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateSchedule: (state, action: PayloadAction<Schedule[]>) => {
      return {
        ...state,
        list: action.payload,
        selected: undefined, // Set selected back to undefined
      };
    },
    select: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
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
  },
});

export const { updateSchedule, select, removeById, edit, add } =
  scheduleSlice.actions;

export default scheduleSlice.reducer;
