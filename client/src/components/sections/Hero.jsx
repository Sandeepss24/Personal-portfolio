import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import SplashCursor from "../ui/SplashCursor";

function GeometricShape({ position, color, speed }) {
    const mesh = useRef(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += speed * 0.01;
            mesh.current.rotation.y += speed * 0.02;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

function HeroScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <GeometricShape position={[3, 1, 0]} color="#8b5cf6" speed={1} />
            <GeometricShape position={[-3, -1, -2]} color="#06b6d4" speed={1.5} />
            <GeometricShape position={[0, 3, -5]} color="#ffffff" speed={0.5} />
        </>
    );
}

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const words = "Crafting immersive digital experiences with React, Tailwind, and WebGL. Bridging the gap between design and engineering.".split(" ");
    const name = "Sandeep S S".split("");

    return (
        <section ref={sectionRef} id="hero" className="relative min-h-screen w-full bg-background flex items-center justify-center mt-0">
            {/* Splash Cursor Effect */}
            <SplashCursor />

            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <HeroScene />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div style={{ y: textY, opacity }}>
                    <h2 className="text-lg md:text-xl font-medium text-primary mb-4 tracking-wide uppercase">
                        Frontend Developer
                    </h2>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-foreground mb-8 tracking-tighter leading-tight flex justify-center flex-wrap">
                        {name.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.05,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className={char === " " ? "mx-4" : i >= 8 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400" : ""}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 max-w-4xl mx-auto mb-12">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.5)] cursor-pointer z-20 relative"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-border text-foreground font-medium rounded-full hover:bg-foreground/5 transition-all hover:scale-105 cursor-pointer z-20 relative"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}