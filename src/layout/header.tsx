"use client";

import svg from "@/utils/svg";
import React, { useState, useEffect } from "react";
// import { useCopyToClipboard } from "usehooks-ts";
// import toast from "react-hot-toast";
import bg from "../../public/head/head-bg.png";
import logo from "../../public/head/head-logo.png";
import "@/styles/button.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface TokenData {
  totalTokensSold: number;
  currentPrice: number;
  nextPrice: number;
  amountRaised: number;
  phaseProgress: number;
  currentPhaseRaised: number;
  totalPhaseTarget: number;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [, copy] = useCopyToClipboard();
  const [selectedOption, setSelectedOption] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState<string>("0.00");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("ETH");
  const [scrolled, setScrolled] = useState(false);

  // For header scroll animations
  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 5px 15px rgba(0, 0, 0, 0.1)"]
  );

  const navItems = [
    { id: "home", label: "[HOME]", sectionId: "section-home" },
    { id: "about", label: "[ABOUT]", sectionId: "section-about" },
    {
      id: "tokenomics",
      label: "[TOKENOMICS]",
      sectionId: "section-tokenomics",
    },
    { id: "howtobuy", label: "[HOW TO BUY]", sectionId: "section-howtobuy" },
    { id: "faq", label: "[FAQ]", sectionId: "section-faq" },
    { id: "stacking", label: "[STACKING]", sectionId: "section-stacking" },
  ];

  // Function to scroll to a section
  const scrollToSection = (index: number) => {
    setSelectedOption(index);
    const sectionId = navItems[index]?.sectionId;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Update selected option based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.sectionId)
      );
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Detect if page is scrolled for header styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setSelectedOption(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tokenData: TokenData = {
    totalTokensSold: 28000000,
    currentPrice: 0.001,
    nextPrice: 0.001,
    amountRaised: 30000000,
    phaseProgress: 81.25,
    currentPhaseRaised: 25875855,
    totalPhaseTarget: 30000000,
  };

  const currencies = [
    { code: "ETH", name: "ETH", icon: svg.head_eth() },
    { code: "BNB", name: "BNB", icon: svg.head_bnb() },
    { code: "USDT", name: "USDT", icon: svg.head_usdt() },
    { code: "OTHER", name: "OTHER", icon: "" },
  ];

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const handlePurchaseAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPurchaseAmount(value);
    }
  };

  const calculateTokensReceived = (): number => {
    const amount = parseFloat(purchaseAmount) || 0;
    return amount / tokenData.currentPrice;
  };

  const calculateUSDTWorth = (): number => {
    const amount = parseFloat(purchaseAmount) || 0;
    // Assuming ETH price for calculation (this would need real-time data)
    const ethToUsd = 2500; // Example rate
    return selectedCurrency === "ETH" ? amount * ethToUsd : amount;
  };

  // Header motion variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  // Nav item variants for staggered animation
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // const navItemVariants = {
  //   hidden: { y: -20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 24,
  //     },
  //   },
  // };

  // Updating the hero section with animations

  // Inside the component after the headerShadow variable, add these animation variants
  const heroSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const heroCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const contentPanelVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="font-font-2">
      <div>
        <motion.div
          className="fixed w-full top-0 z-50"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          style={{
            boxShadow: headerShadow,
          }}
        >
          <motion.div
            className="flex flex-row items-center justify-between px-5 lg:px-20 py-3 bg-white"
            style={{
              backgroundColor: scrolled
                ? "rgba(255, 255, 255, 0.95)"
                : "rgba(255, 255, 255, 1)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-14"
              />
            </motion.div>
            <div className="flex flex-row items-center justify-between gap-10">
              <motion.div
                className="hidden lg:flex flex-row items-center gap-5"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={navItemVariants}
                    onClick={() => scrollToSection(index)}
                    className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                      selectedOption === index ? "!text-white bg-[#4AA76C]" : ""
                    } cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.div>
                ))} */}

                <div
                  onClick={() => setSelectedOption(0)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 0 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [HOME]
                </div>
                <div
                  onClick={() => setSelectedOption(1)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 1 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [ABOUT]
                </div>
                <div
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 2 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [TOKENOMICS]
                </div>
                <div
                  onClick={() => setSelectedOption(3)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 3 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [HOW TO BUY]
                </div>
                <div
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 4 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [FAQ]
                </div>
                <div
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 5 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                >
                  [STACKING]
                </div>
              </motion.div>
              <motion.div
                className="flex flex-row items-center gap-3 text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="hidden lg:flex">{svg.dexs()}</div>
                <div className="hidden lg:flex">{svg.mcap()}</div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="button !font-bold">BUY $PETF</button>
                </motion.div>
                <div className="hidden lg:flex">{svg.flag()}</div>
                <motion.div
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex justify-end"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu-icon lucide-menu"
                  >
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                    <path d="M4 6h16" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Add padding to content to account for fixed header */}
        <div style={{ paddingTop: "70px" }}></div>

        <div className="relative grid grid-cols-12">
          <Image
            src={bg}
            alt=""
            fill
            priority
            className="object-cover lg:object-right"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-black/20 z-0" />
          <div className="hidden lg:flex absolute right-[2%] top-[3%] flex-col items-center justify-center gap-4 bg-white px-3 py-3 rounded-lg">
            <div>{svg.x()}</div>
            <div>{svg.tele()}</div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative px-5 lg:pl-20 py-10 pt-24">
            <motion.div
              className="grid grid-cols-1 gap-4 text-lg lg:text-[18px]"
              initial="hidden"
              animate="visible"
              variants={heroSectionVariants}
            >
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                variants={heroItemVariants}
              >
                <motion.div
                  className="bg-white text-red-600 pl-1 pr-5 py-1 rounded-md flex items-center font-font-2-bold"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="w-7 h-full bg-[#00FF37] rounded-md mr-2"></span>
                  DONATION FEED IS LIVE
                </motion.div>
                <motion.div
                  className="bg-white text-red-600 pl-1 pr-5 py-1 rounded-md flex items-center font-font-2-bold"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="w-7 h-full bg-[#00FF37] rounded-md mr-2"></span>
                  MEOW FUND SOCIAL IS LIVE
                </motion.div>
              </motion.div>
              <motion.div
                className="bg-[#4AA76C] text-white py-1 px-6 rounded-lg !font-black text-center"
                variants={heroItemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                139% STAKING REWARDS
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-start"
              initial="hidden"
              animate="visible"
              variants={heroSectionVariants}
            >
              <div className="text-white w-full lg:max-w-2xl">
                <motion.div
                  className="flex flex-row items-start justify-start gap-4 mb-2 mt-9"
                  variants={heroItemVariants}
                >
                  <div className="text-3xl lg:text-5xl font-font-2-extra-bold">
                    PETFUND SOCIALFI
                  </div>
                </motion.div>
                <motion.div
                  className="text-lg lg:text-2xl mb-4 font-font-2-bold"
                  variants={heroItemVariants}
                >
                  [ $PETF: THE BEST CRYPTO PRESALE ]
                </motion.div>
                <motion.div
                  className="mb-1 font-font-2-extra-bold uppercase w-2/3"
                  variants={heroItemVariants}
                >
                  <span className="text-green-400">$PETF</span> goes beyond the
                  best crypto presale in 2025. Meow Fund unites cat lovers on a
                  SocialFi platform to fund rescues in war zones.
                </motion.div>

                <motion.div
                  className="bg-white text-black rounded-lg p-8 mt-10 w-full lg:w-4/5"
                  variants={heroCardVariants}
                  whileHover={{
                    boxShadow: "0px 10px 30px rgba(74, 167, 108, 0.2)",
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="text-green-500 text-3xl font-font-2-bold text-center mb-4 uppercase">
                    $PETF Presale is live
                  </div>
                  <div className="text-center mb-8">
                    You can now claim your $PETF tokens. Plus, stake your tokens
                    to earn rewards! Add 0xEfC814a4C676a7314a13
                    <br className="lg:hidden" />
                    954e283dE6CEF597e6b2 to your wallet to see your $PETF.
                  </div>
                  <div className="text-xl font-font-2-extra-bold text-center mb-6">
                    USDT RAISED: $12,748,563.16
                  </div>
                  <motion.div
                    className="flex font-font-2-extra-bold justify-center items-center gap-5 mb-2 px-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>MY PURCHASED $PETF = 0</div>
                    <div>{svg.head_important_icon()}</div>
                  </motion.div>
                  <motion.div
                    className="flex font-font-2-extra-bold justify-center items-center gap-5 mb-6 px-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>MY STAKEABLE $PETF = 0</div>
                    <div>{svg.head_important_icon()}</div>
                  </motion.div>
                  {/* <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl mb-3">
                    CONNECT WALLET
                  </button>
                  <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl mb-4">
                    BUY ON UNISWAP
                  </button> */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <button className="button-2 !text-2xl font-font-2-extra-bold">
                      CONNECT WALLET
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <button className="button-3 !text-2xl font-font-2-extra-bold">
                      BUY ON UNISWAP
                    </button>
                  </motion.div>
                  <motion.div
                    className="text-center mt-2 underline cursor-pointer"
                    whileHover={{ scale: 1.05, color: "#4AA76C" }}
                    transition={{ duration: 0.2 }}
                  >
                    DON&apos;T HAVE A WALLET?
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-center justify-center gap-2 text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Powered by {svg.head_powerBy()}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-5 pb-20 flex flex-col items-center text-center text-white w-full lg:w-[78%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="text-lg mb-4 font-font-2-bold">
                TRUST AND SAFETY AUDITS
              </div>
              <div className="flex justify-center gap-3 lg:gap-6 px-3 lg:px-0">
                <motion.div
                  className="bg-white rounded-lg px-4 py-1.5 flex items-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>{svg.head_trust_1()}</div>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg px-4 py-1.5 flex items-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>{svg.head_trust_2()}</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative flex flex-col justify-start pt-0 lg:pt-56 pb-10 lg:pb-48 px-5 lg:px-0 lg:pr-14 gap-5">
            {selectedOption === 3 && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentPanelVariants}
                key="how-to-buy"
              >
                <motion.div
                  className="text-white text-5xl font-font-2-extra-bold uppercase mb-20 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  [how to buy $petf crypto presale]
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div
                    className="bg-[#4AA76C] text-white rounded-lg p-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="text-2xl font-font-2-extra-bold uppercase mb-5">
                      1. GET WALLET
                    </div>
                    <div className="">
                      You will require a wallet to hold your $PETF presale
                      tokens. We recommend Best Wallet, where you can easily
                      view your token balance after purchasing.
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-[#4AA76C] text-white rounded-lg p-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="text-2xl font-font-2-extra-bold uppercase mb-5">
                      2. ADD CRYPTO
                    </div>
                    <div className="">
                      To buy $PETF, use whichever exchange you like to send ETH,
                      BNB or USDT into your wallet. Paying by card? Skip this
                      step, but you&apos;ll still need a wallet.
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-[#4AA76C] text-white rounded-lg p-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="text-2xl font-font-2-extra-bold uppercase mb-5">
                      3. STAKE
                    </div>
                    <div className="">
                      Only $PETF crypto presale buyers can stake their tokens
                      ahead of the market and earn the biggest rewards. Stake
                      your $PETF to unlock early access to our revenue-sharing
                      program — get in early and maximize your share!
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {selectedOption === 1 && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentPanelVariants}
                key="about"
              >
                <motion.div
                  className="text-white text-5xl font-font-2-extra-bold uppercase mb-20 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  [ABOUT PET FUND]
                </motion.div>
                <motion.div
                  className="text-2xl font-font-2 text-white text-justify"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      duration: 0.8,
                    },
                  }}
                >
                  Pet Fund is a groundbreaking Web3 SocialFi platform emerging
                  from a decade-long legacy as a Web2 data analytics company.
                  Having generated millions in revenue by selling anonymized
                  consumer insights to Fortune 500 brands, we bring proven
                  expertise to the crypto space. Launched on July 26, 2025, Pet
                  Fund pivots this success to empower pet lovers, rewarding them
                  for their data while funding cat rescues in war-torn regions
                  like Ukraine and Syria. With a $500,000 presale of the $PETF
                  token, we combine trust, transparency, and community to make a
                  lasting impact.
                </motion.div>
              </motion.div>
            )}

            {selectedOption === 0 && (
              <motion.div
                className="w-full lg:w-3/4 mx-auto bg-white rounded-3xl shadow-2xl p-8 font-sans"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentPanelVariants}
                key="home"
                whileHover={{ boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-4xl font-bold text-[#4AA76C] tracking-wide">
                    BUY $PETF
                  </h1>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-gray-600 text-sm font-medium mb-1">
                      Total tokens Sold
                    </div>
                    <div className="text-[#4AA76C] text-lg font-bold">
                      {formatNumber(tokenData.totalTokensSold)}
                    </div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-gray-600 text-sm font-medium mb-1">
                      Current Price
                    </div>
                    <div className="text-[#4AA76C] text-lg font-bold">
                      ${tokenData.currentPrice.toFixed(3)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600 text-sm font-medium mb-1">
                      Next Price
                    </div>
                    <div className="text-[#4AA76C] text-lg font-bold">
                      ${tokenData.nextPrice.toFixed(3)}
                    </div>
                  </div>
                </motion.div>

                <motion.hr
                  className="border-gray-300 mb-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                />

                {/* Amount Raised */}
                <motion.div
                  className="flex justify-between items-center mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-gray-800 font-medium">
                    Amount Raised
                  </span>
                  <span className="text-[#4AA76C] text-2xl font-bold">
                    ${formatNumber(tokenData.amountRaised)}
                  </span>
                </motion.div>

                {/* Phase Progress */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="rounded-xl p-3 border border-[#4AA76C]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">Phase 1</span>
                      <span className="text-gray-700 font-bold">
                        {tokenData.phaseProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-[#4AA76C] h-3 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${tokenData.phaseProgress}%` }}
                        transition={{
                          delay: 0.8,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Current Phase Info */}
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="text-gray-700">Current Phase: </span>
                  <span className="text-[#4AA76C] font-bold">
                    ${formatNumber(tokenData.currentPhaseRaised)}
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    /${formatNumber(tokenData.totalPhaseTarget)}
                  </span>
                </motion.div>

                <motion.hr
                  className="border-gray-300 mb-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.0 }}
                />

                {/* Currency Selection */}
                <motion.div
                  className="grid grid-cols-4 gap-2 mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.1,
                      },
                    },
                  }}
                >
                  {currencies.map((currency) => (
                    <motion.button
                      key={currency.code}
                      onClick={() => setSelectedCurrency(currency.code)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        selectedCurrency === currency.code
                          ? "bg-[#4AA76C] text-white border-[#4AA76C]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#4AA76C]"
                      }`}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>{currency.icon}</span>
                        <span>{currency.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>

                <motion.hr
                  className="border-gray-300 mb-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.3 }}
                />

                {/* Purchase Amount Input */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-800 font-medium">
                      Purchase Amount
                    </span>
                    <span className="text-gray-600">{selectedCurrency}</span>
                  </div>
                  <div className="relative">
                    <motion.input
                      type="text"
                      value={purchaseAmount}
                      onChange={handlePurchaseAmountChange}
                      className="w-full text-4xl font-bold text-[#4AA76C] bg-transparent border-none outline-none text-center"
                      placeholder="0.00"
                      whileFocus={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>

                <motion.hr
                  className="border-gray-300 mb-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.5 }}
                />

                {/* Results */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <motion.div
                    className="border-2 border-gray-300 rounded-lg p-4"
                    whileHover={{
                      borderColor: "#4AA76C",
                      boxShadow: "0px 4px 10px rgba(74, 167, 108, 0.1)",
                    }}
                  >
                    <div className="text-gray-600 text-sm font-medium mb-2">
                      Amount You&apos;ll Get
                    </div>
                    <div className="text-[#4AA76C] text-3xl font-bold">
                      {calculateTokensReceived().toFixed(2)}
                    </div>
                  </motion.div>
                  <motion.div
                    className="border-2 border-gray-300 rounded-lg p-4"
                    whileHover={{
                      borderColor: "#4AA76C",
                      boxShadow: "0px 4px 10px rgba(74, 167, 108, 0.1)",
                    }}
                  >
                    <div className="text-gray-600 text-sm font-medium mb-2">
                      USDT Worth
                    </div>
                    <div className="text-[#4AA76C] text-3xl font-bold">
                      {calculateUSDTWorth().toFixed(2)}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Purchase Button */}
                <motion.button
                  className="w-full bg-[#4AA76C] hover:bg-[#4AA76C] text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg"
                  onClick={() => {
                    // Handle purchase logic here
                    console.log(
                      `Purchasing ${purchaseAmount} ${selectedCurrency} worth of $PETF tokens`
                    );
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 8px 15px rgba(74, 167, 108, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy Now
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* onClick=
      {() => {
        copy("0x2858E541f108161aC2A9ba301f52F515BeEBa3C3");
        toast.success("Copied!");
      }} */}
      {open && (
        <motion.div
          className="fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-white shadow-md z-20"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            onClick={() => setOpen(!open)}
            className="text-black text-2xl flex justify-end pr-10 pt-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p>X</p>
          </motion.div>
          <motion.ul
            className="flex flex-col space-y-10 py-10 px-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="font-normal text-xl text-black"
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <motion.div
                  onClick={() => {
                    scrollToSection(index);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.div>
              </motion.li>
            ))}
            <motion.li
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <div>
                <motion.button
                  className="button !font-bold !m-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY $PETF
                </motion.button>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
}
