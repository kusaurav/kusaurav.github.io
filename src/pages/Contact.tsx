import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="hero-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card card-shadow">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'd love to hear about your project and how I can help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-glass-border resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full hero-gradient hover:opacity-90 transition-opacity">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-card card-shadow">
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-hero-from" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="glass-card card-shadow">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Available for freelance work</h3>
                    <p className="text-muted-foreground mb-4">
                      I'm currently available for new projects and collaborations
                    </p>
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;