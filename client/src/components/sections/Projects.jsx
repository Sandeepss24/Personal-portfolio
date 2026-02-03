import { motion } from "framer-motion";
import { ExternalLink, Play, ArrowRight, FolderOpen } from "lucide-react";
import mockupImage from "../../assets/images/mockup1.png";
import mockupImage2 from "../../assets/images/mockup2.png"
import mockupImage3 from "../../assets/images/mockup3.png"
import mockupImage4 from "../../assets/images/mockup4.png"

const projects = [
    {
        id: 1,
        title: "Project Managment Dashboard",
        subtitle: "Dashboard",
        description: "A responsive web dashboard for managing tasks and projects with real-time project overviews, intuitive task tracking, and visual insights to boost team productivity.",
        tech: ["React", "Chart.js", "Tailwindcss", "React Icons"],
        demoUrl: "https://projectmanagement-dashboard.vercel.app/",
        githubUrl: "https://github.com/Sandeepss24/Projectmanagement-Dashboard",
        image: mockupImage,
    },
    {
        id: 2,
        title: "Netflix - Clone",
        subtitle: "Streaming Platform UI & API Integration",
        description: "A responsive Netflix-inspired streaming web app built with React and Vite, featuring dynamic movie browsing using TMDB API, interactive movie trailers, and a professional Netflix-style layout.",
        tech: ["React", "Vite", "CSS", "TMDB API"],
        demoUrl: "https://netflix-clone-cyan-omega.vercel.app",
        githubUrl: "https://github.com/Sandeepss24/Clone-netflix",
        image: mockupImage2,
    },
    {
        id: 3,
        title: "Weather App",
        subtitle: "Real-Time Weather Forecast",
        description: "A responsive web application that provides real-time weather information for any city using live API data, with a clean UI and dynamic search functionality.",
        tech: ["HTML5", "CSS", "JavaScript", "OpenWeatherMap API"],
        demoUrl: "https://weatherapp-three-gamma.vercel.app/",
        githubUrl: "https://github.com/Sandeepss24/weatherapp",
        image: mockupImage3,
    },
    {
        id: 4,
        title: "GSAP Demo",
        subtitle: "Animated Landing Page",
        description: "A modern, high-performance product landing page built with smooth GSAP animations and interactive scroll-based effects. The project focuses on delivering an immersive user experience with clean UI, responsive layouts, and engaging motion design optimized for all devices.",
        tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"],
        demoUrl: "https://headphone-gsap.vercel.app/",
        githubUrl: "https://github.com/Sandeepss24/headphone-gsap",
        image: mockupImage4,
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Featured Work</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        A collection of projects showcasing creative engineering and modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Clean Mockup Image */}
                            <div className="relative transform transition-all duration-700 group-hover:scale-105 cursor-pointer">
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                                    onClick={() => window.open(project.demoUrl, '_blank')}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Shadow */}
                                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/30 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
                            </div>

                            {/* Project Information */}
                            <div className="mt-10 text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                                <p className="text-primary font-medium mb-3">{project.subtitle}</p>
                                <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technology Stack */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border hover:bg-accent transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-primary cursor-pointer text-primary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                                        onClick={() => window.open(project.demoUrl, '_blank')}
                                    >
                                        <Play size={16} />
                                        Demo
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-secondary cursor-pointer text-secondary-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-accent transition-colors border border-border"
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                    >
                                        <ExternalLink size={16} />
                                        Code
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r cursor-pointer from-primary to-cyan-400 text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto"
                        onClick={() => window.open('https://github.com/Sandeepss24', '_blank')}
                    >
                        <FolderOpen size={20} />
                        View More Projects
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}