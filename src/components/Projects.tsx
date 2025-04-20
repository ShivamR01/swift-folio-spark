
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare App",
      description: "Patient management system for healthcare providers.",
      tech: ["React Native", "Express", "PostgreSQL"],
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting platform.",
      tech: ["Vue.js", "Python", "TensorFlow"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
