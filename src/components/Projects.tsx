
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB"],
      color: "text-blue-400",
    },
    {
      title: "Healthcare App",
      description: "Patient management system for healthcare providers.",
      tech: ["React Native", "Express", "PostgreSQL"],
      color: "text-purple-400",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting platform.",
      tech: ["Vue.js", "Python", "TensorFlow"],
      color: "text-pink-400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-text-gradient">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm border border-gray-800"
            >
              <CardHeader>
                <CardTitle className={project.color}>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                    >
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
