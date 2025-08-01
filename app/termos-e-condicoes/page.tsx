import { auth } from "@/auth";
import { ContactModal } from "../components/contact-modal";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeaderMobileMenu } from "../components/header-mobile-menu";
import { TermsContent } from "./components/terms-content";

const TermsPage = async () => {
    const session = await auth();

    return (
        <>
            <ContactModal />
            <div className="w-full h-full bg-services-mobile bg-no-repeat bg-[length:100%_100%] md:services-tablet lg:services-desktop">
                <Header isAuthed={!!session} />
                <HeaderMobileMenu isAuthed={!!session} />
                <TermsContent />
                <Footer />
            </div>
        </>
    );
};

export default TermsPage;
