import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeaderMobileMenu } from "../components/header-mobile-menu";
import { ProjectsContent } from "./components/projects-content";

const ProjectsPage = () => {
    return (
        <div className="w-full bg-projects-mobile bg-no-repeat bg-cover md:bg-projects-tablet lg:bg-projects-desktop">
            <Header />
            <HeaderMobileMenu />
            <ProjectsContent />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
