import { RootState } from "../../redux/store";
import { fetchNft } from "../../redux/slices/nftDetailSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useFetchNft = (chain: string, address: string, identifier: string) => {
  const dispatch = useAppDispatch();
  const { nft, status, error } = useSelector((state: RootState) => state.nft);

  useEffect(() => {
    if (chain && address && identifier) {
      dispatch(fetchNft({ chain, address, identifier }));
    }
  }, [dispatch, chain, address, identifier]);

  return { nft, status, error };
};

export default useFetchNft;
