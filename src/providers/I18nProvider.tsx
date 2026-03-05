'use client'

import React, { ReactNode } from 'react'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import en from '../../public/locales/en/common.json'
import tr from '../../public/locales/tr/common.json'

interface I18nProviderProps {
  children: ReactNode
}

// Initialize i18n
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'tr',
    fallbackLng: 'tr',
    resources: {
      en: {
        common: en,
      },
      tr: {
        common: tr,
      },
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}
