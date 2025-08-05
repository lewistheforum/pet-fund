"use client";

import svg from "@/utils/svg";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function B2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Transform scrollYProgress to control line drawing
  const line1Progress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const line2Progress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const line3Progress = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const line4Progress = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

  return (
    <div className="text-white py-16 px-5 lg:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start justify-start">
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedSection variant="fadeLeft" delay={0.1}>
            <div className="relative aspect-[452/241] w-full">
              {svg.b2_chart_1_frame()}
              <div className="absolute top-[30%] left-[10%] text-[40px] font-font-2-bold text-[#0C5641]">
                $
                <NumberTicker
                  value={200000}
                  className="whitespace-pre-wrap text-[40px] font-medium tracking-tighter text-[#0C5641]"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="relative aspect-[453/241] w-full">
              {svg.b2_chart_2_frame()}
              <div className="absolute top-[30%] left-[10%] text-[40px] font-font-2-bold text-[#0C5641]">
                $
                <NumberTicker
                  value={18000}
                  className="whitespace-pre-wrap text-[40px] font-medium tracking-tighter text-[#0C5641]"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.3}>
            <div className="relative aspect-[452/241] w-full">
              {svg.b2_chart_3_frame()}
              <div className="absolute top-[28%] right-[8%] w-[120px] h-[70px]">
                {svg.b2_lineChart_3()}
              </div>
              <div className="absolute top-[30%] left-[10%] text-[40px] font-font-2-bold text-[#0C5641]">
                <NumberTicker
                  value={2514}
                  className="whitespace-pre-wrap text-[40px] font-medium tracking-tighter text-[#0C5641]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="col-span-1">
          <AnimatedSection variant="scale" delay={0.4}>
            <div className="aspect-[404/241] w-full">{svg.b2_chart_4()}</div>
          </AnimatedSection>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-7 gap-5">
        <div
          ref={containerRef}
          className="col-span-1 lg:col-span-3 aspect-[1440/999] w-full"
        >
          <AnimatedSection variant="fadeUp" delay={0.2} className="relative">
            <div className="absolute -bottom-[13.5%] left-[7.5%] w-[84.5%] h-full">
              <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                viewBox="0 0 1218 372"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 371L166.372 298.947C166.458 298.909 166.549 298.884 166.642 298.872L338.971 276.456L472.984 244.439C473.071 244.418 473.154 244.386 473.232 244.343L609 169.913L769.275 95.5437L945.075 33.2075C945.138 33.1852 945.203 33.1692 945.269 33.1598L1070.66 15.4219L1217 1"
                  stroke="#C1E965"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: line1Progress }}
                />
              </svg>
            </div>
            <div className="absolute -bottom-[20%] left-[7.5%] w-[84.5%] h-full">
              <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                viewBox="0 0 1221 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 255L166.779 200.378C166.852 200.354 166.928 200.338 167.005 200.332L314.359 187.481L459.002 166.6C459.085 166.588 459.165 166.566 459.242 166.534L614.505 102.278L765.445 60.481L914.65 33.1519L1063.85 15.4684L1220 1"
                  stroke="#043F2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: line2Progress }}
                />
              </svg>
            </div>
            <div className="absolute -bottom-[26%] left-[7.5%] w-[84.5%] h-full">
              <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                viewBox="0 0 1211 206"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 205L119.673 176.087L265.588 161.63L358.188 150.386H439.455C439.527 150.386 439.599 150.378 439.669 150.363L557.269 124.685L656.616 105.435C656.702 105.418 656.786 105.39 656.864 105.352L732.407 68.5146C732.475 68.4814 732.547 68.456 732.621 68.4389L809.218 50.7953L891.211 39.5512L987.674 28.3071L1076.1 12.2441L1145.61 1.0128C1145.66 1.00428 1145.72 1 1145.77 1H1210"
                  stroke="#7E7E7E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: line3Progress }}
                />
              </svg>
            </div>
            <div className="absolute -bottom-[32.8%] left-[7.5%] w-[84.5%] h-full">
              <svg
                width="100%"
                height="100%"
                className="w-full h-full"
                viewBox="0 0 1221 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 117L161.818 112.167L314.079 104.111L470.031 89.6111L618.973 70.2778L767.916 55.7778H922.115L1085.08 33.2222L1220 1"
                  stroke="#DBDBDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: line4Progress }}
                />
              </svg>
            </div>
            {svg.b2_main_chart_frame()}
          </AnimatedSection>
        </div>
        <div className="col-span-1 lg:col-span-1 w-full h-full text-black flex items-start justify-center">
          <AnimatedSection
            variant="fadeLeft"
            delay={0.4}
            className="h-full flex justify-center"
          >
            <div className="w-full lg:w-[90%] h-full lg:h-[99%] bg-white p-4 rounded-xl">
              <div className="lg:text-base !text-xl font-bold mb-4 font-font-2-extra-bold">
                Revenue Sharing Economics
              </div>
              <div className="flex items-start gap-2">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1.5"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-font-2-bold lg:text-sm !text-base">
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
                  <div className="font-font-2-bold lg:text-sm !text-base">
                    Stablecoin Share back to users, backed by Pet Fund revenue
                  </div>
                  <div className="text-sm lg:text-xs font-font-2">
                    • 75% Web2 revenue from pet data sale to enterprise → user rewards
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
                  <div className="font-font-2-bold lg:text-sm !text-base">
                    Why This Model Works?
                  </div>
                  <div className="text-sm lg:text-xs font-font-2">
                    • Your Insights/ Data about Pet Behavior = valuable market insights
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
                    • Part of Revenue goes to Pet Save Organization to save more pets
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <div>
                  <div className="w-3 h-3 bg-[#4AA76C] rounded-full mt-1"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-font-2-bold lg:text-sm !text-base">
                    How to Participate?
                  </div>
                  <div className="text-sm lg:text-xs font-font-2">
                    • Hold <strong>$PETF</strong> token
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
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
