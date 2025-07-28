"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import B1 from "../b1";
import B2 from "../b2";
import B3 from "../b3";
import B4 from "../b4";
import B5 from "../b5";
import B6 from "../b6";
import B7 from "../b7";
import B8 from "../b8";
import B9 from "../b9";

export default function HomeClient() {
  return (
    <div className="mx-auto min-h-screen max-w-[1990px]">
      <Header />
      <B1 />
      <B2 />
      <B3 />
      <B4 />
      <B5 />
      <B6 />
      <B7 />
      <B8 />
      <B9 />
      <Footer />
    </div>
  );
}
