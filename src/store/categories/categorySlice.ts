import { createSlice } from '@reduxjs/toolkit';
import { ICategoryState } from './category.type';
import { actions } from './categoryActions';

const initialState: ICategoryState = {
  list: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: actions,
});

export default categorySlice.reducer;
