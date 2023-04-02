import { createSlice } from "@reduxjs/toolkit";

// initialState is the state at which the app will start with.
const initialState = {
  isCartOpen: false,
  cart: [],
  books: [],
};

// function that updates the global state
export const cartSlice = createSlice({
  name: "cart",
  // pass initial state to constructor
  // and when state changes, pass the action into the payload
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },

    addToCart: (state, action) => {
      // console.log(action);
      state.cart = [...state.cart, action.payload];
    },

    removeFromCart: (state, action) => {
      // console.log(action);
      // anytime we want to remove from the cart, we filter out everything or keep all the items that are not equal to the ID that we are passing in. So the ID to be removed is passed in the action and everything else is left in the cart.
      state.cart = state.cart.filter((book) => book.item.id !== action.payload.id);
    },

    // map through the entire cart to figure out which item to increment/update.
    increaseCount: (state, action) => {
      state.cart = state.cart.map((book) => {
        if (book.item.id === action.payload.id) {
          // let newBook = { ...book };
          // newBook.item.count = newBook.item.count + 1;
          book.item.count = book.item.count + 1;
          // return {...newBook};
        }
        return book;
      });
    },

    // map through the entire cart to figure out item to decrement
    // to avoid negative numbers, ensure item is > 1.
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((book) => {
        if (book.item.id === action.payload.id && book.item.count > 1) {
          book.item.count--;
        }
        return book;
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
  setBooks,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

// with @reduxjs/toolkit, there is no need to set types folder, actions folder, reducers etc.
// It reduces the amount of boilerplate needed
