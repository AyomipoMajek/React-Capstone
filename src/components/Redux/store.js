import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from '../data/dataSlice';

const store = configureStore({
  reducer: {
    Data: dataSliceReducer,
  },
});

export default store;
