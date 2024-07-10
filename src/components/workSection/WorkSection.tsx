import WorkCard from "../workCard/WorkCard";
import Setupwallet from "../../assets/icons/Setupwallet.svg";
import CreateCollection from "../../assets/icons/CreateCollection.svg";
import StartEarning from "../../assets/icons/StartEarning.svg";
import { description1, description2, description3 } from "../../types/types";

export default function WorkData() {
  return (
    <div className="w-full h-[685px] md:h-[528px] lg:h-[738px] flex flex-col justify-center items-Start py-[40px] px-[30px] md:py-[40px] md:px-[55px] lg:py-[80px] lg:px-[115px] gap-[40px] lg:gap-[48px] bg-[#2B2B2B]">
      <div className="h-[50px] md:h-[71px] lg:h-[91px] gap-[10px] flex flex-col justify-center items-start fs:px-0 xl:px-[85px]">
        <div className=" text-white text-[28px] lg:text-[38px] font-semibold font-work-sans">
          How it Works?
        </div>
        <div className=" text-white text-[16px] lg:[22px] text-base font-normal font-work-sans leading-snug">
          Find out how to get started
        </div>
      </div>
      <div className="h-[494px] md:h-[337px] lg:h-[439px] flex flex-col justify-center items-center md:flex-row gap-[20px] md:gap-[30px]">
        <WorkCard
          image={StartEarning}
          name="Setup Your wallet"
          description={description1}
        />
        <WorkCard
          image={CreateCollection}
          name="Create Collection"
          description={description2}
        />
        <WorkCard
          image={Setupwallet}
          name="Start Earning"
          description={description3}
        />
      </div>
    </div>
  );
}
