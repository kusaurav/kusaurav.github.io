import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { resumeSkills as skills } from "@/data/skills";
import SEO from "@/components/SEO";

const Resume = () => {

  return (
    <main className="pt-24 pb-16">
      <SEO
        title="Resume"
        description="View my professional experience, education, and technical skills."
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">Resume</span>
            </h1>
            {/* https://drive.google.com/file/d/1WnBvy_jx3-yZcBtROFXJpdJA-0ADvDXo3F6e5ZEYzUk/view */}
            {/* https://drive.google.com/uc?export=download&id=1WnBvy_jx3-yZcBtROFXJpdJA-0ADvDXo3F6e5ZEYzUk --download*/}
            <a href="https://drive.google.com/file/d/1IQ8S9zY7dPM3CCoSSoZ9raqbY4nI9iJr/view" target="_blank" rel="noopener noreferrer">
              <Button className="hero-gradient hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <Card className="glass-card card-shadow mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-hero-from" />
                  <span>sauravkumar52270@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-hero-from" />
                  <span>+91-8445876407</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-hero-from" />
                  <span>Abu Dhabi, UAE</span>
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
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="text-sm font-medium text-muted-foreground">Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge key={course} variant="secondary" className="bg-accent/50">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
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