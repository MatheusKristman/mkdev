import { About } from "./components/about";
import { AdHeader } from "./components/ad-header";
import { FooterCTA } from "./components/footer-cta";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

const AdPage = () => {
  return (
    <>
      <div className="w-full bg-ad-mobile-top bg-no-repeat bg-cover sm:bg-ad-tablet-top lg:bg-ad-desktop-top lg:bg-[length:100%_100%]">
        <AdHeader />
        <Hero />
      </div>
      <Services />
      <About />
      <FooterCTA />
    </>
  );
};

export default AdPage;
