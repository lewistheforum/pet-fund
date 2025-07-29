"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function B6() {
  const galleryItems = [
    {
      id: 1,
      imageUrl: "/body/b6-i1.png",
      title: "Presale Launch",
      desc: "Begins 09:15 PM +07, July 26, 2025, on meowfund.io with MetaMask integration.",
    },
    {
      id: 2,
      imageUrl: "/body/b6-i2.png",
      title: "Marketing",
      desc: "Leverage Web2 credibility with campaigns on X, TikTok, and pet forums, featuring verified rescue stories.",
    },
    {
      id: 3,
      imageUrl: "/body/b6-i3.png",
      title: "Community",
      desc: "Build trust via Telegram AMAs with data experts and shelter partners.",
    },
    {
      id: 4,
      imageUrl: "/body/b6-i4.png",
      title: "Incentives",
      desc: "Offer giveaway to drive early adoption.",
    },
    {
      id: 5,
      imageUrl: "/body/b6-i5.png",
      title: "Transparency",
      desc: "Daily updates on raised funds and rescue impacts.",
    },
  ];
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div id="section-stacking" className="text-white mt-10">
      <AnimatedSection variant="fadeUp">
        <div className="flex flex-row justify-center items-center gap-5 pb-10">
          <div className="text-3xl text-white font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
            LAUNCH STRATEGY
          </div>
        </div>
      </AnimatedSection>
      <div>
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="px-5 lg:px-20 flex flex-row justify-start items-center gap-5 pb-5">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="z-10 text-white rounded-full hover:scale-110 transition"
            >
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="14" r="13.5" fill="white" />
                <path
                  d="M16.5 8.5L11 14L16.5 19.5"
                  stroke="#424242"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="text-2xl font-font-2-extra-bold text-[#4AA76C]">
              {galleryItems[activeIndex]?.title || "TITLE"}
            </div>
            <button
              onClick={handleNext}
              className="z-10 text-white rounded-full hover:scale-110 transition"
            >
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="13.5"
                  cy="13.5"
                  r="13"
                  transform="matrix(-1 0 0 1 27 0.5)"
                  fill="white"
                  stroke="#4AA76C"
                />
                <path
                  d="M10.5 8.5L16 14L10.5 19.5"
                  stroke="#4AA76C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="relative pb-20">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              breakpoints={{
                300: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              loop={true}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              className="w-full h-full py-12 flex justify-center items-center"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {galleryItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center rounded-2xl px-5 lg:px-20"
                >
                  <div className="flex flex-row justify-between items-center gap-5 bg-[#D9D9D9] rounded-2xl">
                    <div className="text-black text-2xl ml-3 lg:ml-10 font-font-2-extra-bold">
                      {item.desc}
                    </div>
                    <div className="relative flex justify-center items-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.desc}
                        width={1000}
                        height={1000}
                        className={`${
                          item.id === 1 ? "object-contain" : "object-cover"
                        } w-[500px] h-60 flex justify-center items-center rounded-r-2xl`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
