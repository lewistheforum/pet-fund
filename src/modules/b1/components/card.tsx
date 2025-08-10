import React from "react";
import { Edit } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CampaignCardProps {
  daysLeft: number;
  category: string;
  title: string;
  raised: number;
  goal: number;
  onViewMore?: () => void;
  onEdit?: () => void;
  image: StaticImageData;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  daysLeft,
  category,
  title,
  raised,
  goal,
  onViewMore,
  onEdit,
  image,
}) => {
  const progressPercentage = Math.min((raised / goal) * 100, 100);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4 h-full">
      <div className="flex flex-col justify-between h-full">
        {/* Header with image placeholder and controls */}
        <div className="relative bg-gray-300 h-40 flex items-start justify-between py-4 pr-4 rounded-lg">
          <Image
            src={image}
            alt="Pet Fund Logo"
            fill
            priority
            className="z-0 rounded-lg object-cover"
          />
          {/* Days left badge */}
          <div className="bg-[#4AA76C] text-white px-3 py-1 rounded-r-full rounded-bl-full text-sm font-font-2-bold z-20">
            {daysLeft} Days Left
          </div>

          {/* Edit button */}
          <button
            onClick={onEdit}
            className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow z-20"
          >
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="pt-6 flex flex-col justify-between h-60 gap-0">
          {/* Category */}
          <p className="text-gray-500 text-sm font-font-2 mb-2">{category}</p>

          {/* Title */}
          <h3 className="text-gray-900 text-lg font-font-2-bold mb-3 leading-tight line-clamp-2">
            {title}
          </h3>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#4AA76C] h-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Funding information */}
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-[#4AA76C] text-xl font-font-2-bold">
              {formatCurrency(raised)}
            </span>
            <span className="text-gray-400 text-sm font-font-2-bold">
              raised from {formatCurrency(goal)}
            </span>
          </div>

          {/* View More button */}
          <button
            onClick={onViewMore}
            className="w-full bg-[#4AA76C] hover:bg-[#459a64] text-white font-font-2-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            View More Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
