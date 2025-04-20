
import { Code, Layout, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to address your specific business needs and challenges.",
      icon: Code,
      color: "text-purple-400",
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences.",
      icon: Layout,
      color: "text-blue-400",
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance to help you make informed technology decisions.",
      icon: Star,
      color: "text-pink-400",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-text-gradient">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm border border-gray-800"
            >
              <CardHeader>
                <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
                <CardTitle className={service.color}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
