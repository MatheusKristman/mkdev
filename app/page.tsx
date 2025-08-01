import { auth } from "@/auth";

import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Services } from "./components/services";
import { LoginModal } from "./components/login-modal";
import { ContactModal } from "./components/contact-modal";
import { RegisterModal } from "./components/register-modal";
import { HeaderMobileMenu } from "./components/header-mobile-menu";
import { ForgotPasswordModal } from "./components/forgot-password-modal";
import { PasswordRecoveryModal } from "./components/password-recovery-modal";
import { PasswordRecoveryMessageModal } from "./components/password-recovery-message-modal";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const session = await auth();
    const params = await searchParams;
    const token = params.recoveryToken;
    const notLogged = params.notLogged;

    return (
        <>
            <ContactModal />
            <LoginModal notLogged={notLogged} />
            <RegisterModal />
            <ForgotPasswordModal />
            <PasswordRecoveryMessageModal />
            <PasswordRecoveryModal token={token} />

            <div className="w-full h-full bg-hero-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-hero-tablet lg:bg-hero-desktop">
                <Header isAuthed={!!session} />
                <HeaderMobileMenu isAuthed={!!session} />
                <Hero />
            </div>

            <div className="w-full bg-projects-section-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-projects-section-tablet lg:bg-projects-section-desktop">
                <Services />
            </div>

            <About />

            {/* TODO: adicionar depoimentos quando tiver clientes que mandaram */}
            {/* <div className="w-full bg-testimonials-section-mobile bg-no-repeat bg-[length:100%_100%] sm:bg-testimonials-section-tablet lg:bg-testimonials-section-desktop">
        <Testimonial />
      </div> */}

            <Footer />
        </>
    );
}
