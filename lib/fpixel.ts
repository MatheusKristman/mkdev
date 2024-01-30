export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!;

declare global {
  interface Window {
    fbq: (track: string, event: string, data?: any) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};
