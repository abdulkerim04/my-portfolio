'use client'

import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu. Kullanıcı dostu arayüz, ürün yönetimi, sepet sistemi ve ödeme entegrasyonu.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Kişisel Finans Takibi",
    description: "Gelir ve giderleri takip etmenizi sağlayan mobil uygulama. Harcama analizleri ve bütçe planlaması.",
    image: "/images/project2.jpg",
    technologies: ["React Native", "Firebase", "Chart.js"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Blog Platformu",
    description: "Markdown destekli blog platformu. Kullanıcı yönetimi, yorum sistemi ve SEO optimizasyonu.",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Takım bazlı proje yönetim uygulaması. Görev atama, zaman çizelgesi ve ilerleme takibi.",
    image: "/images/project4.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Hava Durumu Uygulaması",
    description: "Gerçek zamanlı hava durumu ve 7 günlük tahmin sağlayan mobil uygulama.",
    image: "/images/project5.jpg",
    technologies: ["Flutter", "OpenWeather API", "Google Maps"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Modern ve etkileyici bir portföy websitesi. Animasyonlar ve interaktif elementler.",
    image: "/images/project6.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projelerim
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Yaptığım projelerden bazıları. Her proje farklı teknolojiler ve zorluklarla 
          geliştirildi. Daha fazla proje görmek için GitHub hesabıma göz atabilirsiniz.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['Tümü', 'Web', 'Mobil', 'Backend'].map((filter, index) => (
            <motion.button
              key={filter}
              className="px-6 py-2 rounded-full bg-dark-100 text-dark-700 hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary-100 to-primary-200 h-48 mb-4">
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.link}
                      className="btn-primary px-4 py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Canlı Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="btn-secondary px-4 py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-primary-600">
                  🚀
                </div>
              </div>

              {/* Project Content */}
              <div className="p-0">
                <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center text-sm text-dark-500 border-t border-dark-100 pt-4">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Tamamlandı</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Open Source</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-4">Daha Fazla Proje Görmek İster Misiniz?</h3>
          <p className="text-dark-600 mb-8 max-w-2xl mx-auto">
            GitHub hesabımda daha fazla proje ve açık kaynak katkılarımı inceleyebilirsiniz. 
            Yeni projeler üzerinde çalışırken sizlerle paylaşmayı seviyorum.
          </p>
          <motion.a
            href="#"
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>GitHub Profilim</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects