import { auth } from "@/auth";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ContactModal } from "../components/contact-modal";
import { ServicesContent } from "./components/services-content";
import { HeaderMobileMenu } from "../components/header-mobile-menu";

const ServicesPage = async () => {
    const session = await auth();

    return (
        <>
            <ContactModal />
            <div className="w-full h-full bg-services-mobile bg-no-repeat bg-[length:100%_100%] md:services-tablet lg:services-desktop">
                <Header isAuthed={!!session} />
                <HeaderMobileMenu isAuthed={!!session} />
                <ServicesContent />
                <Footer />
            </div>
        </>
    );
};

export default ServicesPage;
