import { categoryReducer, goodReducer } from '@/store';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    goods: goodReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
