import { Status } from "../constants/enums";

export type Schedule = {
  id: number;
  name: string;
  status: Status;
  date: Date;
};

export type ScheduleState = {
  list: Schedule[];
  selected?: Schedule;
};
