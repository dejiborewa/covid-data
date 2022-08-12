import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covidnigeria.herokuapp.com",
  }),

  endpoints: (build) => ({
    getData: build.query({
      query: () => "/api",
    }),
  }),
});

export const { useGetDataQuery } = api;
