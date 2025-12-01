
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/40 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent mb-4 inline-block">
                            Saurav Kumar
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Backend Developer specializing in building robust, scalable applications with modern technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-muted-foreground hover:text-hero-from transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-muted-foreground hover:text-hero-from transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/resume" className="text-muted-foreground hover:text-hero-from transition-colors">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-hero-from transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/kusaurav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-accent/50 hover:bg-accent text-black dark:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sauravk02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-accent/50 hover:bg-accent text-[#0077b5] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:sauravkumar52270@gmail.com"
                                className="p-2 rounded-full bg-accent/50 hover:bg-accent text-[#EA4335] transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; {currentYear} Saurav Kumar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
