
import { Code, Layout, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built to address your specific business needs and challenges.",
      icon: Code,
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences.",
      icon: Layout,
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance to help you make informed technology decisions.",
      icon: Star,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
