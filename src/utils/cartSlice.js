import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
      name:'Cart',
      initialState:{
        items:[]
      },
      reducers:{
          addItem:(state,action) => {
              state.items.push(action.payload);
          },
          removeitem:(state,action) => {
             state.items.pop();
          },
          clearCart:(state) => {
             state.items.length = 0;
          }
      }  
})

export const {addItem,removeitem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;