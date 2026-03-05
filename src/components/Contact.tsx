'use client'

import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Mesajınız gönderildi! En kısa sürede dönüş yapacağım.')
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'E-posta',
      detail: 'abdulkerim@example.com',
      link: 'mailto:abdulkerim@example.com'
    },
    {
      icon: PhoneIcon,
      title: 'Telefon',
      detail: '+90 555 123 45 67',
      link: 'tel:+905551234567'
    },
    {
      icon: MapPinIcon,
      title: 'Konum',
      detail: 'İstanbul, Türkiye',
      link: '#'
    },
    {
      icon: ClockIcon,
      title: 'Çalışma Saatleri',
      detail: 'Pazartesi - Cuma: 9:00 - 18:00',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          İletişim
        </motion.h2>
        <motion.p
          className="section-subtitle text-dark-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projeleriniz hakkında konuşmak veya bir iş birliği yapmak isterseniz,
          benimle iletişime geçmekten çekinmeyin. Size en kısa sürede dönüş yapacağım.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Bana Ulaşın</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-dark-300 hover:text-primary-400 transition-colors"
                    >
                      {info.detail}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: 'github', color: '#333', url: '#' },
                  { name: 'LinkedIn', icon: 'linkedin', color: '#0077B5', url: '#' },
                  { name: 'Twitter', icon: 'twitter', color: '#1DA1F2', url: '#' },
                  { name: 'Instagram', icon: 'instagram', color: '#E4405F', url: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform duration-300 shadow-soft"
                    style={{ backgroundColor: social.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-soft"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Mesaj Gönder</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Adınız ve soyadınız"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="ornek@email.com"
                />
              </motion.div>
            </div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                placeholder="Mesajınızın konusu"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Mesajınızı buraya yazabilirsiniz..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full btn-primary text-lg py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Mesajı Gönder
            </motion.button>

            <motion.p
              className="text-xs text-dark-500 text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Mesajınız en kısa sürede incelenecektir. Teşekkürler!
            </motion.p>
          </motion.form>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-4">Harita</h3>
          <div className="rounded-lg overflow-hidden h-96 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.1454972276492!2d29.061847875513198!3d40.9949720202449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7ee414a3ff5%3A0x2e566ef395311487!2s%C4%B0stanbul%20Medeniyet%20%C3%9Cniversitesi%20G%C3%BCney%20Yerle%C5%9Fke!5e1!3m2!1str!2str!4v1772737057650!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="İstanbul Medeniyet Üniversitesi Konumu"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact