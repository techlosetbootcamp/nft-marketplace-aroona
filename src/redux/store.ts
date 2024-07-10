import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/collectionsSlice";
import collectionReducer from "./slices/collectionSlice";
import nftReducer from "./slices/nftDetailSlice";

export const store = configureStore({
  reducer: {
    colections: collectionsReducer,
    collection: collectionReducer,
    nft: nftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
