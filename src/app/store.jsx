import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import productsSlice from '../features/products/productsSlice'

export const store = configureStore({
  // devTools:false,
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products:productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})