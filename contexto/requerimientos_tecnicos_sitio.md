# Requerimientos Técnicos — Sitio Web i-Homotic
**Producto 2 del proyecto de diseño integrado**  
**Fuente:** Matriz de Requerimientos · Planteamiento y Requerimientos i-Homotic  
**Institución:** Universidad EAFIT · Diseño de Interacción + Frontend · 2026

---

## Contexto del Producto

El sitio web de i-Homotic debe funcionar como **el primer vendedor de la empresa**: un espacio digital que genere confianza antes de que exista cualquier contacto humano. La experiencia debe transmitir seguridad, claridad, control y cercanía profesional.

> El usuario debe sentirse informado sin sentirse abrumado, acompañado sin sentirse presionado, y capaz de entender la domótica por su cuenta.

**Stack tecnológico del proyecto:**
- React 19 + TypeScript + Material UI v7 (sitio base existente, repositorio `ioav/I-HOMOTIC`)
- Vanilla HTML/CSS/JS (herramientas interactivas nuevas, un archivo por herramienta)
- n8n para automatización de formularios (webhook, variables con patrón `$json.body.[campo]`)
- Three.js para visualizador 3D de la casa

---

## 2.1 Arquitectura de Información y Navegación

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Mapa del sitio con estructura jerárquica clara | Alta | Necesidad |
| Navegación principal visible en todas las páginas | Alta | Necesidad |
| Acceso a cualquier contenido en máximo 3 clics | Alta | Necesidad |
| Diseño responsive mobile-first | Alta | Necesidad |
| Footer informativo con contacto, redes y marca GELECT | Alta | Necesidad |

**Secciones principales definidas:** Inicio, Proyectos/Galería, Servicios, ¿Qué es la domótica?, Sobre Nosotros, Contacto. Máximo 2 niveles de profundidad.

**Navegación:** Menú hamburguesa en móvil, barra horizontal en escritorio. Logo clickeable a inicio. Breadcrumbs en páginas internas.

**Responsive:** Priorizar Android (dispositivo principal del segmento colombiano). El 77,3% de hogares colombianos con internet accede principalmente por celular.

**Footer debe incluir:** Número WhatsApp (enlace directo), teléfono, correo, dirección del showroom, Instagram, YouTube, logo GELECT como marca paraguas, aviso de privacidad.

---

## 2.2 Página de Inicio

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Hero visual con video o imagen de proyecto real | Alta | Necesidad |
| Propuesta de valor visible en los primeros 3 segundos sin scroll | Alta | Necesidad |
| Sección de proyectos destacados (3-4 casos) | Alta | Necesidad |
| Testimonios de clientes reales en home | Alta | Necesidad |
| Acceso al quiz "¿Por dónde empiezo?" desde el home | Alta | Deseo |
| Indicadores de confianza (cifras clave de la empresa) | Media | Deseo |

**Hero:** Video corto o imagen de alta calidad de proyecto real. Headline con propuesta de valor en una frase. CTA principal visible.

**Above the fold:** Los 3 pilares diferenciadores deben estar visibles sin scroll: fabricación 100% colombiana, sin mensualidades, compatible con Alexa/Google/Siri.

**Proyectos destacados:** Tarjetas con miniatura, tipo de vivienda y ubicación. Enlace a galería completa.

**Testimonios:** Carrusel con nombre, foto, tipo de proyecto y tiempo desde la instalación.

---

## 2.3 Galería y Portafolio de Proyectos

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Galería con filtros por tipo de vivienda y solución | Alta | Necesidad |
| Página individual por proyecto con multimedia completo | Alta | Necesidad |
| Plano interactivo del proyecto con hotspots tocables | Alta | Necesidad |
| Slider antes/después por proyecto | Alta | Deseo |
| Indicador de tiempo desde la instalación en testimonio | Media | Deseo |
| Contenido compartible por WhatsApp con Open Graph | Alta | Necesidad |

**Filtros de galería:** casa/apartamento, ciudad, tipo de solución (seguridad, iluminación, climatización, integral).

**Página de proyecto:** Carrusel de fotos antes/después con slider deslizable, video de recorrido (30-90s), descripción de instalación, testimonio con foto/nombre, rango de inversión orientativo.

**Plano interactivo:** El usuario toca zonas para ver dispositivo instalado. Tarjeta emergente con: qué es, qué hace, cómo funciona. Traduce lo técnico a lo cotidiano.

**Open Graph:** Todas las páginas con metaetiquetas OG (imagen, título, descripción) para previsualización rica al compartir en WhatsApp.

---

## 2.4 Herramientas Interactivas y Pedagógicas

Estas son las herramientas centrales del proyecto. Cada una responde directamente a un insight de investigación.

| Herramienta | Insight | Prioridad | Tipo |
|---|---|---|---|
| Simulador "Descubre tu casa inteligente" | I4 — Pedagogía | Alta | Deseo |
| Quiz "¿Por dónde empiezo?" | I4 — Pedagogía | Alta | Deseo |
| Configurador modular "Arma tu solución" | I3 — Expansión gradual | Alta | Deseo |
| Mapa del ecosistema "Haz crecer tu sistema" | I3 — Expansión gradual | Alta | Deseo |
| Calculadora de beneficios y ahorro energético | I5 — Ver para creer | Media | Deseo |
| Recorrido virtual 360° por el showroom | I1 — Confianza digital | Media | Deseo |
| Demo "Simula la experiencia" | I2 — Parálisis | Media | Deseo |

### Simulador "Descubre tu casa inteligente"
Plano de hogar donde el usuario toca espacios (sala, cocina, habitación, entrada) y ve posibilidades de automatización con micro-animaciones. Explicaciones en lenguaje cotidiano ("Esto detecta fugas y te avisa al celular"). Sin tecnicismos. Implementado con Three.js (visualizador 3D con hotspots por habitación).

### Quiz "¿Por dónde empiezo?"
4-5 preguntas con íconos: tipo de vivienda, prioridad (seguridad/ahorro/comodidad), dispositivos existentes. Genera recomendación con paquete de entrada, rango de inversión y botón de WhatsApp. Vanilla JS, un archivo independiente.

### Configurador modular "Arma tu solución"
El usuario selecciona necesidad principal, ve componentes con íconos, agrega/quita elementos y ve rango de inversión en tiempo real. Transmite que puede empezar pequeño y expandir. Vanilla JS.

### Mapa del ecosistema "Haz crecer tu sistema"
Visualización interactiva donde el usuario marca lo que ya tiene y el mapa resalta ampliaciones compatibles. Cada una con: qué hace, qué necesita, rango de inversión. Incluye trayectorias reales de clientes. Vanilla JS.

### Calculadora de beneficios y ahorro energético
Sliders para: tipo de vivienda, habitaciones, consumo estimado. Muestra ahorro mensual y comparación con/sin domótica a 1, 3 y 5 años. Resultado descargable como PDF o compartible por WhatsApp.

### Recorrido virtual 360°
Tour por la casa-showroom real de i-Homotic. Hotspots sobre cada dispositivo despliegan tarjeta explicativa. Audio-guía opcional. Enlace compartible.

### Demo "Simula la experiencia"
El usuario toca "simular alerta de fuga" y ve paso a paso: sensor detecta → envía señal → notificación en celular. Convierte lo abstracto en tangible sin requerir dispositivo físico.

---

## 2.5 Contenido y Comunicación

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Contenido visual priorizado sobre el textual | Alta | Necesidad |
| Fichas técnicas descargables en PDF por producto | Media | Necesidad |
| Lenguaje accesible sin jerga técnica | Alta | Necesidad |
| Contenido multigeneracional (padres 40+ e hijos 20-30) | Alta | Necesidad |
| Página "Sobre Nosotros" con historia de i-Homotic y Carlos | Alta | Necesidad |
| Sección de preguntas frecuentes (FAQ) | Media | Necesidad |
| Blog o sección de contenido educativo para SEO | Media | Deseo |

**Directriz de contenido:** Imágenes y videos de proyectos reales como mecanismo principal de comunicación. El texto acompaña y contextualiza, nunca domina.

**FAQ:** Categorías: costos, instalación, compatibilidad, mantenimiento, seguridad de datos.

---

## 2.6 Contacto y Conversión

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Botón de WhatsApp flotante en todas las páginas | Alta | Necesidad |
| Formulario de contacto sencillo (máximo 4 campos) | Alta | Necesidad |
| **NO implementar chatbot ni automatización conversacional** | Alta | Necesidad |
| CTAs diferenciados según momento del journey | Media | Deseo |
| Información de contacto directo visible | Alta | Necesidad |
| Invitación a visitar el showroom con fotos y opción de agendar | Media | Necesidad |

**Formulario (campos máximos):** nombre, teléfono/WhatsApp, tipo de vivienda, interés. Integrado con n8n via webhook. Variables con patrón `$json.body.[campo]`.

**RESTRICCIÓN EXPLÍCITA DEL CLIENTE:** Carlos Lezcano ha descartado explícitamente chatbots y herramientas de automatización conversacional. La estrategia digital informa y genera confianza; la conversión ocurre a través de contacto directo por WhatsApp o teléfono.

**CTAs diferenciados:**
- "Solicita asesoría por WhatsApp" → para quien quiere cotizar
- "Descubre cómo funciona" → para quien necesita más información

**WhatsApp flotante:** Omnipresente en móvil y escritorio. Al hacer clic abre conversación con mensaje predefinido según la sección desde donde se contacte. Placeholder actual: `573XXXXXXXXXX`.

---

## 2.7 Usabilidad y Accesibilidad

| Requerimiento | Estándar | Prioridad |
|---|---|---|
| Simplicidad visual como principio rector | Interfaces claras, espacios en blanco generosos, jerarquía visual clara | Alta |
| Textos legibles en móvil | Mínimo 16px en cuerpo de texto | Alta |
| Áreas táctiles adecuadas | Mínimo 44×44 px en botones | Alta |
| Contraste WCAG AA | Ratio mínimo 4.5:1 (texto normal), 3:1 (texto grande) | Alta |
| Navegación amigable para usuarios 40+ | Etiquetas descriptivas, feedback visual, flujos lineales | Alta |
| Feedback visual en todas las interacciones | Cambio de estado en botones, indicadores de carga, mensajes de éxito/error | Alta |
| Tiempo de carga < 3 segundos en 4G colombiana | Imágenes WebP, lazy loading en videos | Alta |

**Principio de Carlos (cliente):** "Lo sofisticado se complica." Cero decoración innecesaria.

**Optimización de imágenes:** WebP, lazy loading para videos, priorizar contenido above-the-fold.

---

## 2.8 Requerimientos Técnicos de Infraestructura

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Hosting con SSL y disponibilidad 99.9% | Alta | Necesidad |
| CMS que permita autonomía de actualización al cliente | Alta | Necesidad |
| Dominio coherente con marca paraguas GELECT | Alta | Necesidad |
| SEO local optimizado (Colombia, Medellín) | Alta | Necesidad |
| Metaetiquetas Open Graph para WhatsApp y redes | Alta | Necesidad |
| Compatibilidad con Chrome (Android), Safari (iOS), Firefox | Alta | Necesidad |
| Google Analytics integrado | Media | Deseo |
| Integración con Google Business Profile | Alta | Necesidad |

**Hosting:** Certificado HTTPS, CDN para optimización de carga, backups automáticos. Sin dependencia de servidores propietarios (coherente con filosofía de i-Homotic).

**CMS:** Carlos necesita editar textos, subir fotos y publicar proyectos sin depender de terceros.

**Dominio:** Estructura que refleje la relación con GELECT S.A.S. (ej: `ihomotic.gelect.com` o `ihomotic.com` con referencia a GELECT).

**SEO local:** Metadatos, alt en imágenes, URLs amigables, Google Business Profile, schema markup. Meta: aparecer en búsquedas de "domótica Medellín" o "casa inteligente Colombia".

**Navegadores prioritarios:** Chrome en Android (67% del mercado colombiano), luego Safari (iOS) y Firefox.

**Google Analytics:** Medir páginas más visitadas, origen de tráfico, tasa de conversión de formularios, uso del quiz/configurador y compartición por WhatsApp.

---

## 2.9 Elementos de Confianza y Credibilidad

| Requerimiento | Prioridad | Tipo |
|---|---|---|
| Testimonios reales con datos verificables | Alta | Necesidad |
| Carlos visible como fundador y experto técnico | Alta | Necesidad |
| Diferenciadores competitivos comunicados visualmente | Alta | Necesidad |
| Compatibilidad con Alexa, Google Assistant y Siri destacada | Alta | Necesidad |
| Garantía de independencia tecnológica del cliente | Alta | Necesidad |
| Servicio integral comunicado (asesoría → instalación → soporte) | Alta | Necesidad |
| Política de garantía y soporte postventa visible | Media | Necesidad |

**Testimonios:** Nombre real, foto, tipo de proyecto, ubicación, tiempo desde la instalación. Sin testimonios genéricos.

**Diferenciadores vs. competencia (a comunicar visualmente):**
- Fabricación 100% nacional
- Sin mensualidades
- Sin dependencia de servidores externos
- Precios accesibles (USD 2K–8K vs. USD 15K–150K de Control4, Crestron o Savant)
- Cableado UTP de bajo costo

**Independencia tecnológica:** El sistema no depende de terceros, no se puede descontinuar, el cliente no queda cautivo de ningún ecosistema externo.

**Servicio integral (diferenciador único en el mercado local):** Asesoría + diseño + materiales + instalación + soporte postventa bajo un solo proveedor.

---

## Tokens de Diseño (Design System)

Los siguientes valores son los oficiales del sistema de diseño de i-Homotic y deben aplicarse consistentemente en toda la implementación:

```css
--colorletraverde: #2d3a2d;
--verdeclaro: #4c7b45;
--naranja: #E8721A;
--naranjahover: #F07F2A;
--colorfondoverdeclaro: #f4faf5;
--colorfondoverde: #eef3dd;
```

**Tipografía:** Sora (Bold, SemiBold, Regular) — nota: en Figma, SemiBold se escribe como `"SemiBold"` sin espacio.

**Figma:** El sistema de marca está construido en Figma (`oKjawtqBQ4pl2DGOAhdR2s`) con ~99 variantes de componentes en páginas Tokens, Atoms, Molecules y Organisms.

---

## Convenciones Técnicas del Proyecto

- **Webhook n8n:** Variables de formulario siguen el patrón `$json.body.[campo]` (ej: `$json.body.nombre`, `$json.body.telefono`)
- **Herramientas interactivas:** Un archivo HTML/CSS/JS por herramienta (vanilla, sin framework)
- **Visualizador 3D:** Three.js r128 — no usar `THREE.CapsuleGeometry` (introducida en r142), usar `CylinderGeometry` o `SphereGeometry`
- **WhatsApp:** Placeholder de número `573XXXXXXXXXX` hasta confirmar número definitivo
- **Email de confirmación:** Template HTML alineado al design system, con variables n8n

---

## Jerarquía de Priorización

Las herramientas interactivas y los elementos de confianza tienen la más alta prioridad estratégica porque responden directamente a los 5 insights de investigación. Todo lo demás existe para soportarlas.

| Capa | Elementos | Fundamentación |
|---|---|---|
| Crítica | Quiz, Configurador, Galería de proyectos, Testimonios verificables | I1, I2, I3, I4, I5 |
| Alta | Calculadora de ahorro, Simulador de casa, WhatsApp flotante, Hero visual | I3, I4, I5 |
| Media | Recorrido 360°, Demo simulación, Blog/SEO, Google Analytics | I1, I2 |
| Infraestructura | Hosting, CMS, Open Graph, SEO local | Soporte a todas las capas |

---

*Fuente: Planteamiento de Diseño y Matriz de Requerimientos — Proyecto i-Homotic*  
*Universidad EAFIT · Diseño de Interacción + Frontend · 2026*
