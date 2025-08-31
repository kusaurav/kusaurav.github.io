import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, user-friendly interfaces"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized applications for the best user experience"
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-white">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Full-Stack Developer passionate about creating digital experiences 
              that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
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
                className="bg-transparent border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              What I <span className="hero-gradient bg-clip-text text-transparent">Bring</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="glass-card card-shadow text-center group hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-hero-from to-hero-to flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
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
                Recent <span className="hero-gradient bg-clip-text text-transparent">Work</span>
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