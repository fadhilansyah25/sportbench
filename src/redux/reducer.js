import { createSlice } from "@reduxjs/toolkit";

let currentUser = null;

const authUser = createSlice({
  name: "authUser",
  initialState: {
    currentUser: currentUser,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

export const { setCurrentUser } = authUser.actions;
export const reducer = authUser.reducer;
