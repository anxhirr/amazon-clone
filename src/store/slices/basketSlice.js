import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      state.items.splice(itemIndex, 1)
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state) => state.basket.items
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer
