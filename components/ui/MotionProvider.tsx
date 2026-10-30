"use client";

import type { ReactNode } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
