import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from '../components/data/dataSlice';

const store = configureStore({
  reducer: {
    Data: dataSliceReducer,
  },
});

export default store;
