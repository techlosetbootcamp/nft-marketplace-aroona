import HeroData from "../components/hero/HeroSection";
import WorkData from "../components/workSection/WorkSection";
import SubscribeData from "../components/subscribeSection/SubscribeData";
import TrendingCollections from "../components/trendingSection/TrendingSection";
import Categories from "../components/browseCategories/BrowseCategories";
import DiscoverNfts from "../components/discoverNfts/DiscoverNfts";
import NftHighlight from "../components/nftHighlight/NftHighlight";

const HomePage = () => {
  return (
    <div className="App">
      <HeroData />
      <TrendingCollections />
      <Categories />
      <DiscoverNfts />
      <NftHighlight />
      <WorkData />
      <SubscribeData />
    </div>
  );
};

export default HomePage;
