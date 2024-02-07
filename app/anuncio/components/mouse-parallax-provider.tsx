"use client";

import { MouseParallaxContainer } from "react-parallax-mouse";
import { useEffect, useState } from "react";

export const MouseParallaxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(false);

  useEffect(() => {
    setIsParallaxEnabled(window.innerWidth >= 1024);
  }, []);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      enabled={isParallaxEnabled}
    >
      <>{children}</>
    </MouseParallaxContainer>
  );
};
