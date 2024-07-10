import { RootState } from "../../redux/store";
import { fetchCollection } from "../../redux/slices/collectionSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useFetchCollection = (collectionSlug: string) => {
  const dispatch = useAppDispatch();
  const { nfts, status, error } = useSelector(
    (state: RootState) => state.collection
  );

  useEffect(() => {
    if (collectionSlug) {
      dispatch(fetchCollection(collectionSlug));
    }
  }, [dispatch, collectionSlug]);

  return { nfts, status, error };
};

export default useFetchCollection;
