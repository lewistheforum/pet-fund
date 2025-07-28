"use client";

import svg from "@/utils/svg";

export default function B2() {
  return (
    <div className="text-white py-16 px-5 lg:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start justify-start">
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="aspect-[452/241] w-full">{svg.b2_chart_1()}</div>
          <div className="aspect-[453/241] w-full">{svg.b2_chart_2()}</div>
          <div className="aspect-[452/241] w-full">{svg.b2_chart_3()}</div>
        </div>
        <div className="col-span-1">
          <div className="aspect-[404/241] w-full">{svg.b2_chart_4()}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-7 gap-5">
        <div className="col-span-1 lg:col-span-3 aspect-[1440/999] w-full">
          {svg.b2_main_chart()}
        </div>
        <div className="col-span-1 lg:col-span-1 w-full text-black flex items-start justify-center">
          <div className="w-full lg:w-[90%] h-full lg:h-[99%] bg-white p-4 rounded-xl">
            <div className="lg:text-base text-lg font-bold mb-4 font-font-2-extra-bold">
              Revenue Sharing Economics
            </div>
            <div className="flex items-start gap-2">
              <div>
                <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-font-2-bold lg:text-sm text-base">
                  Revenue Sharing?
                </div>
                <div className="font-font-2 text-sm lg:text-xs">
                  • Real enterprise revenue shared with users
                </div>
                <div className="font-font-2 text-sm lg:text-xs">
                  • Blockchain-verified transparent payouts
                </div>
                <div className="font-font-2 text-sm lg:text-xs">
                  • Proven business model with real revenue backing
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <div>
                <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-font-2-bold lg:text-sm text-base">
                  Stablecoin Share back to users, backed by Meow Fund revenue
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • 75% Web2 revenue from cat data sale to enterprise → user
                  rewards
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Stable value rewards - no crypto volatility risk
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Direct blockchain distribution to your wallet
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <div>
                <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-font-2-bold lg:text-sm text-base">
                  Why This Model Works?
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Your Insights/ Data about Cat Behavior = valuable market
                  insights
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Data monetization creates sustainable rewards
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Fair rewards for your contributions
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Community-driven growth benefits everyone
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Part of Revenue goes to Cat Save Organization to save more
                  cats
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <div>
                <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-font-2-bold lg:text-sm text-base">
                  How to Participate?
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Hold $MEOWF token
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Verified data = real rewards
                </div>
                <div className="text-sm lg:text-xs font-font-2">
                  • Payouts are automatically distributed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
