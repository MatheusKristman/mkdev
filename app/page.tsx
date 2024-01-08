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
            <div className="w-full h-full bg-home-mobile bg-no-repeat bg-[length:100%_100%] md:bg-home-tablet lg:bg-home-desktop">
                <Header />
                <HeaderMobileMenu />
                <Hero />
                <About />
                <Services />
            </div>
            <Testimonial />
            <Footer />
        </>
    );
}
