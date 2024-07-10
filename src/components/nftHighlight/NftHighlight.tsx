import { useAppSelector } from "../../hooks/hooks";
import Eye from "../../assets/icons/Eye.svg";
import Loader from "../loader/Loader";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

export default function NftHighlight() {
  const { collections, status, error } = useAppSelector(
    (state: RootState) => state.colections
  );
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(0, 1);

  return (
    <div>
      {visibleCollections.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              backgroundImage: `url(${item.image_url})`,
            }}
            className="bg-cover bg-no-repeat z-0 w-full mt-0"
          >
            <div className="w-full h-[640px] flex-col justify-start items-center inline-flex">
              <div className="w-full pt-[360px] pb-[60px] bg-gradient-to-b z-10 from-purple-200/60 to-purple-700/60 justify-center items-end inline-flex mix-blend-multiplier">
                <div className="h-[220px] w-full p-8 md:p-10 justify-start items-end flex">
                  <div className="z-50 md:ps-[80px] lg:ps-[115px] flex-col justify-start items-start gap-[30px] inline-flex">
                    <div className="px-5 py-2.5 bg-neutral-700 rounded-[20px] justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <div className=" w-6 h-6 justify-center items-center flex">
                          <img
                            className="w-6 h-6 rounded-[120px]"
                            src={item.image_url}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-white z-50  text-base font-normal work-sans leading-snug">
                        lilpudgys
                      </div>
                    </div>
                    <div className="z-50 text-white text-[38px] lg:text-[51px] font-semibold work-sans capitalize leading-[56.10px]">
                      {item.name}
                    </div>
                    <button
                      type="button"
                      className="w-[315px] md:w-[198px] z-50 h-[60px] px-[50px] py-[22px] bg-white rounded-[20px] justify-center items-center gap-3 inline-flex"
                    >
                      <div className="w-5 h-5 relative">
                        <img src={Eye} alt="" />
                      </div>
                      <Link
                        to={`/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/nft/8877`}
                      >
                        <div className="text-center text-zinc-800 text-base font-semibold work-sans leading-snug">
                          See NFT
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
