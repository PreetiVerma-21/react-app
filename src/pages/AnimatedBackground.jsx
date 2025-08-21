// src/components/AnimatedBackground.jsx

import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <motion.div
    className="animated-bg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      maxWidth: '100vw',
    }}
  >
    <motion.div
      style={{
        position: 'absolute',
        width: '60vw',
        height: '60vw',
        maxWidth: 600,
        maxHeight: 600,
        minWidth: 250,
        minHeight: 250,
        top: '-10vw',
        left: '-10vw',
        background: 'radial-gradient(circle, #6a82fb 0%, #fc5c7d 100%)',
        borderRadius: '50%',
        filter: 'blur(8vw)',
        opacity: 0.6,
      }}
      animate={{
        scale: [1, 1.1, 1],
        x: ['0vw', '4vw', '0vw'],
        y: ['0vw', '4vw', '0vw'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
    <motion.div
      style={{
        position: 'absolute',
        width: '40vw',
        height: '40vw',
        maxWidth: 400,
        maxHeight: 400,
        minWidth: 180,
        minHeight: 180,
        bottom: '-8vw',
        right: '-8vw',
        background: 'radial-gradient(circle, #43cea2 0%, #185a9d 100%)',
        borderRadius: '50%',
        filter: 'blur(6vw)',
        opacity: 0.5,
      }}
      animate={{
        scale: [1, 1.05, 1],
        x: ['0vw', '-3vw', '0vw'],
        y: ['0vw', '-3vw', '0vw'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  </motion.div>
);

export default AnimatedBackground;