"use client";

import svg from "@/utils/svg";
import Link from "next/link";
import { useState } from "react";
// import { useCopyToClipboard } from "usehooks-ts";
// import toast from "react-hot-toast";
import bg from "../../public/head/head-bg.png";
import logo from "../../public/head/head-logo.png";
import "@/styles/button.css";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [, copy] = useCopyToClipboard();

  return (
    <div className="text-black font-font-2">
      <div>
        <div className="flex flex-row items-center justify-between px-5 lg:px-20 py-3 bg-white">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-full h-14"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-10">
            <div className="hidden lg:flex flex-row items-center gap-5 text-black">
              <div>[HOME]</div>
              <div>[ABOUT]</div>
              <div>[TOKENOMICS]</div>
              <div>[HOW TO BUY]</div>
              <div>[FAQ]</div>
              <div>[STACKING]</div>
            </div>
            <div className="flex flex-row items-center gap-3 text-black">
              <div className="hidden lg:flex">{svg.dexs()}</div>
              <div className="hidden lg:flex">{svg.mcap()}</div>
              <div>
                <button className="button !font-bold">BUY $MEOF</button>
              </div>
              <div className="hidden lg:flex">{svg.flag()}</div>
              <div
                onClick={() => setOpen(!open)}
                className="md:hidden flex justify-end"
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
              </div>
            </div>
          </div>
        </div>
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
          <div className="col-span-12 lg:col-span-7 relative px-5 lg:pl-20 py-10 pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-lg lg:text-[14px]">
              <div className="bg-white text-red-600 pl-1 pr-5 py-1 rounded-md flex items-center font-font-2-bold">
                <span className="w-5 h-5 bg-[#00FF37] rounded-md mr-2"></span>
                DONATION FEED IS LIVE
              </div>
              <div className="bg-white text-red-600 pl-1 pr-5 py-1 rounded-md flex items-center font-font-2-bold">
                <span className="w-5 h-5 bg-[#00FF37] rounded-md mr-2"></span>
                MEOW FUND SOCIAL IS LIVE
              </div>
              <div className="bg-[#4AA76C] text-white py-1 px-6 rounded-lg !font-black text-center">
                139% STAKING REWARDS
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div className="text-white w-full lg:max-w-2xl">
                <div className="flex flex-row items-start justify-start gap-4 mb-2 mt-9">
                  <div className="text-3xl lg:text-5xl font-font-2-extra-bold">
                    PETFUND SOCIALFI
                  </div>
                </div>
                <div className="text-lg lg:text-2xl mb-4 font-font-2-bold">
                  [ $PETF: THE BEST CRYPTO PRESALE ]
                </div>
                <div className="mb-1 font-font-2-extra-bold uppercase w-2/3">
                  <span className="text-green-400">$PETF</span> goes beyond the
                  best crypto presale in 2025. Meow Fund unites cat lovers on a
                  SocialFi platform to fund rescues in war zones.
                </div>

                <div className="bg-white text-black rounded-lg p-8 mt-10 w-full lg:w-4/5">
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
                  <div className="flex font-font-2-extra-bold justify-center items-center gap-5 mb-2 px-4">
                    <div>MY PURCHASED $PETF = 0</div>
                    <div>{svg.head_important_icon()}</div>
                  </div>
                  <div className="flex font-font-2-extra-bold justify-center items-center gap-5 mb-6 px-4">
                    <div>MY STAKEABLE $PETF = 0</div>
                    <div>{svg.head_important_icon()}</div>
                  </div>
                  {/* <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl mb-3">
                    CONNECT WALLET
                  </button>
                  <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl mb-4">
                    BUY ON UNISWAP
                  </button> */}
                  <div>
                    <button className="button-2 !text-2xl font-font-2-extra-bold">
                      CONNECT WALLET
                    </button>
                  </div>
                  <div>
                    <button className="button-3 !text-2xl font-font-2-extra-bold">
                      BUY ON UNISWAP
                    </button>
                  </div>
                  <div className="text-center mt-2 underline cursor-pointer">
                    DON&apos;T HAVE A WALLET?
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2 text-center mt-4">
                    Powered by {svg.head_powerBy()}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pb-20 flex flex-col items-center text-center text-white w-full lg:w-[63%]">
              <div className="text-lg mb-4 font-font-2-bold">
                TRUST AND SAFETY AUDITS
              </div>
              <div className="flex justify-center gap-3 lg:gap-6 px-3 lg:px-0">
                <div className="bg-white rounded-lg px-4 py-1.5 flex items-center">
                  <div>{svg.head_trust_1()}</div>
                </div>
                <div className="bg-white rounded-lg px-4 py-1.5 flex items-center">
                  <div>{svg.head_trust_2()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative flex flex-col justify-end pb-20 lg:pb-48 px-5 lg:px-0 lg:pr-20 gap-5">
            <div className="text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3">
              <div>{svg.head_item_1()}</div>
              <div className="text-[20px] font-font-2-bold">
                Your donation is protected by our Giving Guarantee
              </div>
            </div>
            <div className="text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3">
              <div>{svg.head_item_2()}</div>
              <div className="text-[20px] font-font-2-bold">
                0% platform fee, 100% to the cause
              </div>
            </div>
            <div className="text-white flex flex-row items-center gap-5 border border-white rounded-lg px-5 py-3">
              <div>{svg.head_item_3()}</div>
              <div className="text-[20px] font-font-2-bold">
                Partnered with more than 1000+ nonprofit organisations
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* onClick=
      {() => {
        copy("0x2858E541f108161aC2A9ba301f52F515BeEBa3C3");
        toast.success("Copied!");
      }} */}
      {open && (
        <div className="fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-white shadow-md z-20">
          <div
            onClick={() => setOpen(!open)}
            className="text-black text-2xl flex justify-end pr-10 pt-5"
          >
            <p>X</p>
          </div>
          {/* <div>[HOME]</div>
              <div>[ABOUT]</div>
              <div>[TOKENOMICS]</div>
              <div>[HOW TO BUY]</div>
              <div>[FAQ]</div>
              <div>[STACKING]</div> */}
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEXS_URL || "#"}
                target="_blank"
              >
                [HOME]
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEX_URL || "#"}
                target="_blank"
              >
                [ABOUT]
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_TELE_URL || "#"}
                target="_blank"
              >
                [TOKENOMICS]
              </Link>
            </li>

            <li className="font-normal text-xl text-black">
              <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                [HOW TO BUY]
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                [FAQ]
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                [STACKING]
              </Link>
            </li>
            <li>
              <div>
                <button className="button !font-bold !m-0">BUY $MEOF</button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
