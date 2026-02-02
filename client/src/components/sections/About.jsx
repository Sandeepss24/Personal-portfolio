import { motion } from "framer-motion";
import SplashCursor from "../ui/SplashCursor";

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950/50 relative">
            {/* Splash Cursor Effect */}
            <SplashCursor />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed">
                            <p>
                                I'm Sandeep, a passionate Frontend Developer with a knack for creating intuitive and dynamic user experiences.
                                My journey involves mastering the art of React, Tailwind, and Motion to build web applications that not only work seamlessly but also feel alive.
                            </p>
                            <p>
                                With a strong foundation in the MERN stack and a special focus on creative frontend technologies like Three.js and GSAP,
                                I strive to push the boundaries of what's possible on the web.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 blur-3xl opacity-20 rounded-full" />
                        <div className="glass-card p-8 rounded-2xl relative z-10 border-l-4 border-l-primary">
                            <h3 className="text-xl font-bold text-white mb-4">Experience Highlights</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-primary rounded-full" />
                                    <div>
                                        <span className="block text-white font-medium">Frontend Developer</span>
                                        <span className="text-sm">Specializing in component architecture and performance optimization.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
                                    <div>
                                        <span className="block text-white font-medium">UI/UX Enthusiast</span>
                                        <span className="text-sm">Translating complex design systems into pixel-perfect code.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full" />
                                    <div>
                                        <span className="block text-white font-medium">Interactive Web</span>
                                        <span className="text-sm">Building immersive 3D experiences using WebGL.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}