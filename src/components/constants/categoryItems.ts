import artImg from "../../assets/images/artImg.svg";
import collectiblesImg from "../../assets/images/collectiblesImg.svg";
import musicImg from "../../assets/images/musicImg.svg";
import cameraImg from "../../assets/images/cameraImg.svg";
import categoryImg from "../../assets/images/categoryImg.svg";
import magicWandingImg from "../../assets/images/magicWandImg.svg";
import videoCameraImg from "../../assets/images/videoCameraImg.svg";
import planetImg from "../../assets/images/planetImg.svg";
import { ReactComponent as ArtIcon } from "../../assets/icons/PaintBrush.svg";
import { ReactComponent as CollectionIcon } from "../../assets/icons/Swatches.svg";
import { ReactComponent as UtilityIcon } from "../../assets/icons/MagicWand.svg";
import { ReactComponent as PhotographyIcon } from "../../assets/icons/Camera.svg";
import { ReactComponent as SportIcon } from "../../assets/icons/Basketball.svg";
import { ReactComponent as VirtualWordsIcon } from "../../assets/icons/Planet.svg";
import { ReactComponent as VideoIcon } from "../../assets/icons/VideoCamera.svg";
import { ReactComponent as MusicIcon } from "../../assets/icons/MusicNotes.svg";
import { CategoryItem } from "../../types/types";

export const CategoryItems: CategoryItem[] = [
  {
    category: "Art",
    imgUrl: artImg,
    link: "<Link to Art category>",
    icon: ArtIcon,
  },
  {
    category: "Collectibles",
    imgUrl: collectiblesImg,
    link: "<Link to Collectibles category>",
    icon: CollectionIcon,
  },
  {
    category: "Music",
    imgUrl: musicImg,
    link: "<Link to Music category>",
    icon: MusicIcon,
  },
  {
    category: "Photography",
    imgUrl: cameraImg,
    link: "<Link to Photography category>",
    icon: PhotographyIcon,
  },
  {
    category: "Video",
    imgUrl: categoryImg,
    link: "<Link to Video category>",
    icon: VideoIcon,
  },
  {
    category: "Utility",
    imgUrl: videoCameraImg,
    link: "<Link to Utility category>",
    icon: UtilityIcon,
  },
  {
    category: "Sport",
    imgUrl: magicWandingImg,
    link: "<Link to Sport category>",
    icon: SportIcon,
  },
  {
    category: "Virtual Worlds",
    imgUrl: planetImg,
    link: "<Link to Virtual Worlds category>",
    icon: VirtualWordsIcon,
  },
];
