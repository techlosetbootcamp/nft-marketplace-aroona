import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CollectionsState } from "../../types/types";
import api from "../../axiosInstance/api";

const initialState: CollectionsState = {
  collections: [],
  status: "idle",
  error: null,
};

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async () => {
    const response = await api.get("/collections", {
      params: {
        chain: "ethereum",
        order_by: "seven_day_volume",
        limit: 6,
      },
    });
    return response.data.collections;
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default collectionsSlice.reducer;
