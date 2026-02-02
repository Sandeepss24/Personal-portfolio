import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

export default function ResumeButton() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        try {
            // Create a link element and trigger download
            const link = document.createElement('a');
            link.href = '/assets/pdf/SandeepSS_Resume.pdf'; // Correct path in public folder
            link.download = 'SandeepSS_Resume.pdf'; // Downloaded file name
            link.target = '_blank'; // Open in new tab as fallback
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: open in new tab
            window.open('/assets/pdf/SandeepSS_Resume.pdf', '_blank');
        }
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        >
            <motion.button
                onClick={handleDownload}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
                }}
            >
                {/* Icon */}
                <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FileText size={24} />
                </motion.div>

                {/* Download indicator */}
                <motion.div
                    className="absolute -top-1 -right-1 bg-cyan-400 text-white rounded-full p-1"
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? 12 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <Download size={12} />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                    className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-background border border-border text-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
                    initial={{ opacity: 0, x: 10, scale: 0.8 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : 10,
                        scale: isHovered ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ pointerEvents: 'none' }}
                >
                    Download Resume
                    {/* Arrow */}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-border"></div>
                </motion.div>

                {/* Pulse effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-400"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.button>
        </motion.div>
    );
}