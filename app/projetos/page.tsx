import { auth } from "@/auth";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProjectsContent } from "./components/projects-content";
import { HeaderMobileMenu } from "../components/header-mobile-menu";

const ProjectsPage = async ({
    searchParams,
}: {
    searchParams?: { [key: string]: string | undefined };
}) => {
    const session = await auth();
    const category = searchParams?.category;

    return (
        <div className="w-full bg-projects-mobile bg-no-repeat bg-[length:100%_100%] md:bg-projects-tablet lg:bg-projects-desktop">
            <Header isAuthed={!!session} />
            <HeaderMobileMenu isAuthed={!!session} />
            <ProjectsContent category={category} />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
