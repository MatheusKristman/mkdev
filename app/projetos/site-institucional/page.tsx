import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { HeaderMobileMenu } from "@/app/components/header-mobile-menu";
import { SitePageContent } from "./components/site-page-content";

const SitePage = () => {
  return (
    <div className="w-full bg-projects-mobile bg-no-repeat bg-cover md:bg-projects-tablet lg:bg-projects-desktop">
      <Header />
      <HeaderMobileMenu />
      <SitePageContent />
      <Footer />
    </div>
  );
};

export default SitePage;
