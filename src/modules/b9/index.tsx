"use client";

import Image from "next/image";
import i1 from "../../../public/body/b9-i1.png";
import i2 from "../../../public/body/b9-i2.png";
import i3 from "../../../public/body/b9-i3.png";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function B9() {
  return (
    <div className="text-white px-5 lg:px-20 pb-20 pt-10">
      <div>
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-row justify-center items-center gap-5 pb-10">
            <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl uppercase w-full text-center">
              Legal Disclaimer
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection variant="fadeLeft" delay={0.2}>
          <div>
            <div className="text-2xl font-font-2-extra-bold uppercase pb-5 text-[#4AA76C]">
              1. Disclaimers and Limitations of Liability
            </div>
            <div className="text-base text-justify font-font-2-bold">
              To the fullest extent permissible by applicable law, the issuer of the Pet Fund token ($PETF) and any of their subsidiaries, affiliates, and licensors, along with their respective employees, agents, and contractors, make no express warranties and disclaim all implied warranties (including, without limitation, regarding any crypto tokens, smart contracts, digital assets, or decentralized applications), including the implied warranties of merchantability, fitness for a particular purpose, noninfringement, accuracy, or reliability. The issuer of Pet Fund provides no warranties for any third-party services such as wallets, marketplaces, or platforms that users may use to interact with $PETF tokens. Users accept the inherent security risks of transacting and interacting online over the blockchain and internet. The issuer of Pet Fund is not responsible or liable for any losses, damages, or claims arising from user error (such as forgotten passwords, incorrect smart contract interactions), server failure, corrupted wallet files, unauthorized third-party access, or vulnerabilities in blockchain networks. Crypto tokens and AI-driven features are intangible digital assets that exist solely by virtue of the ownership records maintained within blockchain technology. Smart contracts operate within decentralized environments, which are experimental and subject to change. Pet Fund makes no guarantees regarding the operation or security of blockchain systems.
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeRight" delay={0.3}>
          <div className="">
            <Image
              src={i1}
              alt="i1"
              width={1000}
              height={1000}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        <AnimatedSection variant="fadeLeft" delay={0.2}>
          <div>
            <Image
              src={i2}
              alt="i1"
              width={1000}
              height={1000}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeRight" delay={0.3}>
          <div>
            <AnimatedSection variant="fadeUp" delay={0.4}>
              <div>
                <div className="text-2xl font-font-2-extra-bold uppercase pb-5 text-[#4AA76C]">
                  2. Governing Law and Jurisdiction
                </div>
                <div className="text-base text-justify font-font-2-bold">
                  This agreement shall be governed and interpreted under the laws of the Seychelles. Any disputes shall be subject to the exclusive jurisdiction of Seychelles courts, and users waive any objections to such jurisdiction and venue.
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.5}>
              <div className="mt-10">
                <div className="text-2xl font-font-2-extra-bold uppercase pb-5 text-[#4AA76C]">
                  3. Arbitration
                </div>
                <div className="text-base text-justify font-font-2-bold">
                  You and the issuer of Pet Fund agree that any disputes arising out of or related to $PETF shall be resolved exclusively through individual arbitration. Arbitration will be conducted according to the Centre for Effective Dispute Resolution (CEDR) Model Mediation Procedures, with mediators nominated by the CEDR.
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        <AnimatedSection variant="fadeLeft" delay={0.3}>
          <div>
            <div className="text-2xl font-font-2-extra-bold uppercase pb-5 text-[#4AA76C]">
              4. No Class Action
            </div>
            <div className="text-base text-justify font-font-2-bold">
              You and the issuer of Pet Fund agree to resolve disputes individually and waive any right to participate in a class action lawsuit or class-wide arbitration.
              This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy securities. Investing in $PETF involves risks, including loss of capital. Pet Fundis not liable for any financial decisions made based on this document. Participation requires compliance with local laws, and users must conduct their own due diligence. Data sharing is voluntary and anonymized, adhering to GDPR and other privacy regulations. For legal advice, consult a professional.
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeRight" delay={0.4}>
          <div>
            <Image
              src={i3}
              alt="i1"
              width={1000}
              height={1000}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
