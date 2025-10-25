'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next-intl/link';

export default function Hero() {
  const t = useTranslations('Hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {/* Simplified particle animation */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-green"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-brand-blue/90 z-10" />

      <motion.div
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-headings font-bold mb-4"
          variants={itemVariants}
        >
          {t('title')}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-brand-light/90"
          variants={itemVariants}
        >
          {t('subtitle')}
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="bg-brand-green hover:bg-green-500 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('cta')}
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
