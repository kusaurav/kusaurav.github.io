import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Server, Globe, Cpu, Cloud, Layers, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const techStack = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs with Java & Spring Boot",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimizing data storage and retrieval",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying scalable applications",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Creating responsive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Designing scalable and maintainable systems",
      skills: ["System Design", "Design Patterns", "Clean Architecture"]
    },
    {
      icon: Layers,
      title: "Tools & Methodologies",
      description: "Streamlining development workflow",
      skills: ["Git", "Agile", "Jira", "Testing"]
    }
  ];

  const recentProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "Collaborative tool with real-time updates",
      tags: ["TypeScript", "React", "Firebase"]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
              <span className="text-sm font-medium text-blue-200">Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Saurav Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              I am a passionate <span className="font-semibold text-white">Backend Developer</span> with over <span className="font-semibold text-white">2+ years of experience</span> in building and scaling <span className="font-semibold text-white">robust backend services using Java</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all transform hover:scale-105"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Technical <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for building scalable solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Card key={index} className="glass-card card-shadow border-white/5 group hover:border-hero-from/50 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-hero-from/20 to-hero-to/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-hero-from" />
                      </div>
                      <CardTitle className="text-xl mb-2">{tech.title}</CardTitle>
                      <CardDescription>{tech.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-accent/50 hover:bg-accent transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Recent <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse of my latest projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recentProjects.map((project, index) => (
                <Card key={index} className="glass-card card-shadow group hover:scale-[1.02] transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-accent/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="hero-gradient hover:opacity-90 transition-opacity">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's create something amazing together
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;