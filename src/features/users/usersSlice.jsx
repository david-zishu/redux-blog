import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Zishan" },
  { id: "1", name: "Mike" },
  { id: "2", name: "Tyson" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
