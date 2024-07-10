import Envelope from "../../assets/icons/Envelope.svg";
import astronaut from "../../assets/icons/astronaut.svg";

export default function SubscribeData() {
  return (
    <div>
      <div className="w-full h-[645px] md:h-[480px] ls:h-[550px] ls:px-[195px] py-[40px] gap-[10px] flex justify-center items-center bg-[#2B2B2B]">
        <div className="flex flex-col md:flex-row ls:flex-row w-[315px] h-[565px] md:w-[690px] md:h-[360px] ls:w-[1050px] ls:h-[390px] rounded-[20px] md:py-[40px] md:px-[30px] ls:p-[40px] gap-[30px] ls:gap-[50px] bg-[#2B2B2B] md:bg-[#3B3B3B] ">
          <div className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] ls:w-[480px] ls:h-[310px] rounded-[20px] ">
            <img
              src={astronaut}
              alt="newsletter"
              className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] ls:w-[425px] ls:h-[310px] rounded-[20px] object-cover"
            />
          </div>
          <div className="w-[315px] h-[280px] md:w-[300px] md:h-[280px] ls:w-[425px] ls:h-[272px] gap-[10px] ">
            <div className="w-[315px] h-[132px] md:w-[300px] md:h-[132px] ls:w-[425px] ls:h-[172px] gap-[10px] ls:gap-[20px] ">
              <div className="text-white text-[28px] md:text-[34px] ls:text-[42px] font-semibold font-work-sans sm:leading-[39.2px] ls:leading-[45.6px] ">
                Join Our Weekly Digest
              </div>
              <div className="text-white text-[16px] ls:text-[22px] font-normal font-work-sans ls:leading-[35.2px] md:my-[15px]">
                Get exclusive promotions & updates straight to your inbox.
              </div>
            </div>
            <div className="flex flex-col md:flex-col ls:flex-row  w-[315px] ls:flex-nowrap h-[108px] md:w-[300px] md:h-[108px] ls:w-[425px] ls:h-[60px] mt-[20px] md:mt-[30px] ls:py-[16px] gap-[16px] ls:gap-0 ">
              <div className="flex justify-center bg-white rounded-[20px] w-[315px] h-[46px] md:w-[300px] md:h-[46px] ls:w-[425px] ls:h-[60px] md:px-[20px] md:py-[16px] ls:ps-[1px] gap-[12px]">
                <input
                  className="font-normal outline-none text-[16px] placeholder-[#2B2B2B]"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <button
                className="flex justify-center items-center bg-[#A259FF] w-[315px] h-[46px] ls:ms-[-45px] md:w-[300px] md:h-[46px] ls:w-[211px] ls:h-[60px] rounded-[20px] sm:py-0 px-[50px] ls:px-[50px] gap-[12px] "
                type="button"
                title="Subscribe"
              >
                <div className="w-5 h-5">
                  <img src={Envelope} alt="" className="w-5 h-5 relative" />
                </div>
                <div className=" font-semibold text-[16px] font-work-sans ">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
