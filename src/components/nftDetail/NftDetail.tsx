import React from "react";
import useFetchNft from "./useFetchNft";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const NftDetail: React.FC = () => {
  const { chain, address, identifier } = useParams<{
    chain: string;
    address: string;
    identifier: string;
  }>();
  const { nft, status, error } = useFetchNft(
    chain || "",
    address || "",
    identifier || ""
  );

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <img
          className="w-full h-[320px] md:h-[420px] lg:h-[560] top-0 left-0 right-0 bottom-5 object-cover border-0"
          src={nft?.image_url}
          alt={nft?.collection}
        />
        <div className=" px-[30px] py-[40px]  md:px-[72px] lg:px-[115px]">
          <div className="relative flex justify-center md:justify-start mx-auto max-w-[1050px] ">
            <div className="flex flex-col gap-[20px] md:gap-[30px] w-full max-w-[365px] lg:max-w-[605px]">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-white text-[28px] md:text-[38px] lg:text-[51px] font-semibold">
                  {nft?.name}
                </h2>
                <span className="text-white text-caption text-[16px] lg:text-[22px] ">
                  Minted on {nft?.updated_at?.split("T")[0]}
                </span>
              </div>

              <div className="flex flex-col gap-[10px]">
                <span className="text-white font-mono text-[16px] text-caption md:text-[22px]">
                  Created By
                </span>

                <div className="flex items-center gap-[12px]">
                  <span className="text-white">@</span>
                  <span className="text-white text-[16px] lg:text-[22px]">
                    {" "}
                    {"Artist"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <span className=" text-white font-mono text-[16px] text-caption md:text-[22px]">
                  Description
                </span>
                <div className="flex items-center gap-[12px]">
                  <p className="text-white text-[16px] lg:text-[22px]">
                    {nft?.description || "no description found"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <span className="text-white font-mono text-[16px] text-caption md:text-[22px]">
                  Details
                </span>
                <div className="flex items-center gap-[10px]">
                  <span className="text-white">@</span>
                  <a
                    href={nft?.opensea_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[16px] lg:text-[22px]"
                  >
                    View on OpenSea
                  </a>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span className="text-white">@</span>
                  <span className="text-white text-[16px] lg:text-[22px]">
                    View Orignal
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <span className=" text-white font-mono text-[16px] text-caption md:text-[22px]">
                  Tags
                </span>

                <div className="flex flex-col lg:flex-row gap-[20px]">
                  <div className="text-white py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                    Animation
                  </div>
                  <div className="text-white py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                    Explore
                  </div>
                  <div className="text-white py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                    Creativity
                  </div>
                  <div className="text-white py-[12px] px-[30px] bg-bgSecondary capitalize w-fit rounded-[20px]">
                    NFT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default NftDetail;
