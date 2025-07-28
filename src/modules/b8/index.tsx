"use client";

import svg from "@/utils/svg";

export default function B8() {
  const uot = [
    {
      svg: svg.b8_i1(),
      title: "Web2 Legacy",
      description:
        "Over $10M in revenue from Fortune 500 clients, audited financials available.",
    },
    {
      svg: svg.b8_i2(),
      title: "Data Ethics",
      description:
        "GDPR-compliant, anonymized data pipelines verified by third parties.",
    },
    {
      svg: svg.b8_i3(),
      title: "Blockchain Transparency",
      description:
        "Ethereum-based donation tracking, accessible via public explorers",
    },
    {
      svg: svg.b8_i4(),
      title: "Partnerships",
      description:
        "Signed MOUs with nonprofits and initial contracts with pet food brands.",
    },
    {
      svg: svg.b8_i5(),
      title: "Audits",
      description: "Smart contracts certified by CoinSult and SOLIDProof.",
    },
  ];

  return (
    <div className="text-white px-5 lg:px-20">
      <div className="text-white pt-16 relative z-10">
        <div>
          <div>
            <div className="flex flex-row justify-center items-center gap-5 pb-10">
              <div className="text-3xl font-font-2-extra-bold bg-[#4AA76C] px-5 py-1.5 rounded-xl">
                Utility of Token
              </div>
            </div>
          </div>
          <div className="font-font-2-extra-bold text-2xl text-center pb-10">
            The $MEOWF token is the lifeblood of the Meow Fund ecosystem:
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 pb-10">
            {uot.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 border border-[#4AA76C] w-full py-7 px-3 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-10">
                  <div className="h-32 flex items-center justify-center">
                    {item.svg}
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-[15px] uppercase text-base font-font-2-extra-bold text-[#4AA76C]">
                      {item.title}
                    </div>
                    <div className="text-sm font-font-2 text-center text-white">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
