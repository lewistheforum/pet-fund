"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, bsc } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "PET FUND",
  projectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "YOUR_PROJECT_ID", // You need to get this from WalletConnect
  chains: [mainnet, bsc],
  ssr: true,
});
