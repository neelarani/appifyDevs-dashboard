import { baseApi } from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStats: build.query<any, void>({ query: () => "/stats" }),
  }),
});
