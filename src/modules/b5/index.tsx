"use client";

import svg from "@/utils/svg";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function B5() {
  return (
    <div id="section-tokenomics">
      <div className="relative z-10 px-5 lg:px-20 pt-16">
        <div>
          <AnimatedSection variant="fadeUp">
            <div className="flex flex-row justify-center items-center gap-5 pb-10">
              <div className="text-3xl text-white font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
                TOKENOMICS
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-10 ">
          <AnimatedSection variant="fadeLeft" delay={0.2}>
            <div className="flex flex-col items-start justify-center gap-5 border border-white rounded-2xl px-10 py-10 lg:h-[500px]">
              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="flex flex-row items-start gap-5">
                  <div className="h-20 w-2 bg-[#4AA76C]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-font-2-extra-bold text-[#4AA76C]">
                      1 billion $PETF
                    </div>
                    <div className="text-xl font-font-2 text-white">
                      Total Supply
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="flex flex-row items-start gap-5">
                  <div className="h-20 w-2 bg-[#4AA76C]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-font-2-extra-bold text-[#4AA76C]">
                      30% (300M TOKENS)
                    </div>
                    <div className="text-xl font-font-2 text-white">
                      Presale
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.5}>
                <div className="flex flex-row items-start gap-5">
                  <div className="h-20 w-2 bg-[#4AA76C]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-font-2-extra-bold text-[#4AA76C] uppercase">
                      $0.001 - $0.002, 10 stage
                    </div>
                    <div className="text-xl font-font-2 text-white">
                      Presale Price
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.6}>
                <div className="flex flex-row items-start gap-5">
                  <div className="h-20 w-2 bg-[#4AA76C]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-font-2-extra-bold text-[#4AA76C]">
                      ZERO TAX
                    </div>
                    <div className="text-xl font-font-2 text-white">
                      No transaction fees to ensure trust
                      and accessibility
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="flex flex-col justify-end gap-5 px-10 pt-10 pb-5 border border-white rounded-2xl h-[370px] lg:h-[500px]">
              <AnimatedSection variant="scale" delay={0.3}>
                <div className="relative w-full h-full flex items-center justify-center">
                  {svg.b5_full_chart()}
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.5}>
                <div className="relative w-full h-full flex items-center justify-center">
                  {svg.b5_stat_desc_new()}
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
