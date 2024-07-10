import Avatar from "../../assets/icons/HighlightedNFTAvatarPlaceholder.svg";
import Rocket from "../../assets/icons/RocketLaunch.svg";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const HeroData = () => {
  const { collections, status, error } = useAppSelector(
    (state: RootState) => state.colections
  );

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(5, 6);

  return (
    <>
      {visibleCollections.map((item, i) => {
        return (
          <section
            key={i}
            className="flex flex-col md:flex-row justify-between items-center px-4 py-8 md:px-16 md:py-16 lg:px-24 lg:py-16"
          >
            <div className="flex flex-col items-start gap-6 w-full md:w-1/2 lg:w-1/3 mb-10 md:mb-0 md:mr-10">
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold capitalize">
                  Discover digital art & Collect NFTs
                </h1>
                <p className="text-white text-base md:text-lg lg:text-xl">
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <button className="flex items-center justify-center w-full md:w-auto bg-purple-600 text-white py-3 px-6 rounded-lg text-base md:text-lg lg:text-xl">
                <img src={Rocket} alt="Rocket" className="w-5 h-5 mr-2" />
                <span>Get Started</span>
              </button>

              <div className="flex justify-center md:justify-start mt-6 text-white">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">240k+</h3>
                  <p className="text-lg">Total Sale</p>
                </div>
                <div className="text-center md:text-left ml-8 md:ml-12">
                  <h3 className="text-2xl font-semibold">100k+</h3>
                  <p className="text-lg">Auction</p>
                </div>
                <div className="text-center md:text-left ml-8 md:ml-12">
                  <h3 className="text-2xl font-semibold">240k+</h3>
                  <p className="text-lg">Artist</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-2/3 lg:w-2/3 gap-0">
              <Link
                to={`/collection/${item?.collection}`}
                key={item?.collection}
              >
                <div
                  className="w-[400px] md:h-63 bg-center bg-cover overflow-hidden h-[400px] lg:h-[450px]"
                  style={{
                    backgroundImage: `url(${item.image_url})`,
                  }}
                ></div>
              </Link>
              <div className="flex flex-col justify-center items-start w-[400px] bg-[#3B3B3B] p-6 rounded-b-lg">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
                  {item.collection}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="w-8 h-8 bg-center bg-cover rounded-full"
                    style={{ backgroundImage: `url(${Avatar})` }}
                  ></div>
                  <Link
                    to={`/collection/${item?.collection}`}
                    key={item?.category}
                  >
                    <span className="text-white text-base md:text-lg">
                      {item.name}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default HeroData;
