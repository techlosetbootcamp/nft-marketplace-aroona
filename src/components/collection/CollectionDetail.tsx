import React from "react";
import useFetchCollection from "./useFetchCollection";
import useFetchCollections from "../collections/useFetchCollections";
import { Collection, Collections, Contract } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const CollectionDetails: React.FC = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const { nfts, status, error } = useFetchCollection(collectionSlug || "");
  const { collections } = useFetchCollections();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(0, 1);
  const visibleCollection = nfts.slice(2, 12);

  const chain = visibleCollections.map((collections: Collections) =>
    collections.contracts.map((i: Contract) => i.chain)
  );

  return (
    <>
      <div className="container mx-auto p-4 bg-[#2B2B2B]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleCollection.map((item: Collection) => (
            <div
              key={item.collection}
              className="bg-[#3B3B3B]  shadow-md rounded-lg overflow-hidden"
            >
              {item?.image_url && (
                <Link
                  to={`/${chain}/${item?.contract}/nft/${item?.identifier}`}
                  key={item?.identifier}
                >
                  <div className="relative pb-[56.25%] overflow-hidden">
                    <img
                      src={item?.image_url}
                      alt={item?.opensea_url}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Link>
              )}
              <div className="p-4">
                <Link
                  to={`/${chain}/${item?.contract}/nft/${item?.identifier}`}
                  key={item?.identifier}
                >
                  <div className=" h-fit w-full min-w-[315px] md:w-[330px] max-w-[315px] md:max-w-[330px] bg-bgPrimary rounded-b-[20px] p-[20px] pb-[25px] md:px-[30px]">
                    <div className="flex flex-col gap-[25px]">
                      <div className="flex flex-col gap-[5px]">
                        <h5 className="text-white text-[22px] font-semibold">
                          {item?.name}
                        </h5>

                        <div className="flex gap-[10px]">
                          <span className="text-white">@</span>
                          <span className="text-white text-[16px] font-mono">
                            {" "}
                            Artist{" "}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-[8px]">
                          <span className="text-white text-caption text-[12px]">
                            Price
                          </span>
                          <span className="text-white text-[12px] md:text-[16px]">
                            1.64 ETH
                          </span>
                        </div>
                        <div className="flex flex-col gap-[8px] text-right">
                          <span className="text-white text-caption text-[12px]">
                            Higest Bid
                          </span>
                          <span className="text-white text-[12px] md:text-[16px]">
                            0.33 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionDetails;
