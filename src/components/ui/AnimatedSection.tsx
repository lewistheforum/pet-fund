import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold, once });

  const getVariants = () => {
    switch (variant) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          },
        };
      case "fadeDown":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          },
        };
      case "fadeLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          },
        };
      case "fadeRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          },
        };
      case "none":
      default:
        return {
          hidden: {},
          visible: {},
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
