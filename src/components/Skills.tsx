'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E', icon: 'JS' },
  { name: 'TypeScript', level: 85, color: '#3178C6', icon: 'TS' },
  { name: 'React', level: 88, color: '#61DAFB', icon: '⚛️' },
  { name: 'Next.js', level: 92, color: '#000000', icon: 'N' },
  { name: 'Node.js', level: 80, color: '#339933', icon: '⬢' },
  { name: 'Python', level: 75, color: '#3776AB', icon: '🐍' },
  { name: 'HTML5', level: 95, color: '#E34F26', icon: 'HTML' },
  { name: 'CSS3', level: 90, color: '#1572B6', icon: 'CSS' },
  { name: 'Tailwind CSS', level: 93, color: '#06B6D4', icon: 'T' },
  { name: 'Git', level: 85, color: '#F05032', icon: 'Git' },
  { name: 'Docker', level: 70, color: '#2496ED', icon: '🐳' },
  { name: 'MongoDB', level: 75, color: '#47A447', icon: '🍃' },
]

const Skills = () => {
  const { t } = useTranslation('common')

  return (
    <section id="skills" className="py-20 bg-dark-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-dark-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('skills.title')}
        </motion.h2>
        <motion.p
          className="section-subtitle text-dark-600 dark:text-dark-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('skills.description')}
        </motion.p>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card-hover group bg-white dark:bg-dark-800 p-6 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-soft"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{t('skills.expertise')}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-dark-300 dark:text-dark-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Hover Details */}
              <motion.div
                className="mt-4 text-sm text-dark-600 dark:text-dark-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {t('skills.hoverText', { skill: skill.name })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Visualization */}
        <motion.div
          className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-soft"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">{t('skills.distribution')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: t('skills.categories.frontend'), percentage: 92, color: '#3b82f6', colorName: 'blue' },
              { category: t('skills.categories.backend'), percentage: 85, color: '#10b981', colorName: 'green' },
              { category: t('skills.categories.database'), percentage: 78, color: '#8b5cf6', colorName: 'purple' },
              { category: t('skills.categories.devops'), percentage: 70, color: '#f59e0b', colorName: 'orange' },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="relative inline-block">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={category.color} />
                        <stop offset="100%" stopColor={category.color} stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      className="dark:stroke-dark-600"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: category.percentage / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-dark-900 dark:text-white">{category.percentage}%</span>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-dark-700 dark:text-dark-200">{category.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills