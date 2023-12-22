import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { HeaderMobileMenu } from "@/app/components/header-mobile-menu";
import { PlatformContent } from "./components/platform-content";

const PlatformPage = () => {
  return (
    <div className="w-full bg-projects-mobile bg-no-repeat bg-cover md:bg-projects-tablet lg:bg-projects-desktop">
      <Header />
      <HeaderMobileMenu />
      <PlatformContent />
      <Footer />
    </div>
  );
};

export default PlatformPage;
