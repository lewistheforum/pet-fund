"use client";

import svg from "@/utils/svg";
import Image from "next/image";
import bg from "../../../public/body/b4-bg.png";

export default function B4() {
  const hiw = [
    {
      svg: svg.b4_hiw_1(),
      title: "User Participation",
      description:
        "Cat lovers join the SocialFi platform, sharing anonymized data (e.g., preferences, adoption trends) via a secure dApp.",
    },
    {
      svg: svg.b4_hiw_2(),
      title: "Data Monetization",
      description:
        "This data is sold to cat food brands like Purina, generating revenue through InfoFi pipelines inherited from our Web2 expertise.",
    },
    {
      svg: svg.b4_hiw_3(),
      title: "Profit Distribution",
      description:
        "Profits are split—part reinvested in rescues, part distributed to $MEOWF holders as rewards.",
    },
    {
      svg: svg.b4_hiw_4(),
      title: "Rescue Funding",
      description:
        "Donations are tracked on Polygon blockchain, ensuring transparency to shelters in regions like Ukraine and Syria.",
    },
    {
      svg: svg.b4_hiw_5(),
      title: "Engagement",
      description:
        "AI enhances user experience with personalized content, while NFTs and staking (139% APY) incentivize participation.",
    },
  ];

  const uot = [
    {
      svg: svg.b4_uot_1(),
      title: "Reward Mechanism",
      description: "Earned by sharing data, with 5% referral bonuses.",
    },
    {
      svg: svg.b4_uot_2(),
      title: "Staking",
      description: "Offers 139% APY, encouraging long-term holding.",
    },
    {
      svg: svg.b4_uot_3(),
      title: "Governance",
      description: "Influences platform features and rescue priorities.",
    },
    {
      svg: svg.b4_uot_4(),
      title: "NFT Access",
      description: "Unlocks exclusive Warzone Whiskers NFTs.",
    },
    {
      svg: svg.b4_uot_5(),
      title: "Profit Sharing",
      description: "Receives a portion of data sale profits.",
    },
  ];
  return (
    <div className="relative text-white px-5 lg:px-20 pt-16">
      <Image src={bg} alt="bg" fill priority className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="relative z-10">
        <div>
          <div className="flex flex-row justify-center items-center gap-5 pb-10">
            <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
              HOW IT WORKS
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 pb-10">
          {hiw.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 bg-[#D9D9D9] w-full py-7 px-3 rounded-2xl"
            >
              <div className="flex flex-col items-center gap-10">
                <div className="h-32 flex items-center justify-center">
                  {item.svg}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="uppercase text-base font-font-2-extra-bold text-[#4AA76C]">
                    {item.title}
                  </div>
                  <div className="text-sm font-font-2 text-center text-black">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white pt-16 relative z-10">
        <div>
          <div>
            <div className="flex flex-row justify-center items-center gap-5 pb-10">
              <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
                Utility of Token
              </div>
            </div>
          </div>
          <div className="font-font-2-extra-bold text-2xl text-center pb-10">
            The $MEOWF token is the lifeblood of the Meow Fund ecosystem:
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 pb-10">
            {uot.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 bg-[#D9D9D9] w-full py-7 px-3 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-10">
                  <div className="h-32 flex items-center justify-center">
                    {item.svg}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="uppercase text-base font-font-2-extra-bold text-[#4AA76C]">
                      {item.title}
                    </div>
                    <div className="text-sm font-font-2 text-center text-black">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
