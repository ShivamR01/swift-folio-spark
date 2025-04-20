
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Turning Ideas into
          <span className="text-blue-600 dark:text-blue-400"> Digital Reality</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We craft innovative software solutions that empower businesses to thrive in the digital age.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">View Our Work</Button>
          <Button variant="outline" size="lg">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
