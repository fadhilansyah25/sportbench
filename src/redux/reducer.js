import { createSlice } from "@reduxjs/toolkit";

let currentUser = null;
let pageProduct = {};

const authUser = createSlice({
  name: "authUser",
  initialState: {
    currentUser: currentUser,
    pageProduct
  },
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    addDataProduct: (state, action) => {
      return {
        ...state,
        pageProduct: {
          ...pageProduct,
          [action.payload.id]: action.payload.data
        }
      }
    }
  },
});

export const { setCurrentUser } = authUser.actions;
export const reducer = authUser.reducer;
