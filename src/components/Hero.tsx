
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
    <section className="pt-32 pb-20 px-4 bg-black">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
