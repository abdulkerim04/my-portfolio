'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const HomePage = () => {
  const { t } = useTranslation('common')

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-dark-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-primary-300 dark:bg-primary-700 rounded-full opacity-30"
          animate={{ 
            y: [-10, 0, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary-400 dark:bg-primary-600 rounded-full opacity-20"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -90, -180]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block bg-gradient-to-r from-primary-600 to-primary-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft">
              {t('hero.title')}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle').split(' | ')[0]}
            <br />
            <span className="gradient-text">{t('hero.subtitle').split(' | ')[1]}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection('#projects')}
              className="btn-primary text-lg px-8 py-4"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.cta')}
            </button>
          </motion.div>

          <motion.div
            className="mt-16 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection('#about')}
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowDownIcon className="w-8 h-8 mx-auto" />
              <span className="sr-only">Scroll down</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="section-title text-dark-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle text-dark-600 dark:text-dark-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('about.description')}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="card-hover bg-white dark:bg-dark-700 p-6 rounded-xl shadow-soft"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">{t('about.education.title')}</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                {t('about.education.description')}
              </p>
              <div className="flex items-center space-x-2 text-primary-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                <span>DevOps</span>
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                <span>Full Stack</span>
                <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                <span>UI/UX</span>
              </div>
            </motion.div>

            <motion.div
              className="card-hover bg-white dark:bg-dark-700 p-6 rounded-xl shadow-soft"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">{t('about.goals.title')}</h3>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                {t('about.goals.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{t('about.stats.projects').split('+')[0]}+</div>
                  <div className="text-sm text-dark-600 dark:text-dark-300">{t('about.stats.projects').split('+')[1]}</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{t('about.stats.quality').split('%')[0]}%</div>
                  <div className="text-sm text-dark-600 dark:text-dark-300">{t('about.stats.quality').split('%')[1]}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage