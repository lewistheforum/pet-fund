"use client";

import svg from "@/utils/svg";
import React, { useState, useMemo, useCallback } from "react";
// import { useCopyToClipboard } from "usehooks-ts";
// import toast from "react-hot-toast";
import bg from "../../public/head/head-bg.png";
import logo from "../../public/head/head-logo.png";
import "@/styles/button.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { DATA } from "@/utils/data";

// Wallet imports
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { mainnet, bsc } from "wagmi/chains";

interface TokenData {
  totalTokensSold: number;
  currentPrice: number;
  nextPrice: number;
  amountRaised: number;
  phaseProgress: number;
  currentPhaseRaised: number;
  totalPhaseTarget: number;
}

interface SupplyData {
  date: string;
  value: number;
  highlighted?: boolean;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [, copy] = useCopyToClipboard();
  const [selectedOption, setSelectedOption] = useState(0);

  // New states for 4-step buy process
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [purchaseAmountNew, setPurchaseAmountNew] = useState<string>("");

  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [showWalletOptions, setShowWalletOptions] = useState<boolean>(false);

  // Wallet hooks
  // EVM wallet hooks (Wagmi)
  const {
    address: evmAddress,
    isConnected: isEvmConnected,
    chain,
  } = useAccount();
  const { connect: evmConnect, connectors } = useConnect();
  const { disconnect: evmDisconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  // Solana wallet hooks
  const {
    publicKey: solanaAddress,
    connected: isSolanaConnected,
    disconnect: solanaDisconnect,
  } = useWallet();
  const { setVisible: setSolanaModalVisible } = useWalletModal();

  // const [isHeaderScrolling, setIsHeaderScrolling] = useState(true);
  // const lastScrollY = useRef(0);
  // const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // For header scroll animations
  // const { scrollY } = useScroll();
  // const headerShadow = useTransform(
  //   scrollY,
  //   [0, 100],
  //   ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 5px 15px rgba(0, 0, 0, 0.1)"]
  // );

  // Create section transition animation variants
  const sectionTransitionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Handle section navigation on scroll
  // useEffect(() => {
  //   let isScrolling = false;

  //   // Detect wheel events for more precise control
  //   const handleWheel = (e: WheelEvent) => {
  //     // If not in header scrolling mode, return early
  //     if (!isHeaderScrolling) {
  //       if (window.scrollY < 100) {
  //         setIsHeaderScrolling(true);
  //       }
  //       return;
  //     }

  //     // Prevent default only while in header scrolling mode
  //     e.preventDefault();

  //     if (isScrolling) return;
  //     isScrolling = true;

  //     const scrollDirection = e.deltaY > 0 ? "down" : "up";

  //     if (scrollDirection === "down") {
  //       setSelectedOption((prev) => {
  //         // If we've reached the last option, allow normal scrolling
  //         if (prev >= 5) {
  //           setIsHeaderScrolling(false);
  //           return prev;
  //         }
  //         // Skip from index 2 to index 4 when scrolling down
  //         if (prev === 1) {
  //           return 3;
  //         }
  //         return Math.min(prev + 1, 5);
  //       });
  //     } else {
  //       setSelectedOption((prev) => {
  //         // If we've reached the first option and scrolling up, allow normal scrolling
  //         if (prev <= 0) {
  //           return prev;
  //         }
  //         // Skip from index 4 to index 2 when scrolling up
  //         if (prev === 3) {
  //           return 1;
  //         }
  //         return Math.max(prev - 1, 0);
  //       });
  //     }

  //     // Add timeout to prevent rapid scrolling through sections
  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 700);
  //   };

  //   // Handle regular scroll for mobile/touch devices
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Only for detecting when to re-enable header scrolling
  //     if (!isHeaderScrolling && currentScrollY < 100) {
  //       setIsHeaderScrolling(true);
  //     }

  //     lastScrollY.current = currentScrollY;
  //   };

  //   // Use wheel event for desktop and scroll for mobile
  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("scroll", handleScroll);
  //     if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
  //   };
  // }, [isHeaderScrolling]);

  // Reset header scrolling when user clicks on a navigation item
  const handleNavClick = (option: number) => {
    setSelectedOption(option);
    // setIsHeaderScrolling(true);
  };

  const tokenData: TokenData = {
    totalTokensSold: 28000000,
    currentPrice: 0.001,
    nextPrice: 0.001,
    amountRaised: 30000000,
    phaseProgress: 81.25,
    currentPhaseRaised: 25875855,
    totalPhaseTarget: 30000000,
  };

  // Networks and tokens for the new buy flow
  const networks = [
    {
      code: "SOLANA",
      name: "Solana",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#9945FF" />
          <path
            d="M8.5 16.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7z"
            fill="white"
          />
          <path
            d="M6.5 14c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h11c.28 0 .5.22.5.5s-.22.5-.5.5h-11z"
            fill="white"
          />
          <path
            d="M8.5 11.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      code: "ETHEREUM",
      name: "Ethereum",
      icon: svg.head_eth(),
    },
    {
      code: "BSC",
      name: "BSC",
      icon: svg.head_bnb(),
    },
  ];

  const tokens = useMemo(
    () => [
      {
        code: "SOL",
        name: "SOL",
        networks: ["SOLANA"],
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#9945FF" />
            <path
              d="M8.5 16.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7z"
              fill="white"
            />
            <path
              d="M6.5 14c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h11c.28 0 .5.22.5.5s-.22.5-.5.5h-11z"
              fill="white"
            />
            <path
              d="M8.5 11.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7z"
              fill="white"
            />
          </svg>
        ),
      },
      {
        code: "ETH",
        name: "ETH",
        networks: ["ETHEREUM"],
        icon: svg.head_eth(),
      },
      {
        code: "BNB",
        name: "BNB",
        networks: ["BSC"],
        icon: svg.head_bnb(),
      },
      {
        code: "USDT",
        name: "USDT",
        networks: ["ETHEREUM", "BSC"],
        icon: svg.head_usdt(),
      },
      {
        code: "USDC",
        name: "USDC",
        networks: ["ETHEREUM", "BSC"],
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#2775CA" />
            <text
              x="12"
              y="16"
              fontSize="10"
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              $
            </text>
          </svg>
        ),
      },
    ],
    []
  );

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  // Helper functions for the new buy flow
  const handleNetworkSelect = useCallback((networkCode: string) => {
    setSelectedNetwork(networkCode);
    setSelectedToken(""); // Reset token when network changes
    // Reset wallet connection will be handled by real wallet state
    setSelectedWallet(""); // Reset selected wallet
    setShowWalletOptions(false); // Hide wallet options
    setCurrentStep(2);
  }, []);

  const handleTokenSelect = useCallback((tokenCode: string) => {
    setSelectedToken(tokenCode);
    setCurrentStep(3);
  }, []);

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setPurchaseAmountNew(value);
      }
    },
    []
  );

  const handleNextStep = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const handlePreviousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const connectWallet = useCallback(
    async (walletType?: string) => {
      const wallet = walletType || selectedWallet;

      try {
        if (selectedNetwork === "SOLANA") {
          // Solana wallet connection
          setSolanaModalVisible(true);
          setSelectedWallet(wallet);
          setShowWalletOptions(false);
        } else {
          // EVM wallet connection (Ethereum/BSC)
          const targetChainId =
            selectedNetwork === "ETHEREUM" ? mainnet.id : bsc.id;

          // Find the right connector
          let connector;
          if (wallet === "MetaMask") {
            connector = connectors.find(
              (c) => c.id === "metaMask" || c.name.includes("MetaMask")
            );
          } else if (wallet === "WalletConnect") {
            connector = connectors.find((c) => c.id === "walletConnect");
          } else if (wallet === "Coinbase Wallet") {
            connector = connectors.find((c) => c.id === "coinbaseWallet");
          } else if (wallet === "Trust Wallet") {
            connector = connectors.find((c) => c.name.includes("Trust"));
          }

          if (connector) {
            await evmConnect({ connector });

            // Switch to correct network if needed
            if (chain?.id !== targetChainId) {
              await switchChain({ chainId: targetChainId });
            }

            setSelectedWallet(wallet);
            setShowWalletOptions(false);
            console.log(`Connected ${wallet} wallet for ${selectedNetwork}`);
          }
        }
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    },
    [
      selectedNetwork,
      selectedWallet,
      setSolanaModalVisible,
      evmConnect,
      connectors,
      chain,
      switchChain,
    ]
  );

  const showWalletSelector = useCallback(() => {
    setShowWalletOptions(true);
  }, []);

  // Helper function to check if wallet is connected for current network
  const isWalletConnectedForNetwork = useCallback(() => {
    if (selectedNetwork === "SOLANA") {
      return isSolanaConnected && solanaAddress;
    } else {
      // For EVM networks (Ethereum/BSC)
      const targetChainId =
        selectedNetwork === "ETHEREUM" ? mainnet.id : bsc.id;
      return (
        isEvmConnected && evmAddress && (!chain || chain.id === targetChainId)
      );
    }
  }, [
    selectedNetwork,
    isSolanaConnected,
    solanaAddress,
    isEvmConnected,
    evmAddress,
    chain,
  ]);

  // Helper function to get current wallet address
  const getCurrentWalletAddress = useCallback(() => {
    if (selectedNetwork === "SOLANA") {
      return solanaAddress?.toString();
    } else {
      return evmAddress;
    }
  }, [selectedNetwork, solanaAddress, evmAddress]);

  // Helper function to disconnect wallet
  const disconnectWallet = useCallback(async () => {
    try {
      if (selectedNetwork === "SOLANA" && isSolanaConnected) {
        await solanaDisconnect();
      } else if (isEvmConnected) {
        await evmDisconnect();
      }

      setSelectedWallet("");
      setShowWalletOptions(false);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  }, [
    selectedNetwork,
    isSolanaConnected,
    isEvmConnected,
    solanaDisconnect,
    evmDisconnect,
  ]);

  const getWalletOptions = useCallback(() => {
    switch (selectedNetwork) {
      case "SOLANA":
        return [
          {
            name: "Phantom",
            icon: "🟣",
            description: "Popular Solana wallet",
          },
          {
            name: "Solflare",
            icon: "🌟",
            description: "Multi-platform Solana wallet",
          },
          {
            name: "Backpack",
            icon: "🎒",
            description: "Modern Solana wallet",
          },
        ];
      case "ETHEREUM":
        return [
          {
            name: "MetaMask",
            icon: "🦊",
            description: "Most popular Ethereum wallet",
          },
          {
            name: "WalletConnect",
            icon: "🔗",
            description: "Connect multiple wallets",
          },
          {
            name: "Coinbase Wallet",
            icon: "🔵",
            description: "Coinbase's self-custody wallet",
          },
        ];
      case "BSC":
        return [
          {
            name: "MetaMask",
            icon: "🦊",
            description: "Configure for BSC network",
          },
          {
            name: "Trust Wallet",
            icon: "🛡️",
            description: "Binance's official wallet",
          },
          {
            name: "WalletConnect",
            icon: "🔗",
            description: "Connect multiple wallets",
          },
        ];
      default:
        return [];
    }
  }, [selectedNetwork]);

  const handleBuy = useCallback(() => {
    const isConnected = isWalletConnectedForNetwork();
    if (isConnected && purchaseAmountNew && selectedToken) {
      const walletAddress = getCurrentWalletAddress();
      console.log(
        `Buying ${purchaseAmountNew} ${selectedToken} on ${selectedNetwork} with wallet ${walletAddress}`
      );
      // Buy logic would go here
    }
  }, [
    isWalletConnectedForNetwork,
    getCurrentWalletAddress,
    purchaseAmountNew,
    selectedToken,
    selectedNetwork,
  ]);

  const getAvailableTokens = useCallback(() => {
    return tokens.filter((token) => token.networks.includes(selectedNetwork));
  }, [selectedNetwork, tokens]);

  const getStepTitle = useCallback(() => {
    switch (currentStep) {
      case 1:
        return "Select Network";
      case 2:
        return "Choose Token";
      case 3:
        return "Enter Amount";
      case 4:
        return "Connect & Buy";
      default:
        return "";
    }
  }, [currentStep]);

  const generateData = (): SupplyData[] => {
    const data: SupplyData[] = [];
    // Increase starting value and make bigger jumps for visible columns
    const baseValue = 100000;
    const minIncrement = 20000;
    const maxRandomFactor = 40000;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11 for Jan-Dec

    let previousValue = baseValue;

    for (let i = 0; i < 12; i++) {
      // Create date for the month (i+1)
      const monthDate = new Date(currentDate.getFullYear(), i, 1);

      // Calculate value with randomness but ensure overall upward trend
      const randomFactor = Math.random() * maxRandomFactor;

      // Use a multiplier for later months to ensure growth
      const growthMultiplier = 1 + i * 0.25;

      // Ensure we have at least minIncrement increase from previous month
      const increment = (minIncrement + randomFactor) * growthMultiplier;
      const value = previousValue + increment;
      previousValue = value;

      data.push({
        date: `${String(monthDate.getMonth() + 1).padStart(
          2,
          "0"
        )}/${monthDate.getFullYear()}`,
        value: Math.round(value),
        highlighted: i === currentMonth, // Highlight current month
      });
    }

    return data;
  };

  const data = generateData();
  const maxValue = Math.max(...data.map((d) => d.value)); // Calculate max from actual data

  // Y-axis labels
  const yAxisLabels = ["0", "100K", "200K", "300K", "400K", "500K", "600K"];
  const yAxisValues = [0, 100000, 200000, 300000, 400000, 500000, 600000];

  // Header motion variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
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

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Social icons animation variants
  const socialIconsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
        delay: 0.7,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(74, 167, 108, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Mobile menu button variants
  const menuButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
      rotate: -5,
    },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Mobile menu item variants
  const mobileMenuItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      x: 10,
      color: "#4AA76C",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Hero section animation variants

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
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // const heroCardVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 15,
  //       delay: 0.4,
  //     },
  //   },
  // };

  // Trust badge animation variants
  const trustBadgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  // Connect wallet button variants
  const connectButtonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.9,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(74, 167, 108, 0.35)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Feature item variants
  const featureItemContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Staking section animation variants
  const stakingDescriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const stakingColumnsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        when: "beforeChildren",
      },
    },
  };

  const stakingColumnVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0px 10px 25px rgba(74, 167, 108, 0.15)",
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const chartContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 1.0,
        when: "beforeChildren",
      },
    },
  };

  const chartElementsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 1.2,
      },
    },
  };

  const chartAxisVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const chartBarVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (custom: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: custom * 0.05,
      },
    }),
  };

  // Memoize the content sections to prevent re-rendering when selectedOption changes
  const memoizedHomeSection = useMemo(
    () => (
      <div className="col-span-12 lg:col-span-6 relative flex flex-col justify-start pt-0 lg:pt-10 pb-10 lg:pb-0 px-5 lg:px-0 lg:pr-14 gap-5">
        <>
          <motion.div
            className="w-full lg:w-3/4 mx-auto border border-[#4AA76C] rounded-xl shadow-2xl px-8 py-3 font-sans"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sectionTransitionVariants}
            key="header-panel"
            whileHover={{
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <div>{svg.head_petf()}</div>
                <div className="text-2xl font-font-2-extra-bold text-[#4AA76C]">
                  1 $PETF = 0.008
                </div>
              </div>
              <div>{svg.head_petfoot()}</div>
              <div className="text-lg font-font-2 text-white">
                Target Price: $0.01
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-3/4 mx-auto bg-white rounded-xl shadow-2xl px-8 pb-8 pt-4 font-sans"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sectionTransitionVariants}
            key="content-panel"
            whileHover={{
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
            }}
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
              <span className="text-gray-800 font-medium">Amount Raised</span>
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

            {/* New 4-Step Buy Process */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {/* Simplified Step Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  {[
                    { step: 1, icon: "⚡", label: "Network" },
                    { step: 2, icon: "○", label: "Token" },
                    { step: 3, icon: "#", label: "Amount" },
                    { step: 4, icon: "□", label: "Buy" },
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded border-2 flex items-center justify-center text-sm font-bold ${
                          item.step <= currentStep
                            ? "bg-[#4AA76C] text-white border-[#4AA76C]"
                            : "bg-white text-gray-400 border-gray-300"
                        }`}
                      >
                        {item.step <= currentStep ? "✓" : item.step}
                      </div>
                      <span
                        className={`ml-2 text-sm font-medium ${
                          item.step <= currentStep
                            ? "text-[#4AA76C]"
                            : "text-gray-400"
                        }`}
                      >
                        {item.label}
                      </span>
                      {index < 3 && (
                        <div className="flex-1 mx-2 h-px bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-black mb-4">
                    Select Network
                  </h4>

                  <div className="grid grid-cols-3 gap-2">
                    {networks.map((network) => (
                      <button
                        key={network.code}
                        onClick={() => handleNetworkSelect(network.code)}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          selectedNetwork === network.code
                            ? "border-[#4AA76C] bg-[#4AA76C] text-white"
                            : "border-gray-200 bg-white text-black hover:border-gray-300"
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`w-8 h-8 rounded flex items-center justify-center ${
                              selectedNetwork === network.code
                                ? "bg-white/20"
                                : "bg-gray-100"
                            }`}
                          >
                            {network.icon}
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-sm">
                              {network.name}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-black">
                      Select Token
                    </h4>
                    <span className="text-sm text-gray-500">
                      {selectedNetwork}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {getAvailableTokens().map((token) => (
                      <button
                        key={token.code}
                        onClick={() => handleTokenSelect(token.code)}
                        className={`flex-1 p-2 border-2 rounded-lg transition-all ${
                          selectedToken === token.code
                            ? "border-[#4AA76C] bg-[#4AA76C] text-white"
                            : "border-gray-200 bg-white text-black hover:border-gray-300"
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-1">
                          <div
                            className={`w-6 h-6 rounded flex items-center justify-center ${
                              selectedToken === token.code
                                ? "bg-white/20"
                                : "bg-gray-100"
                            }`}
                          >
                            {token.icon}
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-xs">
                              {token.name}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handlePreviousStep}
                    className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all"
                  >
                    ← Back
                  </button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-black">Enter Amount</h4>

                  {/* Amount Input */}
                  <div className="space-y-3">
                    <div className="border-2 border-gray-200 rounded-lg p-4 focus-within:border-[#4AA76C]">
                      <input
                        type="text"
                        value={purchaseAmountNew}
                        onChange={handleAmountChange}
                        className="w-full text-2xl font-bold text-black bg-transparent outline-none text-center"
                        placeholder="0.00"
                      />
                      <div className="text-center mt-1 text-gray-500">
                        {selectedToken}
                      </div>
                    </div>

                    {/* Quick Amounts */}
                    <div className="grid grid-cols-3 gap-2">
                      {["0.1", "0.5", "1.0"].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setPurchaseAmountNew(amount)}
                          className="py-2 px-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  {purchaseAmountNew &&
                    !isNaN(parseFloat(purchaseAmountNew)) && (
                      <div className="bg-gray-50 border rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">
                          You will receive:
                        </div>
                        <div className="text-xl font-bold text-[#4AA76C]">
                          {(
                            parseFloat(purchaseAmountNew) /
                            tokenData.currentPrice
                          ).toFixed(2)}{" "}
                          $PETF
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Price: ${tokenData.currentPrice} • Total:{" "}
                          {purchaseAmountNew} {selectedToken}
                        </div>
                      </div>
                    )}

                  {/* Navigation */}
                  <div className="flex space-x-3">
                    <button
                      onClick={handlePreviousStep}
                      className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={
                        !purchaseAmountNew ||
                        isNaN(parseFloat(purchaseAmountNew))
                      }
                      className={`flex-2 py-2 px-6 rounded-lg font-semibold ${
                        purchaseAmountNew &&
                        !isNaN(parseFloat(purchaseAmountNew))
                          ? "bg-[#4AA76C] text-white hover:bg-[#3d8c5a]"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-black">BUY $PETF</h4>

                  {/* Order Summary */}
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <h5 className="font-semibold text-black mb-3">
                      Order Summary
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Network:</span>
                        <span className="font-semibold text-black">
                          {selectedNetwork}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Token:</span>
                        <span className="font-semibold text-black">
                          {selectedToken}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-semibold text-black">
                          {purchaseAmountNew} {selectedToken}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-gray-600">
                          You&apos;ll receive:
                        </span>
                        <span className="font-bold text-[#4AA76C]">
                          {purchaseAmountNew &&
                          !isNaN(parseFloat(purchaseAmountNew))
                            ? (
                                parseFloat(purchaseAmountNew) /
                                tokenData.currentPrice
                              ).toFixed(2)
                            : "0.00"}{" "}
                          $PETF
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Connection */}
                  {!isWalletConnectedForNetwork() ? (
                    !showWalletOptions ? (
                      <button
                        onClick={showWalletSelector}
                        className="w-full bg-[#4AA76C] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#3d8c5a] transition-all"
                      >
                        Connect Wallet
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <h5 className="font-semibold text-black">
                          Choose Wallet:
                        </h5>
                        {getWalletOptions().map((wallet) => (
                          <button
                            key={wallet.name}
                            onClick={() => connectWallet(wallet.name)}
                            className="w-full p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-[#4AA76C] transition-all flex items-center space-x-3"
                          >
                            <span className="text-lg">{wallet.icon}</span>
                            <span className="font-semibold text-black">
                              {wallet.name}
                            </span>
                          </button>
                        ))}
                        <button
                          onClick={() => setShowWalletOptions(false)}
                          className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                        >
                          ← Back
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="space-y-3">
                      {/* Connected State */}
                      <div className="bg-green-50 border border-[#4AA76C] rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-black">
                              ✓ {selectedWallet} Connected
                            </div>
                            <div className="text-sm text-gray-600 font-mono">
                              {getCurrentWalletAddress()?.slice(0, 8)}...
                              {getCurrentWalletAddress()?.slice(-6)}
                            </div>
                          </div>
                          <button
                            onClick={disconnectWallet}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Disconnect
                          </button>
                        </div>
                      </div>

                      {/* Buy Button */}
                      <button
                        onClick={handleBuy}
                        className="w-full bg-[#4AA76C] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#3d8c5a] transition-all text-lg"
                      >
                        BUY $PETF TOKENS
                      </button>
                    </div>
                  )}

                  <button
                    onClick={handlePreviousStep}
                    className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    ← Back
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-5 pb-20 flex flex-col items-center text-center text-white w-full lg:w-[100%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="text-lg mb-4 font-font-2-bold">
              TRUST AND SAFETY AUDITS
            </div>
            <motion.div
              className="flex justify-center gap-3 lg:gap-6 px-3 lg:px-0"
              variants={trustBadgeContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="bg-white rounded-lg px-4 py-1.5 flex items-center"
                variants={trustBadgeVariants}
                whileHover="hover"
              >
                <div>{svg.head_trust_1()}</div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg px-4 py-1.5 flex items-center"
                variants={trustBadgeVariants}
                whileHover="hover"
              >
                <div>{svg.head_trust_2()}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      currentStep,
      selectedNetwork,
      selectedToken,
      purchaseAmountNew,
      isEvmConnected,
      isSolanaConnected,
      evmAddress,
      solanaAddress,
      chain,
      selectedWallet,
      showWalletOptions,
      tokenData.currentPrice,
      tokenData.totalTokensSold,
      tokenData.nextPrice,
      tokenData.amountRaised,
      tokenData.phaseProgress,
      tokenData.currentPhaseRaised,
      tokenData.totalPhaseTarget,
      handleNetworkSelect,
      handleTokenSelect,
      handleAmountChange,
      handleNextStep,
      handlePreviousStep,
      connectWallet,
      handleBuy,
      getAvailableTokens,
      getStepTitle,
      showWalletSelector,
      getWalletOptions,
      isWalletConnectedForNetwork,
      getCurrentWalletAddress,
      disconnectWallet,
    ]
  ); // Dependencies for the buy process and token data

  // Memoize the home content section
  const memoizedHomeContent = useMemo(
    () => (
      <div className="col-span-12 lg:col-span-6 mx-auto relative px-5 lg:pr-24 py-10 pt-10">
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
              <span className="w-7 h-full bg-[#00FF37] rounded-md mr-2 text-xl"></span>
              DONATION FEED IS LIVE
            </motion.div>
            <motion.div
              className="bg-white text-red-600 pl-1 pr-5 py-1 rounded-md flex items-center font-font-2-bold"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="w-7 h-full bg-[#00FF37] rounded-md mr-2 text-xl"></span>
              MEOW FUND SOCIAL IS LIVE
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-[#4AA76C] text-white py-1 px-6 rounded-lg !font-black text-center text-xl"
            variants={heroItemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            139% STAKING REWARDS
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-col justify-center items-center gap-5"
          initial="hidden"
          animate="visible"
          variants={heroSectionVariants}
        >
          <div className="text-white w-full lg:max-w-2xl flex flex-col justify-center items-center">
            <motion.div
              className="flex flex-row items-start justify-start gap-4 mb-2 mt-9"
              variants={heroItemVariants}
            >
              <div className="text-3xl lg:text-6xl font-font-2-black">
                PETFUND SOCIALFI
              </div>
            </motion.div>
            <motion.div
              className="text-lg lg:text-[27px] mb-4 font-font-2-bold"
              variants={heroItemVariants}
            >
              [ $PETF: THE BEST CRYPTO PRESALE ]
            </motion.div>
            <motion.div
              className="mb-10 font-font-2-extra-bold uppercase w-[84%] text-xl text-justify"
              variants={heroItemVariants}
            >
              <span className="text-green-400">$PETF</span> goes beyond the best
              crypto presale in 2025. Meow Fund unites cat lovers on a SocialFi
              platform to fund rescues in war zones.
            </motion.div>
            <motion.div
              className="w-4/5 relative flex flex-col justify-end pb-20 lg:pb-10 px-5 lg:px-0 gap-5"
              variants={featureItemContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="cursor-pointer text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3"
                variants={featureItemVariants}
                whileHover="hover"
              >
                <div>{svg.head_item_1()}</div>
                <div className="text-[20px] font-font-2-bold">
                  Your donation is protected by our Giving Guarantee
                </div>
              </motion.div>
              <motion.div
                className="cursor-pointer text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3"
                variants={featureItemVariants}
                whileHover="hover"
              >
                <div>{svg.head_item_2()}</div>
                <div className="text-[20px] font-font-2-bold">
                  0% platform fee, 100% to the cause
                </div>
              </motion.div>
              <motion.div
                className="cursor-pointer text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3"
                variants={featureItemVariants}
                whileHover="hover"
              >
                <div>{svg.head_item_3()}</div>
                <div className="text-[20px] font-font-2-bold">
                  Partnered with more than 1000+ nonprofit organisations
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="w-full flex justify-center items-center">
            <motion.button
              className="button-connect font-font-2-extra-bold !text-3xl"
              variants={connectButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              CONNECT WALLET
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ); // Empty dependency array ensures this only renders once

  // Now use the memoized sections in the render function
  return (
    <div className="font-font-2">
      <div className="flex flex-col w-full">
        <motion.div
          className="w-full z-50 sticky top-0"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          // style={{
          //   boxShadow: headerShadow,
          // }}
        >
          <motion.div className="flex flex-row items-center justify-between px-3 sm:px-5 lg:px-20 py-3 bg-white">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="h-10 sm:h-14 w-auto"
              />
            </motion.div>
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-10">
              <motion.div
                className="hidden lg:flex flex-row items-center gap-5"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={navItemVariants}
                  onClick={() => handleNavClick(0)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 0 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [HOME]
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  onClick={() => handleNavClick(1)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 1 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [ABOUT]
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  // onClick={() => handleNavClick(2)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 2 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [TOKENOMICS]
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  onClick={() => handleNavClick(3)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 3 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [HOW TO BUY]
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  onClick={() => handleNavClick(4)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 4 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [FAQ]
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  onClick={() => handleNavClick(5)}
                  className={`text-black hover:bg-[#4AA76C] hover:text-white px-2 py-1 ${
                    selectedOption === 5 ? "!text-white bg-[#4AA76C]" : ""
                  } cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [STACKING]
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-row items-center gap-3 text-black"
                variants={socialIconsVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="cursor-pointer hidden lg:flex"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {svg.dexs()}
                </motion.div>
                <motion.div
                  className="cursor-pointer hidden lg:flex"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {svg.mcap()}
                </motion.div>
                <motion.button
                  className="button !font-bold"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  BUY $PETF
                </motion.button>
                <motion.div
                  className="hidden lg:flex"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {svg.flag()}
                </motion.div>
                <motion.div
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex justify-end"
                  variants={menuButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
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
        {/* <div style={{ paddingTop: "70px" }}></div> */}

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

          {/* Use memoized sections instead of regular JSX */}
          {(selectedOption === 0 ||
            selectedOption === 1 ||
            selectedOption === 3 ||
            selectedOption === 4) &&
            memoizedHomeSection}

          {selectedOption === 0 && memoizedHomeContent}

          {selectedOption === 1 && (
            <div className="col-span-12 lg:col-span-6 mx-auto relative px-5 lg:pr-24 py-10 pt-10">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionTransitionVariants}
                key="about"
              >
                <motion.div
                  className="text-white text-5xl font-font-2-extra-bold uppercase mb-14 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  [ABOUT PET FUND]
                </motion.div>
                <motion.div
                  className="text-2xl font-font-2 text-white text-justify bg-[#4AA76C] rounded-xl px-5 py-3"
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
            </div>
          )}

          {selectedOption === 3 && (
            <div className="col-span-12 lg:col-span-6 mx-auto relative px-5 lg:pr-24 py-10 pt-10">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionTransitionVariants}
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
                    <div className="text-[18px]">
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
                    <div className="text-[18px]">
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
                    <div className="text-[18px]">
                      Only $PETF crypto presale buyers can stake their tokens
                      ahead of the market and earn the biggest rewards. Stake
                      your $PETF to unlock early access to our revenue-sharing
                      program — get in early and maximize your share!
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {selectedOption === 4 && (
            <div className="col-span-12 lg:col-span-6 mx-auto relative px-5 lg:pr-24 py-10 pt-10 h-full">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionTransitionVariants}
                key="faq"
              >
                <motion.div
                  className="text-white text-5xl font-font-2-extra-bold uppercase mb-9 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  [pet fund faq]
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="h-[800px] w-full overflow-y-auto"
                >
                  {DATA.faqData.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-center items-center w-full mb-5"
                    >
                      <motion.div
                        key={`motion-${item.id}`}
                        className="bg-[#4AA76C] text-white rounded-lg p-6 w-full h-full"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        <div className="text-2xl font-font-2-extra-bold mb-5">
                          {item.title}
                        </div>
                        <div className="text-[18px]">{item.answer}</div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}

          {selectedOption === 5 && (
            <div className="col-span-12 lx-auto relative px-5 lg:px-20 lg:pr-28 pt-10 text-white pb-20">
              <motion.div
                className="font-font-2-black text-6xl mb-7"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionTransitionVariants}
                key="staking"
              >
                &#62; Welcome to $PETF STAKING
              </motion.div>
              <motion.div
                className="text-xl uppercase mb-10"
                variants={stakingDescriptionVariants}
                initial="hidden"
                animate="visible"
              >
                Whether during or after the <strong>$PETF</strong> presale, your
                staking rewards will be based on your purchased allocation.
                Backed by real revenue, these rewards will be fully claimable
                once the claiming phase goes live.
              </motion.div>
              <motion.div
                className="flex flex-row justify-between items-center w-full gap-24"
                variants={stakingColumnsContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="border-[2px] border-[#4AA76C] bg-white text-black rounded-xl p-4 w-full"
                  variants={stakingColumnVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col gap-1 mb-5">
                    <div className="font-font-2-extra-bold text-xl">
                      STAKED BALANCE
                    </div>
                    <div className="font-font-2-bold">0 $PETF</div>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="font-font-2-extra-bold text-xl uppercase">
                      Your stakeable
                    </div>
                    <div className="font-font-2-bold">0 $PETF</div>
                  </div>
                  <div>
                    <motion.button
                      className="button-staking !font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      STACKE NOW
                    </motion.button>
                  </div>
                </motion.div>
                <motion.div
                  className="border-[2px] border-[#4AA76C] bg-white text-black rounded-xl p-4 w-full"
                  variants={stakingColumnVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col gap-1 mb-5">
                    <div className="font-font-2-extra-bold text-xl">
                      STAKED BALANCE
                    </div>
                    <div className="font-font-2-bold">0 $PETF</div>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="font-font-2-extra-bold text-xl uppercase">
                      Your stakeable
                    </div>
                    <div className="font-font-2-bold">0 $PETF</div>
                  </div>
                  <div>
                    <motion.button
                      className="button-withdraw-staking !font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      WITHDRAW STAKED TOKENS
                    </motion.button>
                  </div>
                </motion.div>
                <motion.div
                  className="border-[2px] border-[#4AA76C] bg-white text-black rounded-xl p-4 w-full"
                  variants={stakingColumnVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col gap-1 mb-5">
                    <div className="font-font-2-extra-bold text-xl">
                      Total Rewards Pool
                    </div>
                    <div className="font-font-2-bold">
                      Our current Revenue: 200k$
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mb-2 ml-5 font-font-2-bold w-3/4">
                    <div className="flex flex-row items-start gap-2">
                      <div>&#8226;</div> Rewards rate is dynamic
                    </div>
                    <div className="flex flex-row items-start gap-2">
                      <div>&#8226;</div>Your Rewards = (Total Rewards Pool) x
                      (Your % of Pool)
                    </div>
                    <div className="flex flex-row items-start gap-2">
                      <div>&#8226;</div> Daily = Rewards %/ 365
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CHART SUPPLY STATISTICS BY DAY */}
              <motion.div
                className="w-full mt-10 rounded-xl mx-auto p-6 bg-white border-[2px] border-[#4AA76C]"
                variants={chartContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Chart Container */}
                <div className="relative bg-white rounded-lg p-6">
                  {/* Title */}
                  <motion.h2
                    className="text-xl font-bold text-center text-gray-800 mb-8 tracking-wide font-font-2-bold"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.1, duration: 0.5 },
                    }}
                  >
                    REVENUE
                  </motion.h2>

                  {/* Chart Area */}
                  <div className="relative">
                    {/* Y-Axis */}
                    <motion.div
                      className="absolute -left-10 top-0 bottom-12 flex flex-row justify-between items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 1.2, duration: 0.5 },
                      }}
                    >
                      <div className="-rotate-90 text-xl font-bold text-center text-gray-800 mb-0 tracking-wide uppercase font-font-2-bold">
                        Supply
                      </div>
                      <div className="w-12 h-full flex flex-col justify-between text-sm text-gray-600">
                        {yAxisLabels.reverse().map((label, index) => (
                          <motion.div
                            key={index}
                            className="text-right pr-2 -mt-2"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                delay: 1.2 + index * 0.05,
                                duration: 0.3,
                              },
                            }}
                          >
                            {label}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Grid Lines */}
                    <div className="ml-24 relative h-80">
                      {/* Horizontal Grid Lines */}
                      {yAxisValues.map((value, index) => (
                        <motion.div
                          key={index}
                          className="absolute w-full border-t border-gray-300"
                          style={{
                            bottom: `${(value / 600000) * 100}%`,
                          }}
                          variants={chartAxisVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 1.3 + index * 0.05 }}
                        />
                      ))}

                      {/* Vertical Grid Lines */}
                      <motion.div
                        className="absolute inset-0 flex"
                        variants={chartElementsVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {data.map((_, index) => (
                          <motion.div
                            key={index}
                            className="flex-1 border-r border-gray-300 last:border-r-0"
                            variants={chartAxisVariants}
                          />
                        ))}
                      </motion.div>

                      {/* Bars */}
                      <motion.div
                        className="absolute inset-0 flex items-end gap-1 px-1"
                        variants={chartElementsVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {data.map((item, index) => {
                          // Calculate height in pixels based on chart height (320px)
                          const chartHeight = 320;
                          const calculatedHeight =
                            (item.value / maxValue) * chartHeight;
                          const height = Math.max(calculatedHeight, 10);

                          return (
                            <div
                              key={index}
                              className="flex-1 flex justify-center"
                            >
                              <motion.div
                                className={`w-full max-w-[25%] rounded-t-full transition-all duration-300 ${
                                  item.highlighted
                                    ? "bg-[#4AA76C] hover:bg-[#3a8959]"
                                    : "bg-gray-400 hover:bg-gray-500"
                                } relative group`}
                                style={{
                                  height: `${height}px`,
                                  minHeight: "10px",
                                  originY: "bottom",
                                }}
                                title={`${
                                  item.date
                                }: ${item.value.toLocaleString()}`}
                                variants={chartBarVariants}
                                custom={index}
                                whileHover={{ scale: 1.03 }}
                              >
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap">
                                  {item.value.toLocaleString()}
                                </div>
                              </motion.div>
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>

                    {/* X-Axis Labels */}
                    <motion.div
                      className="ml-12 mt-4 flex"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.7, duration: 0.5 },
                      }}
                    >
                      {data.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex-1 text-center text-xs text-gray-600 transform origin-center"
                          style={{ fontSize: "10px" }}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              delay: 1.8 + index * 0.05,
                              duration: 0.3,
                            },
                          }}
                        >
                          <span className="inline-block mt-2">{item.date}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Legend/Info */}
                <motion.div
                  className="mt-4 text-center text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 2.0, duration: 0.5 },
                  }}
                >
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      <span>Regular Supply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#4AA76C] rounded"></div>
                      <span>Current Month</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      {/* onClick=
      {() => {
        copy("0x2858E541f108161aC2A9ba301f52F515BeEBa3C3");
        toast.success("Copied!");
      }} */}
      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-white shadow-md z-20"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            onClick={() => setOpen(!open)}
            className="text-black text-2xl flex justify-end pr-10 pt-5"
            variants={menuButtonVariants}
            whileHover="hover"
            whileTap="tap"
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
            <motion.li variants={mobileMenuItemVariants}>
              <div>
                <motion.button
                  className="button !font-bold !m-0"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
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
