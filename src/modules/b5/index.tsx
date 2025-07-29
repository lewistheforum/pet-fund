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
                      Total Supply
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.5}>
                <div className="flex flex-row items-start gap-5">
                  <div className="h-20 w-2 bg-[#4AA76C]"></div>
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-font-2-extra-bold text-[#4AA76C]">
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
                      No transaction fees to ensure trust and accessibility
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <div className="flex flex-col justify-end gap-5 px-10 pt-10 pb-5 border border-white rounded-2xl h-[370px] lg:h-[500px]">
              <AnimatedSection variant="scale" delay={0.3}>
                <div className="relative w-full lg:w-[598px] h-[200px] lg:h-[250px]">
                  <div className="absolute top-[50%] lg:top-1/2 left-1/3 lg:left-[50%] 2xl:left-[55%] -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    {/* 30% segment - Cyan */}
                    <div className="absolute -top-[53px] lg:-top-[66px] -right-[81px] lg:-right-[27px] w-[82%] h-[82%]">
                      {svg.b5_30()}
                    </div>

                    {/* 20% segment - Yellow */}
                    <div className="absolute bottom-0 -right-[45px] lg:right-[44px] w-[60%] h-[60%]">
                      {svg.b5_20_y()}
                    </div>

                    {/* 20% segment - Green */}
                    <div className="absolute bottom-0 left-[40px] lg:left-[43px] w-[60%] h-[60%]">
                      {svg.b5_20_g()}
                    </div>

                    {/* 10% segment - Orange */}
                    <div className="absolute top-[37.5px] lg:top-[46px] left-[57px] lg:left-[92px] w-[37%] h-[37%]">
                      {svg.b5_10()}
                    </div>

                    {/* 5% segment - Pink */}
                    <div className="absolute -top-[2px] left-[66px] lg:-top-[0px] lg:left-[111px] w-[36%] h-[36%] lg:w-[34%] lg:h-[34%]">
                      {svg.b5_5()}
                    </div>

                    {/* 15% segment - Purple */}
                    <div className="absolute -top-[53px] left-[54px] lg:-top-[66px] lg:left-[65px] w-[57%] h-[57%]">
                      {svg.b5_15()}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.5}>
                <div>{svg.b5_stat_desc()}</div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
