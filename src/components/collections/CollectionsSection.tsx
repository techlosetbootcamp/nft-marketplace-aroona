import React from "react";
import useFetchCollections from "./useFetchCollections";
import { Collections } from "../../types/types";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const CollectionsDetails: React.FC = () => {
  const { collections, status, error } = useFetchCollections();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(0, 10);

  return (
    <>
      <div className="container mx-auto p-4 bg-[#2B2B2B]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleCollections.map((collections: Collections) => (
            <div
              key={collections.collection}
              className="bg-[#3B3B3B]  shadow-md rounded-lg overflow-hidden h-[470px] lg:h-[450px]"
            >
              <Link
                to={`/collection/${collections?.collection}`}
                key={collections?.collection}
              >
                {collections.image_url && (
                  <img
                    src={collections?.image_url}
                    alt={collections?.name}
                    className="w-full h-80 object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <Link
                  to={`/collection/${collections?.collection}`}
                  key={collections?.category}
                >
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    @{collections?.collection}
                  </h2>
                </Link>
                <Link
                  to={`/collection/${collections?.collection}`}
                  key={collections?.name}
                  className="text-primary-btn-color text-sm hover:underline text-[#a259ff]"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionsDetails;
