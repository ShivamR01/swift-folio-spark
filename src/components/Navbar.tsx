
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Software Swifts</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          <Button>Get in Touch</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
