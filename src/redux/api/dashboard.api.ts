import { IStats } from "@/types/dashboard.types";
import { baseApi } from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStats: build.query<IStats, void>({
      query: () => ({ url: "/stats", method: "GET" }),
      providesTags: ["DASHBOARD"],
    }),
  }),
});
