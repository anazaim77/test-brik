import { PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ICategoryState } from './category.type';
import { categorySlice } from './categorySlice';

export const actions = {
  saveList: (
    state: ICategoryState,
    { payload }: PayloadAction<Array<ICategory>>,
  ) => {
    state.list = payload;
  },
};

export default categorySlice.actions;
