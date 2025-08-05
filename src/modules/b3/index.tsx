"use client";

import Image from "next/image";
import b3_1 from "../../../public/body/b3-i1.png";
import b3_2 from "../../../public/body/b3-i2.png";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function B3() {
  return (
    <div id="section-about" className="text-white py-16 px-5 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div>
          <AnimatedSection variant="fadeUp">
            <div>
              <div className="flex flex-row justify-center items-center gap-5 pb-5 w-full">
                <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl w-full text-center">
                  VISION
                </div>
              </div>
              <div className="text-base font-font-2 text-justify">
                Our vision is to create a trusted global community of pet lovers on a SocialFi platform, where their contributions drive life-saving rescues. By leveraging our data analytics heritage, AI, and InfoFi, we aim to redefine how data value is shared, ensuring profits fund verified shelters while rewarding participants with tokens, NFTs, and a sense of purpose.
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <div className="mt-10">
              <div className="flex flex-row justify-center items-center gap-5 pb-5 w-full">
                <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl w-full text-center">
                  PROBLEM AND SOLUTION
                </div>
              </div>
              <div className="flex flex-col gap-5 text-base font-font-2">
                <AnimatedSection variant="fadeLeft" delay={0.3}>
                  <div className="flex flex-row items-start gap-2">
                    <div>
                      <div className="w-1 h-1 bg-white rounded-full mt-3"></div>
                    </div>
                    <div className="text-justify">
                      <span className="font-font-2-extra-bold text-lg">
                        PROBLEM:
                      </span>{" "}
                      Traditional data industries, including our past Web2 ventures, excluded users from the value they generated, while pet rescues in war zones lack sustainable funding. Users&apos; data fueled corporate profits, and rescue efforts often lacked transparency.
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection variant="fadeRight" delay={0.4}>
                  <div className="flex flex-row items-start gap-2">
                    <div>
                      <div className="w-1 h-1 bg-white rounded-full mt-3"></div>
                    </div>
                    <div className="text-justify">
                      <span className="font-font-2-extra-bold text-lg">
                        SOLUTION:
                      </span>{" "}
                      Pet Fund corrects this by rewarding pet lovers with $PETF tokens for sharing anonymized data, sold ethically to pet food corporations. Blockchain ensures transparent donation tracking, and AI optimizes rescue efforts, creating a self-sustaining cycle of goodwill and support.
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="fadeRight" delay={0.2}>
          <div>
            <Image
              src={b3_1}
              alt="b3-i1"
              width={1000}
              height={1000}
              className="w-full h-[300px] lg:h-[594px] object-cover"
            />
          </div>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-7">
        <AnimatedSection variant="fadeLeft" delay={0.2}>
          <div>
            <Image
              src={b3_2}
              alt="b3-i1"
              width={1000}
              height={1000}
              className="w-full h-[300px] lg:h-[594px] object-cover"
            />
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <div>
              <div className="flex flex-row justify-center items-center gap-5 pb-5 w-full">
                <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl w-full text-center">
                  WHY PET FUND
                </div>
              </div>
              <div className="text-base font-font-2 text-justify">
                Pet Fund stands out due to its unique blend of credibility and innovation. Our decade-long track record in Web2 data analytics, serving Fortune 500 clients, establishes trust. Unlike speculative crypto projects, we offer a tangible mission—saving pets—backed by audited smart contracts (CoinSult, SOLIDProof) and GDPR-compliant data practices. Our experience ensures scalable, reliable execution, making Pet Fund a dependable choice for investors and pet lovers alike.
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.5}>
            <div className="mt-10">
              <div className="flex flex-row justify-center items-center gap-5 pb-5 w-full">
                <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl w-full text-center">
                  OUR GOODWILL
                </div>
              </div>
              <div className="text-base font-font-2 text-justify">
                At Pet Fund, our heart lies in pet welfare. Born from a recognition of past ethical shortcomings, we commit to redistributing data profits to token holders and rescue operations. Every $PETF spent supports verified shelters in war zones, with blockchain providing real-time proof of impact. Partnerships with nonprofit organizations reinforce our dedication to making a difference, not just a profit.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
