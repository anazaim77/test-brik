import { Config } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGood } from './good.type';

export const goodQuery = createApi({
  reducerPath: 'goodQuery',
  baseQuery: fetchBaseQuery({ baseUrl: Config.BASE_URL }),
  endpoints: builder => ({
    getAllGoods: builder.query<IGood[], any | undefined>({
      query: () => `/goods`,
    }),
  }),
});

export const { useGetAllGoodsQuery } = goodQuery;
