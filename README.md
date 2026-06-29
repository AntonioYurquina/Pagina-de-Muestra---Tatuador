# 🎨 Ink Master Studio - Landing Page Premium

Landing page profesional para tatuador internacional, desarrollada con React.js, Vite, Tailwind CSS y Framer Motion. Diseño cinematográfico, oscuro y elegante con animaciones premium.

![Hero Preview](https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop)

## ✨ Características

- **🎭 Diseño Premium**: Estilo oscuro, elegante y minimalista inspirado en Apple, Nike y Awwwards
- **🎬 Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia cinematográfica
- **📱 Responsive Perfecto**: Optimizado para desktop, tablet y móviles
- **🚀 Alto Rendimiento**: Lazy loading, code splitting y optimizaciones avanzadas
- **♿ Accesible**: Navegación por teclado, ARIA labels y alto contraste
- **🌐 GitHub Pages Ready**: Configurado para deployment automático

## 🛠️ Tecnologías

- **React.js 19** - UI Framework
- **Vite 8** - Build tool ultrarrápido
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animaciones profesionales
- **React Router DOM 7** - Navegación con HashRouter
- **React Icons** - Iconografía moderna
- **React Masonry CSS** - Gallery layout
- **React Intersection Observer** - Scroll animations

## 📦 Instalación

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/pagina-profecional-de-prueba.git

# Entrar al directorio
cd pagina-profecional-de-prueba

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

El proyecto estará disponible en \`http://localhost:5173\`

## 🎯 Scripts Disponibles

\`\`\`bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Compila para producción en /dist
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta Oxlint

# Deployment
npm run deploy       # Despliega a GitHub Pages automáticamente
\`\`\`

## 🚀 Deployment a GitHub Pages

### Configuración Inicial

1. **Actualizar el package.json**:
   \`\`\`json
   "homepage": "https://TU-USUARIO.github.io/NOMBRE-REPO/"
   \`\`\`

2. **Actualizar vite.config.js**:
   \`\`\`js
   base: '/NOMBRE-REPO/'
   \`\`\`

### Desplegar

\`\`\`bash
# Compilar y desplegar en un solo comando
npm run deploy
\`\`\`

Este comando:
1. Ejecuta \`npm run build\` automáticamente (predeploy)
2. Sube el contenido de \`/dist\` a la rama \`gh-pages\`
3. GitHub Pages sirve el sitio automáticamente

### Verificar el Deployment

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Confirma que la fuente sea "gh-pages" branch
4. Visita \`https://TU-USUARIO.github.io/NOMBRE-REPO/\`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── assets/              # Imágenes y recursos estáticos
├── components/
│   ├── animations/      # Componentes de animación
│   │   ├── CountUp.jsx
│   │   ├── FadeIn.jsx
│   │   └── SlideIn.jsx
│   ├── layout/          # Layout components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── sections/        # Secciones de la página
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   └── Testimonials.jsx
│   └── ui/              # Componentes reutilizables
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── ScrollIndicator.jsx
│       └── SectionTitle.jsx
├── data/                # Datos y contenido
│   ├── content.js
│   ├── faq.js
│   ├── gallery.js
│   ├── services.js
│   └── testimonials.js
├── hooks/               # Custom hooks
│   ├── useInView.js
│   ├── useMediaQuery.js
│   └── useScrollPosition.js
├── pages/               # Páginas
│   └── Home.jsx
├── styles/              # Estilos globales
│   └── index.css
├── utils/               # Utilidades
│   ├── constants.js
│   └── validation.js
├── App.jsx
└── main.jsx
\`\`\`

## 🎨 Personalización

### Cambiar Colores

Edita \`tailwind.config.js\`:

\`\`\`js
colors: {
  dark: {
    DEFAULT: '#090909',  // Color de fondo principal
  },
  gold: {
    DEFAULT: '#D4AF37',  // Color dorado para acentos
  },
  crimson: {
    DEFAULT: '#8B0000',  // Color rojo para detalles
  },
}
\`\`\`

### Modificar Contenido

Todo el contenido textual está en archivos separados en \`/src/data/\`:

- **content.js**: Hero, About, Contact
- **services.js**: Especialidades
- **gallery.js**: Imágenes de galería
- **testimonials.js**: Opiniones de clientes
- **faq.js**: Preguntas frecuentes

### Cambiar Imágenes

Las imágenes usan Unsplash por defecto. Para usar imágenes locales:

1. Coloca tus imágenes en \`/src/assets/images/\`
2. Importa en los archivos de data:
   \`\`\`js
   import miImagen from '../assets/images/mi-imagen.jpg';
   \`\`\`

## 🎭 Secciones

1. **Hero**: Full-screen con overlay, CTA buttons y scroll indicator
2. **About**: Historia del artista, logros y experiencia
3. **Services**: 6 especialidades con iconos y descripciones
4. **Gallery**: Masonry layout con filtros y lightbox
5. **Process**: Timeline de 5 pasos del proceso de trabajo
6. **Stats**: 4 estadísticas animadas
7. **Testimonials**: Slider con opiniones de clientes
8. **FAQ**: Accordion con preguntas frecuentes
9. **Contact**: Formulario con validaciones
10. **Footer**: Información de contacto y redes sociales

## 🔧 Troubleshooting

### Error: "Cannot find module"
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Tailwind no aplica estilos
Verifica que \`index.css\` tenga:
\`\`\`css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
\`\`\`

### Rutas no funcionan en GitHub Pages
Asegúrate de usar \`HashRouter\` en lugar de \`BrowserRouter\` en \`App.jsx\`

### Build falla
\`\`\`bash
npm run build -- --debug
\`\`\`

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Dante Cruz** - Tatuador Internacional

- Instagram: [@dantecruztattoo](https://instagram.com)
- Email: info@inkmaster.com

---

⭐ **Si te gustó este proyecto, dale una estrella en GitHub!**

Desarrollado con ❤️ usando React.js y Framer Motion
