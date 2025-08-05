import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
}

const B7: React.FC = () => {
  const roadmapData: RoadmapItem[] = [
    {
      quarter: "Q4.2025",
      title: "PRESALE LAUNCH, DAPP MVP",
      description: "WITH DATA-SHARING FEATURES",
    },
    {
      quarter: "Q1.2026",
      title: "PLATFORM ROLLOUT, FIRST DATA",
      description: "SALE TO PET FOOD BRANDS.",
    },
    {
      quarter: "Q2.2026",
      title: "LISTINGS ON UNISWAP AND TIER-1 CEXS,",
      description: "RESCUE EXPANSION TO NEW REGIONS.",
    },
    {
      quarter: "Q3.2026",
      title: "ENHANCE AI FOR USER ENGAGEMENT,",
      description: "SCALE DATA PARTNERSHIPS.",
    },
  ];

  return (
    <div className="px-5 lg:px-20">
      <AnimatedSection variant="fadeUp">
        <div className="flex flex-row justify-center items-center gap-5 pb-10 w-full">
          <div className="text-3xl text-white font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl w-full text-center">
            ROADMAP
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection variant="scale" delay={0.2}>
        <div className="h-full p-8 flex items-center justify-center border border-[#4AA76C] rounded-2xl">
          <div className="max-w-6xl w-full">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-white"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                {roadmapData.map((item, index) => (
                  <AnimatedSection
                    key={index}
                    variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                    delay={0.2 * index + 0.3}
                  >
                    <div
                      className={`flex items-center ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                        }`}
                    >
                      {/* Content */}
                      <div
                        className={`w-[31%] lg:w-2/3 ${index % 2 !== 0
                          ? "lg:pr-12 text-left ml-10"
                          : "lg:pl-12 text-right mr-10"
                          }`}
                      >
                        <div className="rounded-lg py-6">
                          <h3 className="text-2xl text-white font-font-2-extra-bold mb-2">
                            {item.quarter}
                          </h3>
                          <div className="text-white">
                            <p className="font-semibold text-xs lg:text-xl font-font-2-extra-bold uppercase leading-tight">
                              {item.title}
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full z-10">
                          {/* Paw print icon */}
                          <div className="absolute inset-0 flex items-start justify-start">
                            <svg
                              width="50"
                              height="44"
                              viewBox="0 0 50 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4093 21.6465C19.2461 17.5028 24.7683 15.2323 29.5831 18.293C30.8165 19.0777 31.7493 20.0981 32.4318 21.4014C33.0985 22.6744 33.816 23.9339 34.6466 25.1026C35.1381 25.7944 35.8759 26.3193 36.5323 26.8838C37.559 27.7665 38.661 28.5674 39.6407 29.4981C41.3417 31.1156 42.129 33.1478 42.0841 35.3643L42.0851 35.3633C42.2687 40.5946 36.9361 45.5943 30.8282 43.4229C28.3802 42.5526 25.9215 42.1904 23.3566 42.4512C21.953 42.5931 20.5966 42.8749 19.2765 43.4395C17.1552 44.3461 15.035 44.0861 12.9669 43.1387C7.09899 40.4484 6.23371 32.5636 11.3722 28.6524C12.8205 27.5495 14.3845 26.5559 15.4103 24.9971C16.1251 23.9108 16.8865 22.8268 17.4093 21.6465ZM5.82042 13.1123C8.48134 13.3535 10.7378 15.0019 12.2237 17.7588C12.9332 19.0767 13.2288 20.4991 12.9064 21.9922C12.4127 24.2795 10.3565 25.6224 7.86046 25.3116C4.30096 24.867 1.14287 21.6103 0.806753 18.0352C0.538559 15.1863 2.44139 13.0988 5.82042 13.1114V13.1123ZM44.961 13.2051C47.9926 13.1832 49.8939 15.4148 49.465 18.4922C48.9807 21.9672 45.3135 25.1955 41.8009 25.2383C38.6287 25.2767 36.6688 23.0054 37.1759 19.877C37.7488 16.3394 41.3754 13.2332 44.961 13.2071V13.2051ZM30.7189 1.14847C31.825 0.328274 33.0835 -0.120809 34.4786 0.0283479C36.5209 0.247495 37.8192 1.46802 38.5841 3.29007C40.1659 7.05937 38.4563 12.2723 34.9689 14.4063C31.8163 16.3357 28.3717 15.0316 27.2687 11.4512C27.0162 10.63 26.9413 9.75394 26.838 9.19046C27.0207 5.74493 28.1279 3.06956 30.7189 1.14847ZM11.2286 3.4971C12.4193 0.182796 15.7834 -0.971912 18.7638 0.904324C21.2881 2.49262 22.5466 4.89962 22.963 7.78714C23.1935 9.38774 23.0013 10.9453 22.2814 12.4082C20.9822 15.0494 18.257 16.0179 15.6085 14.7324C13.1812 13.5543 11.8099 11.4911 11.0909 8.96878C10.8499 8.12571 10.7795 7.23375 10.6095 6.23733H10.6105C10.7983 5.37753 10.9052 4.39761 11.2286 3.4971Z"
                                fill="#4AA76C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Empty space for alignment */}
                      <div className="w-[50%] lg:w-[74%]"></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default B7;
