import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Java", "Spring Boot", "MySQL", "Kafka", "MongoDB", "Redis", 
    "ElasticSearch", "AWS" , "Git", "Docker", 
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-card card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                I'm a passionate Java developer with over 2 years of experience building 
                scalable and high-performance backend systems. I enjoy designing clean 
                architectures and writing efficient, maintainable code that powers real-world 
                applications.
                </p>
                <p className="text-muted-foreground">
                When I'm not coding, I love exploring new technologies, optimizing system 
                performance, and occasionally contributing to open-source projects.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card card-shadow">
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">
                  Designing and developing robust APIs and microservices using Java, Spring Boot, 
                  and Kafka. Experienced in integrating Redis for caching, Elasticsearch for fast 
                  search capabilities, and MySQL for reliable data storage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">System Design & Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                  Building scalable, distributed systems and improving performance through 
                  efficient database design, asynchronous processing, and message-driven architectures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <Card className="glass-card card-shadow">
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
              <CardDescription>
                Technologies I work with on a regular basis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-accent/50 hover:bg-accent transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default About;