import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from "framer-motion";
import { Code2, Palette, Terminal, Cpu, Globe, Database, Layers, Monitor, Smartphone, Settings, Eye, X } from "lucide-react";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

const skills = [
    // Frontend
    { name: "HTML5", icon: Code2, level: 95, category: "Frontend" },
    { name: "CSS3", icon: Palette, level: 95, category: "Frontend" },
    { name: "SCSS", icon: Palette, level: 90, category: "Frontend" },
    { name: "Bootstrap", icon: Layers, level: 85, category: "Frontend" },
    { name: "Tailwind CSS", icon: Palette, level: 95, category: "Frontend" },
    { name: "Material UI", icon: Layers, level: 80, category: "Frontend" },
    { name: "Bricks Builder", icon: Layers, level: 75, category: "Frontend" },

    // JavaScript & Frameworks
    { name: "JavaScript", icon: Terminal, level: 90, category: "JavaScript" },
    { name: "React.js", icon: Code2, level: 95, category: "JavaScript" },

    // Backend & Tools
    { name: "Node.js", icon: Terminal, level: 85, category: "Backend" },
    { name: "Git", icon: Settings, level: 90, category: "Backend" },
    { name: "GitHub", icon: Settings, level: 90, category: "Backend" },
    { name: "JSON Server", icon: Database, level: 80, category: "Backend" },

    // Other
    { name: "Responsive Design", icon: Monitor, level: 95, category: "Other" },
    { name: "UI/UX Principles", icon: Palette, level: 85, category: "Other" },
    { name: "Cross-Browser", icon: Globe, level: 90, category: "Other" },
    { name: "Three.js", icon: Code2, level: 80, category: "Other" },
    { name: "Framer Motion", icon: Palette, level: 90, category: "Other" },
];

function useElementWidth(ref) {
    const [width, setWidth] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                const newWidth = ref.current.offsetWidth;
                setWidth(newWidth);
                if (newWidth > 0 && !isLoaded) {
                    setIsLoaded(true);
                }
            }
        }

        updateWidth();
        window.addEventListener('resize', updateWidth);

        // Add a small delay to ensure DOM is fully rendered
        const timer = setTimeout(updateWidth, 100);

        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timer);
        };
    }, [ref, isLoaded]);

    return { width, isLoaded };
}

function ScrollVelocityTiles({ children, baseVelocity = 100, numCopies = 6 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 30,
        stiffness: 300
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
        clamp: false
    });

    const copyRef = useRef(null);
    const { width: copyWidth, isLoaded } = useElementWidth(copyRef);
    const directionFactor = useRef(1);
    const [isAnimating, setIsAnimating] = useState(false);

    // Start animation only when width is loaded
    useEffect(() => {
        if (isLoaded && copyWidth > 0) {
            setIsAnimating(true);
        }
    }, [isLoaded, copyWidth]);

    function wrap(min, max, v) {
        const range = max - min;
        if (range === 0) return min;
        const mod = (((v - min) % range) + range) % range;
        return mod + min;
    }

    const x = useTransform(baseX, (v) => {
        if (!isAnimating || copyWidth === 0) return '0px';
        // Improved wrapping for seamless infinite loop
        const wrappedValue = wrap(-copyWidth, 0, v);
        return `${wrappedValue}px`;
    });

    useAnimationFrame((t, delta) => {
        // Only animate if loaded and has width
        if (!isAnimating || copyWidth === 0) return;

        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Smooth direction changes based on scroll velocity
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        // Apply scroll velocity influence with reduced intensity for smoother effect
        moveBy += directionFactor.current * moveBy * velocityFactor.get() * 0.5;

        // Update position
        const currentX = baseX.get();
        const newX = currentX + moveBy;

        // Reset position when it goes beyond bounds for seamless loop
        if (baseVelocity > 0 && newX <= -copyWidth) {
            baseX.set(0);
        } else if (baseVelocity < 0 && newX >= 0) {
            baseX.set(-copyWidth);
        } else {
            baseX.set(newX);
        }
    });

    // Create multiple copies for seamless infinite loop
    const copies = [];
    for (let i = 0; i < numCopies; i++) {
        copies.push(
            <div
                key={i}
                ref={i === 0 ? copyRef : null}
                className="flex gap-6 flex-shrink-0"
                style={{ minWidth: 'max-content' }}
            >
                {children}
            </div>
        );
    }

    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex will-change-transform"
                style={{ x }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {copies}
            </motion.div>

            {/* Loading placeholder */}
            {!isLoaded && (
                <div className="flex gap-6 animate-pulse">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-80 h-32 bg-muted rounded-xl flex-shrink-0" />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollPositionRef = useRef(0);

    // Prevent body scroll when modal is open and disable Lenis
    useEffect(() => {
        if (isModalOpen) {
            // Store current scroll position
            scrollPositionRef.current = window.scrollY;

            // Disable body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.style.width = '100%';

            // Disable Lenis by stopping wheel events
            const preventScroll = (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            document.addEventListener('wheel', preventScroll, { passive: false });
            document.addEventListener('touchmove', preventScroll, { passive: false });

            return () => {
                // Re-enable body scroll
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.overflow = '';
                document.body.style.width = '';

                // Restore scroll position
                window.scrollTo(0, scrollPositionRef.current);

                // Re-enable scroll events
                document.removeEventListener('wheel', preventScroll);
                document.removeEventListener('touchmove', preventScroll);
            };
        }
    }, [isModalOpen]);

    // Split skills into two rows for display
    const firstRowSkills = skills.slice(0, Math.ceil(skills.length / 2));
    const secondRowSkills = skills.slice(Math.ceil(skills.length / 2));

    // Group skills by category for modal
    const skillsByCategory = {
        "Frontend": skills.filter(skill => skill.category === "Frontend"),
        "JavaScript & Frameworks": skills.filter(skill => skill.category === "JavaScript"),
        "Backend & Tools": skills.filter(skill => skill.category === "Backend"),
        "Other": skills.filter(skill => skill.category === "Other")
    };

    const renderSkillCard = (skill, index) => (
        <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group flex-shrink-0 w-80"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:text-primary transition-colors">
                    <skill.icon size={24} />
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {skill.category}
                </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400"
                />
            </div>
            <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
        </motion.div>
    );

    const renderModalSkillCard = (skill, index) => (
        <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-secondary/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-lg text-primary group-hover:text-primary transition-colors">
                    <skill.icon size={24} />
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{skill.level}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">{skill.name}</h3>

            <div className="w-full bg-muted h-2 rounded-full overflow-hidden mb-2">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.05 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                />
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Technical Arsenal</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        A comprehensive stack of modern technologies I use to bring creative visions to life.
                    </p>

                    {/* View Skills Button */}
                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                        <Eye size={20} />
                        View All Skills
                    </motion.button>
                </motion.div>

                <div className="space-y-8">
                    {/* First Row - Moving Right */}
                    <ScrollVelocityTiles baseVelocity={30} numCopies={6}>
                        {firstRowSkills.map((skill, index) => renderSkillCard(skill, index))}
                    </ScrollVelocityTiles>

                    {/* Second Row - Moving Left */}
                    <ScrollVelocityTiles baseVelocity={-35} numCopies={6}>
                        {secondRowSkills.map((skill, index) => renderSkillCard(skill, index))}
                    </ScrollVelocityTiles>
                </div>
            </div>

            {/* Skills Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
                                    <p className="text-muted-foreground mt-1">Complete overview of my technical expertise</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-accent rounded-full transition-colors"
                                >
                                    <X size={24} className="text-muted-foreground hover:text-foreground" />
                                </button>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div
                                className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                                style={{
                                    scrollBehavior: 'smooth',
                                    overscrollBehavior: 'contain'
                                }}
                                onWheel={(e) => e.stopPropagation()}
                                onTouchMove={(e) => e.stopPropagation()}
                            >
                                <div className="space-y-8">
                                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                                        <div key={category}>
                                            <motion.h4
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"
                                            >
                                                <div className="w-1 h-6 bg-gradient-to-b from-primary to-cyan-400 rounded-full"></div>
                                                {category}
                                                <span className="text-sm text-muted-foreground ml-2">({categorySkills.length} skills)</span>
                                            </motion.h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {categorySkills.map((skill, index) => renderModalSkillCard(skill, index))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-border bg-secondary/30 flex-shrink-0">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-muted-foreground">
                                        Total Skills: <span className="text-primary font-medium">{skills.length}</span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Average Proficiency: <span className="text-primary font-medium">
                                            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}