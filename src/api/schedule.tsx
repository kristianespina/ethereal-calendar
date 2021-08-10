import axios from "axios";
import { Schedule } from "../types/schedule";

const API_URL = process.env.REACT_APP_API_HOST;

export const getSchedule = async () => {
  return await axios.get(`${API_URL}/schedule`);
};

export const addSchedule = async (schedule: Partial<Schedule>) => {
  return await axios.post(`${API_URL}/schedule`, schedule);
};

export const editSchedule = async (schedule: Schedule) => {
  return await axios.patch(`${API_URL}/schedule/${schedule.id}`, schedule);
};

export const deleteSchedule = async (schedule: Schedule) => {
  return await axios.delete(`${API_URL}/schedule/${schedule.id}`);
};
