import { configureStore } from '@reduxjs/toolkit';
import requestReducer from '../entities/request/slice';

export const store = configureStore({
  reducer: {
    requests: requestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;