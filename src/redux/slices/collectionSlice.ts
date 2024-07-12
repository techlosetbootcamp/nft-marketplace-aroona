import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CollectionState } from "../../types/types";
import api from "../../utils/axiosInstance/api";

const initialState: CollectionState = {
  nfts: [],
  status: "idle",
  error: null,
};

export const fetchCollection = createAsyncThunk(
  "collection/fetchCollection",
  async (collectionSlug: string) => {
    const response = await api.get(`/collection/${collectionSlug}/nfts`);
    return response.data.nfts;
  }
);

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nfts = action.payload;
      })
      .addCase(fetchCollection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default collectionSlice.reducer;
