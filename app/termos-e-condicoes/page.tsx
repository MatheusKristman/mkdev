import { ContactModal } from "../components/contact-modal";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeaderMobileMenu } from "../components/header-mobile-menu";
import { TermsContent } from "./components/terms-content";

const TermsPage = () => {
    return (
        <>
            <ContactModal />
            <div className="w-full h-full bg-services-mobile bg-no-repeat bg-[length:100%_100%] md:services-tablet lg:services-desktop">
                <Header />
                <HeaderMobileMenu />
                <TermsContent />
                <Footer />
            </div>
        </>
    );
};

export default TermsPage;
