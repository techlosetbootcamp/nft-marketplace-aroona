export type Collections = {
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: Contract[];
};

export type Contract = {
  address: string;
  chain: string;
};

export type CollectionsState = {
  collections: Collections[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type Collection = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: null;
  description: null;
  image_url: null;
  display_image_url: string;
  display_animation_url: null;
  metadata_url: null;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
};

export type CollectionState = {
  nfts: Collection[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type Nft = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  animation_url: string;
  is_suspicious: boolean;
  creator: string;
  traits: Trait[];
  owners: Owner[];
  rarity: Rarity;
};

interface Trait {
  trait_type: string;
  display_type: "number";
  max_value: string;
  value: number;
}

export type Owner = {
  address: string;
  quantity: number;
};

export type Rarity = {
  strategy_version: string;
  rank: number;
  score: number;
  calculated_at: string;
  max_rank: number;
  total_supply: number;
  ranking_features: {
    unique_attribute_count: number;
  };
};

export type NftState = {
  nft: Nft | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type NftProps = {
  chain: string;
  address: string;
  identifier: string;
  description: string | null;
  image_url: string;
  collection: string;
  contract: string;
  creator: string;
  display_image_url: string;
  display_animation_url: string | null;
  metadata_url: string;
  name: string | null;
  opensea_url: string;
  token_standard: string;
  updated_at: string;
};

export type initialStateProps = {
  nft: NftProps | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type WorkCardProps = {
  image: string;
  name: string;
  description: string;
};

export const description1 =
  "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.";
export const description2 =
  "Upload your work and setup your collection. Add a description, social links and floor price.";
export const description3 =
  "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.";

export type TrendCardProps = {
  item: {
    collection: string;
    image_url: string;
    name: string;
  };
};

export type CategoryItem = {
  category: string;
  imgUrl: string;
  link: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
};
