import { PayloadAction } from '@reduxjs/toolkit';
import { IGood, IGoodState } from './good.type';
import { goodSlice } from './goodSlice';

export const actions = {
  saveList: (state: IGoodState, { payload }: PayloadAction<Array<IGood>>) => {
    state.list = payload;
  },
  saveDetail: (state: IGoodState, { payload }: PayloadAction<IGood>) => {
    state.currentDetail = payload;
  },
};

export default goodSlice.actions;
