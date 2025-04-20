
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Bird, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Bird 
            className="h-8 w-8 text-blue-600 
            animate-[eagle-soar_4s_ease-in-out_infinite] 
            hover:animate-none 
            hover:scale-110 
            transition-transform 
            duration-300 
            transform 
            -rotate-12 
            hover:rotate-0" 
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-200 bg-clip-text text-transparent animate-gradient">
            Software
          </span>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Swifts
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground/80 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="text-foreground/80 hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="text-foreground/80 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="text-foreground/80 hover:text-blue-600 transition-colors">Contact</a>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button>Get in Touch</Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-foreground">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t px-4 pb-4">
          <a href="#Hero" className="block py-2 text-foreground/80 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="block py-2 text-foreground/80 hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="block py-2 text-foreground/80 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="block py-2 text-foreground/80 hover:text-blue-600 transition-colors">Contact</a>
          <div className="flex items-center gap-4 mt-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="flex-1">Get in Touch</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
