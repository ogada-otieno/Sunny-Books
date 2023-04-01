import { createSlice } from "@reduxjs/toolkit";

// initialState is the state at which the app will start with.
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

// function that updates the global state
export const cartSlice = createSlice({
  name: "cart",
  // pass initial state to constructor
  // and when state changes, pass the action into the payload
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    removeFromCart: (state, action) => {
      // anytime we want to remove from the cart, we filter out everything or keep all the items that are not equal to the ID that we are passing in. So the ID to be removed is passed in the action and everything else is left in the cart.
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // map through the entire cart to figure out which item to increment/update.
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    // map through the entire cart to figure out item to decrement
    // to avoid negative numbers, ensure item is > 1.
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    // action to set open our cart
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

// export all the actions/states
export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

// with @reduxjs/toolkit, there is no need to set types folder, actions folder, reducers etc.
// It reduces the amount of boilerplate needed
