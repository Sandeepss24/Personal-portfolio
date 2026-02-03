import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Toast({ message, type = "success", isVisible, onClose, duration = 4000 }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose, duration]);

    const icons = {
        success: CheckCircle,
        error: AlertCircle,
    };

    const colors = {
        success: "from-green-500 to-emerald-500",
        error: "from-red-500 to-rose-500",
    };

    const Icon = icons[type];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -100, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed top-8 right-8 z-[99999] max-w-sm w-full"
                >
                    <div className={`bg-gradient-to-r ${colors[type]} text-white p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20 mt-10`}>
                        <div className="flex items-center gap-3">
                            <Icon size={24} className="flex-shrink-0" />
                            <p className="text-sm font-medium flex-1">{message}</p>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden"
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: duration / 1000, ease: "linear" }}
                        >
                            <div className="h-full bg-white/40 rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}