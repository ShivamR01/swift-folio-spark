
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Software Swifts</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="text-foreground/80 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="text-foreground/80 hover:text-blue-600 transition-colors">Contact</a>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>Get in Touch</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
