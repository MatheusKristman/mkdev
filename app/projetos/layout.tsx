import { ContactModal } from "../components/contact-modal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactModal />
      {children}
    </>
  );
}
