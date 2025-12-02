import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutSkills as skills } from "@/data/skills";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="pt-24 pb-16">
      <SEO
        title="About Me"
        description="Learn more about Saurav Kumar, an IIT Kanpur graduate and Backend Developer with expertise in Java, Spring Boot, and distributed systems."
        keywords={["Saurav Kumar", "Saurav IIT", "Saurav India", "About Saurav Kumar", "IIT Kanpur Alumni", "Software Engineer India"]}
      />
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
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated <span className="text-hero-from font-medium">Software Engineer</span> with over <span className="text-hero-from font-medium">2.5 years of experience</span> in designing and building scalable backend systems. My journey began with a deep curiosity for how large-scale applications function, which led me to specialize in <span className="text-hero-from font-medium">Java ecosystem</span> and distributed architectures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I focus on solving complex engineering challenges, from optimizing high-throughput APIs to designing fault-tolerant microservices. I believe in writing clean, testable code and am constantly exploring new tools to improve developer productivity and system reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card card-shadow">
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-hero-from"></span>
                    Backend Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Architecting and developing robust RESTful APIs and microservices using <span className="text-foreground font-medium">Java, Spring Boot, and Kafka</span>. I specialize in building systems that are secure, scalable, and easy to maintain.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-hero-from"></span>
                    Performance Optimization
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enhancing application performance through efficient database design (<span className="text-foreground font-medium">MySQL, MongoDB</span>), caching strategies with <span className="text-foreground font-medium">Redis</span>, and implementing search solutions using <span className="text-foreground font-medium">Elasticsearch</span>.
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