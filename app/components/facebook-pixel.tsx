"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixel from "@/lib/fpixel";
import usePixelStore from "@/stores/usePixelStore";

export const FacebookPixel = () => {
  const {
    isContactModalOpen,
    isContactSubmitClicked,
    contactSubmitNotClicked,
    setContactModalClosed,
    contactName,
    setContactName,
  } = usePixelStore();

  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!loaded) {
      return;
    }

    if (isContactModalOpen) {
      pixel.contactview();

      setContactModalClosed();
    }

    pixel.pageview();
  }, [
    pathname,
    searchParams,
    isContactModalOpen,
    setContactModalClosed,
    loaded,
  ]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    if (isContactSubmitClicked && contactName) {
      pixel.leadevent(contactName);

      contactSubmitNotClicked();
      setContactName("");
    }
  }, [
    isContactSubmitClicked,
    contactSubmitNotClicked,
    contactName,
    setContactName,
    loaded,
  ]);

  return (
    <div>
      <Script
        id="id-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
    </div>
  );
};
