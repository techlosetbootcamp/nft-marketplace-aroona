import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { fetchCollections } from "../../redux/slices/collectionsSlice";

const useFetchCollections = () => {
  const dispatch = useAppDispatch();
  const { collections, status, error } = useSelector(
    (state: RootState) => state.colections
  );

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return { collections, status, error };
};

export default useFetchCollections;
