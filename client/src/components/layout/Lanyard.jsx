import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../../assets/images/profile.png';
import loaderGif from '../../assets/images/loader.gif';

// Simple GIF Loading Component
function FuturisticLoader({ progress }) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Loader GIF */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center justify-center"
      >
        {/* GIF Loader */}
        <motion.img
          src={loaderGif}
          alt="Loading..."
          className="w-32 h-32 mb-8"
          animate={{
            filter: [
              'brightness(1) hue-rotate(0deg)',
              'brightness(1.2) hue-rotate(180deg)',
              'brightness(1) hue-rotate(360deg)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Loading Text */}
        <motion.h1
          animate={{
            textShadow: [
              '0 0 10px rgba(0, 255, 255, 0.8)',
              '0 0 20px rgba(138, 43, 226, 0.8)',
              '0 0 10px rgba(0, 255, 255, 0.8)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold text-cyan-400 mb-2 tracking-wider"
        >
          SANDEEP S S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-orange-400 text-sm tracking-widest mb-8"
        >
          FRONTEND DEVELOPER
        </motion.p>

        {/* Loading Progress */}
        <div className="w-80 max-w-xs">
          <div className="flex justify-between text-xs text-cyan-400 mb-2">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-linear-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Animated 3D Card with Jumping Animation
function AnimatedJumpingCard() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Trigger card animation after a short delay
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Animated 3D Card with Jumping Effect */}
      <motion.div
        initial={{
          x: -800,
          y: 200,
          rotate: -45,
          scale: 0.5,
          opacity: 0
        }}
        animate={showCard ? {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        } : {}}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 100,
          mass: 1.2,
          duration: 2.5,
          delay: 0.2
        }}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Continuous rotation after landing */}
        <motion.div
          animate={{
            rotateY: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3 // Start rotation after landing animation
          }}
        >
          {/* ID Card */}
          <motion.div
            className="relative w-80 h-96 bg-linear-to-br from-gray-900 to-black rounded-2xl border-2 border-cyan-400/50 shadow-2xl overflow-hidden"
            // Add subtle bounce after landing
            animate={showCard ? {
              y: [0, -10, 0, -5, 0]
            } : {}}
            transition={{
              duration: 1,
              delay: 2.8,
              ease: "easeOut"
            }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 animate-pulse"></div>

            {/* Card content */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
              {/* Profile Image */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                    '0 0 40px rgba(138, 43, 226, 0.7)',
                    '0 0 20px rgba(0, 255, 255, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400 mb-6 relative"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Scanning effect */}
                <motion.div
                  animate={{ y: [-128, 128] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-400/30 to-transparent h-4"
                />
              </motion.div>

              {/* Name */}
              <motion.h1
                animate={{
                  textShadow: [
                    '0 0 10px rgba(0, 255, 255, 0.8)',
                    '0 0 20px rgba(138, 43, 226, 0.8)',
                    '0 0 10px rgba(0, 255, 255, 0.8)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl font-bold text-cyan-400 mb-2 tracking-wider text-center"
              >
                SANDEEP S S
              </motion.h1>

              {/* Title */}
              <p className="text-orange-400 text-sm tracking-widest mb-8 text-center">
                FRONTEND DEVELOPER
              </p>

              {/* Tech details */}
              <div className="grid grid-cols-2 gap-4 text-xs text-cyan-400/80">
                <div>
                  <div className="text-orange-400">EXPERIENCE</div>
                  <div>2+ Years</div>
                </div>
                <div>
                  <div className="text-orange-400">STATUS</div>
                  <div>Available</div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 text-center"
      >
        <div className="text-sm mb-2">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto relative">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Lanyard() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <FuturisticLoader progress={loadingProgress} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <AnimatedJumpingCard />
      </motion.div>
    </>
  );
}