'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20"
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
          className="absolute top-40 right-20 w-24 h-24 bg-primary-300 rounded-full opacity-30"
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
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary-400 rounded-full opacity-20"
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
              Merhaba! Ben Abdulkerim
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-dark-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bilgisayar
            <br />
            <span className="gradient-text">Mühendisliği</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-dark-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Medeniyet Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. 
            Modern web teknolojileri, kullanıcı deneyimi ve yaratıcı çözümlerle çalışmayı seviyorum.
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
              Projelerimi Gör
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Benimle İletişime Geç
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
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              <ArrowDownIcon className="w-8 h-8 mx-auto" />
              <span className="sr-only">Aşağı kaydır</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hakkımda
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Bilgisayar Mühendisliği öğrencisi olarak modern teknolojileri öğrenmek ve 
            yaratıcı çözümler üretmek benim tutkum. Sürekli gelişen bu alanda kendimi 
            geliştiriyor ve projelerimle fark yaratmaya çalışıyorum.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="card-hover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Eğitim</h3>
              <p className="text-dark-600 mb-4">
                Medeniyet Üniversitesi Bilgisayar Mühendisliği 2. Sınıf öğrencisiyim. 
                Derslerim kapsamında modern programlama dilleri, veri yapıları, algoritmalar 
                ve web teknolojileri üzerine çalışmalar yapıyorum.
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
              className="card-hover"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Hedeflerim</h3>
              <p className="text-dark-600 mb-6">
                Yazılım dünyasında kendimi sürekli geliştirerek modern teknolojileri 
                etkili bir şekilde kullanmak ve kullanıcı odaklı çözümler üretmek 
                benim önceliğim. Açık kaynak projelere katkıda bulunmak ve toplulukla 
                bilgi paylaşımı yapmak istiyorum.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-dark-600">Proje</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-dark-600">Kalite</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage