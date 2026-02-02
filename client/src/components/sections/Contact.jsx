import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden mb-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-foreground font-medium">Email</h3>
                                <p className="text-muted-foreground">sandeepsanthosh2417@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-foreground font-medium">Phone</h3>
                                <p className="text-muted-foreground">6282578191</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-foreground font-medium">Location</h3>
                                <p className="text-muted-foreground">Kochi | India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    placeholder="Dustin"
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    placeholder="dustin@example.com"
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors min-h-[120px] resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}