import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import dynamic from "next/dynamic";

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: true });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;