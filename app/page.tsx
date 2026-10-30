import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-transparent">
      <div className="mx-auto w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
