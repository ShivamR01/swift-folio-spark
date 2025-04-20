
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
