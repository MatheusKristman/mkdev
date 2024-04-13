import { Header } from "./components/header";
import { HeaderMobileMenu } from "./components/header-mobile-menu";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonial } from "./components/testimonial";
import { Footer } from "./components/footer";
import { ContactModal } from "./components/contact-modal";

export default function Home() {
  return (
    <>
      <ContactModal />
      <div className="w-full h-full bg-hero-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-hero-tablet lg:bg-hero-desktop">
        <Header />
        <HeaderMobileMenu />
        <Hero />
      </div>
      <div className="w-full bg-projects-section-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-projects-section-tablet lg:bg-projects-section-desktop">
        <Services />
      </div>
      <About />
      <div className="w-full bg-testimonials-section-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-testimonials-section-tablet lg:bg-testimonials-section-desktop">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}
