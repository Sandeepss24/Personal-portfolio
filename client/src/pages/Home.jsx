import Navbar from "@/components/layout/Navbar";
import Lanyard from "@/components/layout/Lanyard";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import ResumeButton from "@/components/ui/ResumeButton";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Lanyard />
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            {/* Sticky Resume Download Button */}
            <ResumeButton />

            <footer className="py-12 bg-background/95 backdrop-blur-sm text-center text-muted-foreground border-t border-border/50 relative z-20 mt-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Footer Content */}
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Brand */}
                            <div className="text-left">
                                <h3 className="text-foreground font-bold text-lg mb-2">Sandeep S S</h3>
                                <p className="text-sm text-muted-foreground">Frontend Developer</p>
                                <p className="text-sm text-muted-foreground">Building digital experiences</p>
                            </div>

                            {/* Quick Links */}
                            <div className="text-left">
                                <h4 className="text-foreground font-medium mb-3">Quick Links</h4>
                                <div className="space-y-2">
                                    <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                                    <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
                                    <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
                                    <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="text-left">
                                <h4 className="text-foreground font-medium mb-3">Get In Touch</h4>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">sandeepsanthosh2417@gmail.com</p>
                                    <p className="text-sm text-muted-foreground">6282578191</p>
                                    <p className="text-sm text-muted-foreground">
                                        kerala | India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>

                        {/* Copyright */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">© {new Date().getFullYear()} Sandeep S S. All rights reserved.</p>
                            <p className="text-sm">Built with React, Tailwind & Three.js</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}