import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    sum: 0,
    count: 0,
    arr: []
}
const cartSlice = createSlice(
    {
        name: "toCart",
        initialState,
        reducers:{
            setAddToCart: (state, action) =>{
                const { item, quantity } = action.payload;
                const isItemInCart = state.arr.findIndex(product => product.item.name === item.name); 
                // מחזירה -1 אם הערך לא נמצא, אם כן את מספר האינדקס של המערך

                if (isItemInCart !== -1) {
                    state.arr[isItemInCart].quantity += quantity;
                    console.log(isItemInCart);
                } else {
                    state.arr.push({ item, quantity });
                    console.log(isItemInCart);
                    console.log(item.name);
                }
                state.sum += action.payload.item.Price * action.payload.quantity;
                state.count = state.arr.reduce(
                    (total, currentItem) => total + currentItem.quantity,
                    0
                  );
            },
            setCount: () => {
            },
            setRemoveFromCart: (state, action) => {
                const indexToRemove = state.arr.findIndex(product => product.item.name === action.payload.name);
                if (indexToRemove !== -1) {
                    state.sum -= state.arr[indexToRemove].item.Price * state.arr[indexToRemove].quantity;
                    state.arr.splice(indexToRemove, 1);
                    state.count = state.arr.reduce(
                        (total, currentItem) => total + currentItem.quantity,
                        0
                      );
                }
            }
        }
    }
)

export const {setAddToCart, setCount, setRemoveFromCart} = cartSlice.actions;
export const toCart = (state) => state.toCart.arr;
export const toCartSum = (state) => state.toCart.sum;
export const toCartCount = (state) => state.toCart.count;
export default cartSlice.reducer;
