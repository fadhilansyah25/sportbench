import { createSlice } from "@reduxjs/toolkit";

let currentUser = null;
let checkoutProduct = null;

const authUser = createSlice({
  name: "authUser",
  initialState: {
    currentUser: currentUser,
    checkoutProduct: checkoutProduct
  },
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    setCheckout: (state, action) => {
      return {
        ...state,
        checkoutProduct: {...checkoutProduct, ...action.payload}
      }
    }
  },
});

export const { setCurrentUser, setCheckout } = authUser.actions;
export const reducer = authUser.reducer;
