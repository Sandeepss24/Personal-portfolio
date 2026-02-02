import { motion } from "framer-motion";
import { CheckCircle, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        company: "StratAgile Pvt Lmt, Kochi",
        role: "Frontend Developer",
        period: "Mar 2024 – Present",
        description: "Developed responsive web interfaces ensuring cross-browser compatibility and mobile optimization. Built and optimized UI components using HTML, CSS, JavaScript, and React, improving user experience. Converted wireframes and design mockups into interactive, functional interfaces. Collaborated with senior developers on bug fixing and performance optimization.",
        highlights: [
            "Cross-browser compatibility and mobile optimization",
            "UI component optimization with React",
            "Wireframe to functional interface conversion",
            "Performance optimization collaboration"
        ]
    },
    {
        company: "Luminar Technolab, Kochi",
        role: "MERN Stack Intern",
        period: "Jul 2023 – Feb 2024",
        description: "Gained hands-on experience in React, Node.js, Express.js, MongoDB. Built and deployed web applications using Netlify, Vercel, and Render. Learned API integration and backend handling with Node.js.",
        highlights: [
            "Full-stack development with MERN stack",
            "Web application deployment",
            "API integration and backend handling",
            "Modern deployment platforms experience"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl relative border-l-4 border-l-primary hover:border-l-cyan-400 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                        <MapPin size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-400/10 text-primary text-sm font-medium border border-primary/20">
                                    {index === 0 ? "Current" : "Completed"}
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            {/* Key Highlights */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {exp.highlights.map((highlight, highlightIndex) => (
                                        <motion.div
                                            key={highlightIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.1) + (highlightIndex * 0.05) }}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{highlight}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}