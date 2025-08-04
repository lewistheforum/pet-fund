"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, bsc } from "wagmi/chains";
import { http } from "wagmi";

// Custom chains with PublicNode RPC endpoints
const customMainnet = {
  ...mainnet,
  rpcUrls: {
    default: {
      http: ["https://ethereum-rpc.publicnode.com"],
    },
    public: {
      http: ["https://ethereum-rpc.publicnode.com"],
    },
  },
};

const customBsc = {
  ...bsc,
  rpcUrls: {
    default: {
      http: ["https://bsc-rpc.publicnode.com"],
    },
    public: {
      http: ["https://bsc-rpc.publicnode.com"],
    },
  },
};

export const wagmiConfig = getDefaultConfig({
  appName: "PET FUND",
  projectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "YOUR_PROJECT_ID", // You need to get this from WalletConnect
  chains: [customMainnet, customBsc],
  transports: {
    [customMainnet.id]: http("https://ethereum-rpc.publicnode.com"),
    [customBsc.id]: http("https://bsc-rpc.publicnode.com"),
  },
  ssr: true,
});
