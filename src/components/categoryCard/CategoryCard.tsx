import { CategoryItem } from "../../types/types";
export default function CategoryCard({ item }: { item: CategoryItem }) {
  return (
    <div className="w-full max-w-[147.5px] h-[209px] md:max-w-[150px] lg:max-w-[240px]  lg:h-[316px] rounded-t-[20px]">
      <div className="relative max-h-[142px] lg:max-h-[240px] h-full w-full rounded-t-[20px] overflow-hidden">
        <div
          className="absolute inset-0 z-10 bg-cover bg-center rounded-t-[20px]"
          style={{ backgroundImage: `url(${item?.imgUrl})` }}
        >
          <div className="absolute inset-0 backdrop-blur-sm rounded-t-[20px]"></div>
        </div>
        <img
          src={item?.imgUrl}
          alt={item?.category}
          className="relative z-0 h-full w-full object-cover rounded-t-[20px]"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 rounded-t-[20px] ">
          {item?.icon && <item.icon className="size-[80px] lg:size-[100px]" />}
        </div>
      </div>
      <div className="h-[67px] w-full md:h-[76px] bg-bgSecondary rounded-b-[20px] ">
        <p className="text-white w-full font-semibold sm:text-[16px] text-sm lg:text-[22px] py-[20px] px-2 xsm:px-[10px] md:px-[20px]  lg:pb-[30px] rounded-b-[20px]  bg-[#3B3B3B]">
          {item?.category}
        </p>
      </div>
    </div>
  );
}
