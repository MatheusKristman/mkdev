import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HeaderMobileMenu } from "../components/header-mobile-menu";
import { ProjectsContent } from "./components/projects-content";

const ProjectsPage = ({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) => {
  const category = searchParams?.category;

  return (
    <div className="w-full bg-projects-mobile bg-no-repeat bg-[length:100%_100%] md:bg-projects-tablet lg:bg-projects-desktop">
      <Header />
      <HeaderMobileMenu />
      <ProjectsContent category={category} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
