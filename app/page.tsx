import { Header } from "./components/header";
import { HeaderMobileMenu } from "./components/header-mobile-menu";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonial } from "./components/testimonial";

export default function Home() {
    return (
        <>
            <div className="w-full h-full bg-home-mobile bg-no-repeat bg-cover md:bg-home-tablet lg:bg-home-desktop">
                <Header />
                <HeaderMobileMenu />
                <Hero />
                <About />
                <Services />
                <Testimonial />
            </div>
        </>
    );
}
