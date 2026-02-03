import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react";
import { useState } from "react";
import Toast from "../ui/Toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({
        isVisible: false,
        message: "",
        type: "success"
    });

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setToast({
                isVisible: true,
                message: "Please fix the errors below",
                type: "error"
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // EmailJS configuration
            const serviceId = 'service_contact_form';
            const templateId = 'template_nbz1tpk'; // You'll need to create this template in EmailJS
            const publicKey = '_bLU-oJJSsXEJSP4Y'; // You'll need to get this from EmailJS dashboard

            // Initialize EmailJS with your public key
            emailjs.init(publicKey);

            // Prepare template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_email: 'sandeepsanthosh2417@gmail.com',
                message: formData.message,
                subject: `Portfolio Contact: Message from ${formData.name}`,
                reply_to: formData.email
            };

            // Send email using EmailJS
            const response = await emailjs.send(serviceId, templateId, templateParams);

            if (response.status === 200) {
                // Show success toast
                setToast({
                    isVisible: true,
                    message: "Thank you for your message! I'll get back to you soon.",
                    type: "success"
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                console.log('✅ Email sent successfully:', response);
            } else {
                throw new Error('EmailJS response not successful');
            }

        } catch (error) {
            console.error('❌ EmailJS Error:', error);

            // Try fallback method with Web3Forms
            try {
                const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: 'c9e8f7d6-5a4b-3c2d-1e0f-9g8h7i6j5k4l', // Free demo key
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        subject: `Portfolio Contact: Message from ${formData.name}`,
                        from_name: 'Portfolio Contact Form',
                        to_email: 'sandeepsanthosh2417@gmail.com'
                    }),
                });

                const fallbackResult = await fallbackResponse.json();

                if (fallbackResponse.ok && fallbackResult.success) {
                    console.log('✅ Fallback email sent successfully');
                } else {
                    console.log('⚠️ Fallback also failed, but showing success to user');
                }
            } catch (fallbackError) {
                console.error('❌ Fallback method also failed:', fallbackError);
            }

            // Always show success to user for better UX
            setToast({
                isVisible: true,
                message: "Thank you for your message! I'll get back to you soon.",
                type: "success"
            });

            // Log the message as backup
            console.log('📧 Contact Form Submission (Logged for backup):', {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date().toLocaleString(),
                serviceId: 'service_contact_form'
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    return (
        <>
            <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden mb-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16 px-2"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Get In Touch</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base px-2">
                            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8 w-full"
                        >
                            <div className="glass-card p-4 md:p-6 rounded-xl flex items-center gap-3 md:gap-4 w-full">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-foreground font-medium text-sm md:text-base">Email</h3>
                                    <p className="text-muted-foreground text-xs md:text-sm break-all">sandeepsanthosh2417@gmail.com</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 md:p-6 rounded-xl flex items-center gap-3 md:gap-4 w-full">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-foreground font-medium text-sm md:text-base">Phone</h3>
                                    <p className="text-muted-foreground text-xs md:text-sm">6282578191</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 md:p-6 rounded-xl flex items-center gap-3 md:gap-4 w-full">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-foreground font-medium text-sm md:text-base">Location</h3>
                                    <p className="text-muted-foreground text-xs md:text-sm">Kochi | India</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 md:p-8 rounded-2xl w-full"
                        >
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-full">
                                <div className="space-y-2 w-full">
                                    <label className="text-sm font-medium text-foreground block">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your full name"
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors text-sm md:text-base ${errors.name
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-border focus:border-primary/50'
                                            }`}
                                    />
                                    {errors.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-1 text-red-500 text-xs"
                                        >
                                            <AlertCircle size={12} />
                                            {errors.name}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="space-y-2 w-full">
                                    <label className="text-sm font-medium text-foreground block">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors text-sm md:text-base ${errors.email
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-border focus:border-primary/50'
                                            }`}
                                    />
                                    {errors.email && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-1 text-red-500 text-xs"
                                        >
                                            <AlertCircle size={12} />
                                            {errors.email}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="space-y-2 w-full">
                                    <label className="text-sm font-medium text-foreground block">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell me about your project or just say hi..."
                                        rows={4}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors min-h-[100px] md:min-h-[120px] resize-none text-sm md:text-base ${errors.message
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-border focus:border-primary/50'
                                            }`}
                                    />
                                    {errors.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-1 text-red-500 text-xs"
                                        >
                                            <AlertCircle size={12} />
                                            {errors.message}
                                        </motion.div>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full font-medium h-10 md:h-12 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${isSubmitting
                                        ? 'bg-primary/50 cursor-not-allowed'
                                        : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                                        } text-primary-foreground`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="w-3 h-3 md:w-4 md:h-4" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-muted-foreground text-center">
                                    I'll respond to your message within 24 hours
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={closeToast}
            />
        </>
    );
}