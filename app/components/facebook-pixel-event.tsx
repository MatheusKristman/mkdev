"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactPixel from "react-facebook-pixel";

export const FacebookPixelEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactPixel.init(process.env.FACEBOOK_PIXEL_ID!, undefined, {
      autoConfig: true,
      debug: true,
    });
    ReactPixel.pageView();
  }, [pathname, searchParams]);

  return null;
};
