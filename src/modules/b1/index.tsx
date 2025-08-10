"use client";

import Image from "next/image";
import bg from "../../../public/body/b1-bg.png";
import Marquee from "react-fast-marquee";
import { DATA } from "@/utils/data";
import svg from "@/utils/svg";
import CampaignCard from "./components/card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import i1 from "../../../public/body/b1_card_i1.jpg";
import i2 from "../../../public/body/b1_card_i2.jpg";
import i3 from "../../../public/body/b1_card_i3.jpg";
import i4 from "../../../public/body/b1_card_i4.jpg";

export default function B1() {
  const cardData = [
    {
      daysLeft: 45,
      category: "Healthcare",
      title: "Medical Aid for Distressed Kittens",
      raised: 38200,
      goal: 100000,
      image: i1,
    },
    {
      daysLeft: 72,
      category: "Healthcare",
      title: "Medical Aid for Abandoned Dogs",
      raised: 42900,
      goal: 100000,
      image: i2,
    },
    {
      daysLeft: 15,
      category: "Healthcare",
      title: "Medical Aid for Pet Rescue Teams",
      raised: 29800,
      goal: 100000,
      image: i3,
    },
    {
      daysLeft: 60,
      category: "Healthcare",
      title: "Medical Aid for Emaciated Dogs",
      raised: 46200,
      goal: 100000,
      image: i4,
    },
  ];
  return (
    <div id="section-home" className="relative text-white">
      <Image src={bg} alt="bg" fill priority className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />
      <div className="relative">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-row justify-center items-center gap-5 py-10">
            <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
              INTRODUCTION
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="text-lg px-5 lg:px-20 text-center font-font-2 mb-10">
            <span className="font-font-2-extra-bold">Pet Fund</span> is a
            groundbreaking{" "}
            <span className="font-font-2-extra-bold">Web3 SocialFi</span>{" "}
            platform emerging from a decade-long legacy as a Web2 data analytics
            company. Having generated millions in revenue by selling anonymized
            consumer insights to Fortune 500 brands, we bring proven expertise
            to the crypto space. Launched on July 26, 2025, Pet Fund pivots this
            success to empower pet lovers, rewarding them for their data while
            funding pet rescues in war-torn regions like Ukraine and Syria. With
            a $500,000 presale of the $PETF token, we combine trust,
            transparency, and community to make a lasting impact.
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="mb-20">
            <Marquee
              className="gap-5 pt-10"
              direction="left"
              pauseOnHover={true}
            >
              {DATA.galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer relative flex flex-row items-center justify-end gap-1 mr-5 hover:-translate-y-5 transition-all duration-300"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-96 h-60 object-cover rounded-lg border border-gray-400"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {svg.b1_play_btn()}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </AnimatedSection>
        <div className="pb-16 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((item, index) => (
            <AnimatedSection key={index} variant="fadeUp" delay={0.1 * index}>
              <CampaignCard
                daysLeft={item.daysLeft}
                category={item.category}
                title={item.title}
                raised={item.raised}
                goal={item.goal}
                onViewMore={() => console.log("View more clicked")}
                onEdit={() => console.log("Edit clicked")}
                image={item.image}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
