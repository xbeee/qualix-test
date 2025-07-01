import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {Request, RequestFormData} from './types.ts';
import { loadState } from '../../shared/lib/localStorage';

const initialState: Request[] = loadState() || [];

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<RequestFormData>) => {
      const newRequest: Request = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      state.push(newRequest);
    },
    updateRequest: (state, action: PayloadAction<Request>) => {
      const index = state.findIndex(req => req.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteRequest: (state, action: PayloadAction<string>) => {
      return state.filter(req => req.id !== action.payload);
    },
  },
});

export const { addRequest, updateRequest, deleteRequest } = requestsSlice.actions;
export default requestsSlice.reducer;