import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import Loader from "../loader/Loader";

const TrendCard: React.FC = () => {
  const { collections, status, error } = useAppSelector(
    (state: RootState) => state.colections
  );

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(1, 4);

  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto gap-6 p-4">
        {visibleCollections.map((item, i) => {
          return (
            <div className={`${i}`}>
              <div className="w-[325px] h-[505px] sm:w-[362px] sm:h-[525px] ls:w-[330px] rounded-[20px] flex flex-col justify-start items-start gap-[15px] bg-[#2B2B2B]">
                <div className="w-[325px] h-[425px] sm:w-[362px] sm:h-[445px] ls:w-[330px] flex flex-col gap-[15px]">
                  <div className="w-[315px] h-[315px] sm:w-[362px] sm:h-[330px] ls:w-[330px] rounded-[20px]">
                    <Link to={`/collection/${item.collection}`}>
                      <img
                        src={item.image_url}
                        alt={item.collection.slice(0, 10)}
                        className="w-[315px] h-[315px] sm:w-[362px] sm:h-[330px] ls:w-[330px] rounded-[20px] object-cover"
                      />
                    </Link>
                  </div>
                  <div className="w-[315px] h-[95px] sm:w-[362px] sm:h-[100px] ls:w-[330px] items-center justify-center gap-[15px] inline-flex">
                    <div className="w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] ls:w-[100px] ls:h-[100px] rounded-[20px]">
                      <Link to={`/collection/${item.collection}`}>
                        <img
                          className="w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] ls:w-[100px] ls:h-[100px] rounded-[20px]"
                          src={item.image_url}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] ls:w-[100px] ls:h-[100px] rounded-[20px]">
                      <Link to={`/collection/${item.collection}`}>
                        <img
                          className="w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] ls:w-[100px] ls:h-[100px] rounded-[20px]"
                          src={item.image_url}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] ls:w-[100px] ls:h-[100px] px-[14px] py-8 bg-purple-500 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                      <Link to={`/collection/${item.collection}`}>
                        <div className="text-center  text-[22px] font-bold font-space-mono">
                          1025+
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-[315px] h-[65px] sm:w-[362px] ls:w-[330px]  sm:h-[65px] flex flex-col justify-start items-start gap-2.5">
                  <div className=" text-[22px] text-white font-semibold font-work-sans leading-[30.8px]">
                    {item.name}
                  </div>
                  <div className="h-[24px] rounded-[20px] gap-3 inline-flex flex-row">
                    <div className="w-6 h-6 gap-2.5">
                      <img
                        className="w-6 h-6 rounded-[100px]"
                        src={item.image_url}
                        alt=""
                      />
                    </div>
                    <div className=" text-[16px] text-white font-normal font-work-sans leading-[22.4px]">
                      {item.collection}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendCard;
