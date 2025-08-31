import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Phone } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of user-facing features for web applications serving 100k+ users.",
      achievements: [
        "Improved app performance by 40% through optimization",
        "Mentored junior developers and conducted code reviews",
        "Implemented responsive design systems"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      period: "2021 - 2022",
      description: "Developed and maintained full-stack web applications using React and Node.js.",
      achievements: [
        "Built 5+ production applications from scratch",
        "Integrated third-party APIs and payment systems",
        "Collaborated with design team on UI/UX improvements"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2017 - 2021",
      description: "Graduated Summa Cum Laude with focus on Software Engineering"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Vue.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Figma"]
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="hero-gradient bg-clip-text text-transparent">Resume</span>
            </h1>
            <Button className="hero-gradient hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="glass-card card-shadow mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-hero-from" />
                  <span>john@example.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-hero-from" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-hero-from" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="glass-card card-shadow mb-8">
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-hero-from pl-6 relative">
                  <div className="absolute w-3 h-3 bg-hero-from rounded-full -left-[7px] top-0"></div>
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-hero-from font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="glass-card card-shadow mb-8">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-accent/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card card-shadow">
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-hero-from pl-6 relative">
                  <div className="absolute w-3 h-3 bg-hero-from rounded-full -left-[7px] top-0"></div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-hero-from font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-muted-foreground mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Resume;