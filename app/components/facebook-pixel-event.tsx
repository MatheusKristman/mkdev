"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.FACEBOOK_PIXEL_ID!, undefined, {
          autoConfig: true,
          debug: true,
        });
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};
