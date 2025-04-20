
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("Digital Reality");
  const phrases = ["Digital Reality", "Innovation", "Success", "Excellence"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => {
        const currentIndex = phrases.indexOf(prev);
        return phrases[(currentIndex + 1) % phrases.length];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Fallback background image */}
      {/* <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[1]" 
        style={{ 
          backgroundImage: 'url("/hero-background.jpg")',
          opacity: 0.5
        }}
      /> */}

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[2]" />

      {/* Content */}
      <div className="container mx-auto text-center relative z-[3] animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Turning Ideas into
          <span className="animate-text-gradient bg-[size:200%] transition-all duration-500"> {text}</span>
        </h1>
        <p className="text-xl text-blue-300 mb-8 max-w-2xl mx-auto">
          We craft innovative software solutions that empower businesses to thrive in the digital age.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">View Our Work</Button>
          <Button variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
