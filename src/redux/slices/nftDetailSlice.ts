import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NftProps, initialStateProps } from "../../types/types";
import api from "../../utils/axiosInstance/api";

const initialState: initialStateProps = {
  nft: null,
  status: "idle",
  error: null,
};

export const fetchNft = createAsyncThunk<
  NftProps,
  { chain: string; address: string; identifier: string }
>("nft/fetchNft", async ({ identifier, chain, address }) => {
  const response = await api.get(
    `chain/${chain}/contract/${address}/nfts/${identifier}`
  );
  return response.data.nft;
});

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNft.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNft.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nft = action.payload;
      })
      .addCase(fetchNft.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default nftSlice.reducer;
