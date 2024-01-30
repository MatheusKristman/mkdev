export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!;

declare global {
  interface Window {
    fbq: (track: string, event: string, data?: any) => void;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const contactview = () => {
  window.fbq("track", "Contact");
};

export const leadevent = (name: string) => {
  window.fbq("track", "Lead", {
    content_category: "Cadastro do contato",
    content_name: `${name} entrou em contato`,
    currency: "BRL",
    value: 0,
  });
};
