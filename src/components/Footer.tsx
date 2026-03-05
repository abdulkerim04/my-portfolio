import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  ]

  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-2xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Abdulkerim Işık
            </motion.h3>
            <motion.p 
              className="text-dark-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bilgisayar Mühendisliği öğrencisi | Medeniyet Üniversitesi | Yenilikçi çözümler ve modern teknolojilerle çalışmayı seven bir geliştirici.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-dark-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                <span>abdulkerim@example.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-dark-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <span>+90 555 123 45 67</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-dark-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MapPinIcon className="w-5 h-5 text-primary-400" />
                <span>İstanbul, Türkiye</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hızlı Bağlantılar
            </motion.h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Sosyal Medya
            </motion.h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                    <span className="text-sm font-bold">{social.icon}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-dark-700 mt-12 pt-8 text-center text-dark-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {currentYear} Abdulkerim Işık. Tüm hakları saklıdır.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer