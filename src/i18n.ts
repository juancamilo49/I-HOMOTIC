import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      navbar: {
        home: 'Inicio',
        nosotros: 'Nosotros',
        projects: 'Proyectos',
      },
      hero: {
        title: 'Tecnología inteligente',
        subtitle: 'para hogares sostenibles',
        description:
          'Transformamos espacios con automatización avanzada, eficiencia energética y soluciones IoT de última generación para un estilo de vida más cómodo y sostenible.',
        contact: 'Contáctanos',
        messageSent: 'Tu mensaje ha sido enviado',
      },
      services: {
        title: 'Nuestros Servicios',
        description:
          'Soluciones integrales de domótica para hogares y empresas, diseñadas para maximizar la eficiencia y el confort.',
        automationTitle: 'Automatización del Hogar',
        automationDescription:
          'Controla todos los sistemas de tu hogar desde una sola plataforma. Iluminación, climatización, persianas y electrodomésticos integrados de forma inteligente.',
        lightingTitle: 'Iluminación Inteligente',
        lightingDescription:
          'Sistemas de iluminación adaptativos que ajustan intensidad y color según la hora del día, presencia y preferencias personales para máximo confort.',
        securityTitle: 'Seguridad y CCTV',
        securityDescription:
          'Vigilancia 24/7 con cámaras HD, sensores de movimiento, alarmas inteligentes y control de acceso remoto para la tranquilidad de tu familia.',
      },
      projects: {
        title: 'Nuestros Proyectos',
        subtitle:
          'Descubre cómo hemos transformado espacios con soluciones de domótica inteligente.',
        villaTitle: 'Smart Villa North',
        villaDescription:
          'Automatización completa de villa de lujo con control de iluminación, climatización y seguridad integrada.',
        hqTitle: 'Corporate HQ Automation',
        hqDescription:
          'Sistema integral de gestión de edificio inteligente con eficiencia energética y control de acceso avanzado.',
        viewProject: 'Ver Proyecto',
        // NUEVAS TRADUCCIONES PARA PROYECTOS
        pageTitle: 'Nuestros Proyectos',
        pageSubtitle: 'Tecnología Inteligente y Eficiencia Energética',
        pageDescription: 'Descubre cómo hemos transformado espacios con soluciones de domótica inteligente.',
        featuredTitle: 'Casa de lujo en Llanogrande',
        featuredDescription: 'Transformamos un exclusivo penthouse en un hogar completamente inteligente. El proyecto incluyó automatización total de iluminación con escenas personalizadas, climatización inteligente por zonas, sistema de audio multi-zona con altavoces empotrados en cada habitación y una sala de cine privada con proyector 4K y sonido envolvente Dolby Atmos. Todo controlado desde una sola aplicación móvil con acceso remoto desde cualquier parte del mundo.',
        featuredAlt: 'Proyecto destacado',
        otherProjects: 'Otros Proyectos',
        otherProjectsDescription: 'Descubre cómo hemos transformado espacios con soluciones de domótica inteligente.',
        project1Title: 'Villa Eco-Sostenible',
        project1Description: 'Automatización completa con paneles solares integrados, gestión energética inteligente y control total desde el móvil.',
        project2Title: 'Residencia Smart Norte',
        project2Description: 'Sistema de seguridad avanzado con cámaras 4K, control de acceso biométrico e iluminación automatizada por zonas.',
        project3Title: 'Apartamento Conectado',
        project3Description: 'Integración completa de electrodomésticos, climatización inteligente y sistema de audio multi-zona para máximo confort.',
        project4Title: 'Apartamento Conectado Premium',
        project4Description: 'Integración completa de electrodomésticos, climatización inteligente y sistema de audio multi-zona para máximo confort.',
        project1Alt: 'Proyecto Villa Eco-Sostenible',
        project2Alt: 'Proyecto Residencia Smart Norte',
        project3Alt: 'Proyecto Apartamento Conectado',
        project4Alt: 'Proyecto Apartamento Conectado Premium',
      },
      // NUEVA SECCIÓN PARA NOSOTROS
      nosotros: {
        aboutTitle: 'Sobre Nosotros',
        aboutSubtitle: 'Liderando la transformación digital del hogar con soluciones sostenibles e innovadoras.',
        aboutDescription: 'En IHomotic nos dedicamos a crear espacios inteligentes que mejoran la calidad de vida. Con años de experiencia en el sector de la domótica, ofrecemos soluciones personalizadas que combinan tecnología de vanguardia con un compromiso firme por la sostenibilidad.',
        valuesTitle: 'Nuestros Valores',
        value1: 'Innovación constante en tecnología del hogar',
        value2: 'Compromiso con la sostenibilidad y el medio ambiente',
        value3: 'Calidad superior en cada instalación',
        value4: 'Atención personalizada y soporte continuo',
        projects: 'Proyectos',
        clients: 'Clientes Satisfechos',
        experience: 'Años de Experiencia',
        cities: 'Ciudades',
        teamTitle: 'Nuestro Equipo',
        teamSubtitle: 'Descubre a los expertos apasionados que hacen posible la magia de la domótica en cada proyecto.',
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
      },
      hero: {
        title: 'Smart technology',
        subtitle: 'for sustainable homes',
        description:
          'We transform spaces with advanced automation, energy efficiency, and cutting-edge IoT solutions for a more comfortable and sustainable lifestyle.',
        contact: 'Contact us',
        messageSent: 'Your message has been sent',
      },
      services: {
        title: 'Our Services',
        description:
          'End-to-end smart home solutions for homes and businesses, designed to maximize efficiency and comfort.',
        automationTitle: 'Home Automation',
        automationDescription:
          'Control all your home systems from a single platform. Lighting, climate, blinds, and appliances all working together intelligently.',
        lightingTitle: 'Smart Lighting',
        lightingDescription:
          'Adaptive lighting systems that adjust intensity and color based on time of day, presence, and personal preferences for maximum comfort.',
        securityTitle: 'Security & CCTV',
        securityDescription:
          '24/7 monitoring with HD cameras, motion sensors, smart alarms, and remote access control for complete peace of mind.',
      },
      projects: {
        title: 'Our Projects',
        subtitle:
          'Discover how we have transformed spaces with smart home automation solutions.',
        villaTitle: 'Smart Villa North',
        villaDescription:
          'Full automation of a luxury villa including lighting, climate, and integrated security control.',
        hqTitle: 'Corporate HQ Automation',
        hqDescription:
          'Comprehensive smart building management system with energy efficiency and advanced access control.',
        viewProject: 'View Project',
        // NUEVAS TRADUCCIONES PARA PROYECTOS (INGLÉS)
        pageTitle: 'Our Projects',
        pageSubtitle: 'Smart Technology and Energy Efficiency',
        pageDescription: 'Discover how we have transformed spaces with intelligent home automation solutions.',
        featuredTitle: 'Luxury House in Llanogrande',
        featuredDescription: 'We transformed an exclusive penthouse into a fully smart home. The project included total lighting automation with personalized scenes, intelligent zoning climate control, multi-zone audio system with built-in speakers in every room, and a private cinema with 4K projector and Dolby Atmos surround sound. All controlled from a single mobile app with remote access from anywhere in the world.',
        featuredAlt: 'Featured project',
        otherProjects: 'Other Projects',
        otherProjectsDescription: 'Discover how we have transformed spaces with intelligent home automation solutions.',
        project1Title: 'Eco-Sustainable Villa',
        project1Description: 'Complete automation with integrated solar panels, smart energy management, and full mobile control.',
        project2Title: 'Smart North Residence',
        project2Description: 'Advanced security system with 4K cameras, biometric access control, and zoned automated lighting.',
        project3Title: 'Connected Apartment',
        project3Description: 'Full integration of appliances, smart climate control, and multi-zone audio system for maximum comfort.',
        project4Title: 'Premium Connected Apartment',
        project4Description: 'Full integration of appliances, smart climate control, and multi-zone audio system for maximum comfort.',
        project1Alt: 'Eco-Sustainable Villa project',
        project2Alt: 'Smart North Residence project',
        project3Alt: 'Connected Apartment project',
        project4Alt: 'Premium Connected Apartment project',
      },
      // NUEVA SECCIÓN PARA NOSOTROS (INGLÉS)
      nosotros: {
        aboutTitle: 'About Us',
        aboutSubtitle: 'Leading the digital transformation of homes with sustainable and innovative solutions.',
        aboutDescription: 'At IHomotic we create intelligent spaces that improve quality of life. With years of experience in the home automation sector, we offer personalized solutions combining cutting-edge technology with a strong commitment to sustainability.',
        valuesTitle: 'Our Values',
        value1: 'Constant innovation in home technology',
        value2: 'Commitment to sustainability and the environment',
        value3: 'Superior quality in every installation',
        value4: 'Personalized attention and continuous support',
        projects: 'Projects',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience',
        cities: 'Cities',
        teamTitle: 'Our Team',
        teamSubtitle: 'Meet the passionate experts who make the magic of home automation possible in every project.',
      },
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n