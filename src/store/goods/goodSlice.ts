import { createSlice } from '@reduxjs/toolkit';
import { IGoodState } from './good.type';
import { actions } from './goodActions';

const initialState: IGoodState = {
  list: [],
  currentDetail: null,
};

export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: actions,
});

export default goodSlice.reducer;
