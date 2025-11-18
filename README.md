# Portfolio Personal Moderno

Portfolio personal minimalista y moderno construido con Next.js 14, TailwindCSS y Framer Motion.

## Características

- Diseño minimalista y limpio
- Animaciones suaves con Framer Motion
- Responsive design (mobile-first)
- Optimizado para SEO
- Navegación fluida
- Formulario de contacto funcional
- Iconos con Lucide React
- Transiciones elegantes
- Paleta de colores neutros con acentos en verde

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Despliegue:** Netlify

## Estructura del Proyecto

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # Página About
│   ├── contact/
│   │   └── page.tsx          # Página Contact
│   ├── projects/
│   │   └── page.tsx          # Página Projects
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página Home
├── components/
│   ├── ContactForm.tsx       # Formulario de contacto
│   ├── Footer.tsx            # Footer
│   ├── Hero.tsx              # Sección Hero
│   ├── Navbar.tsx            # Navbar
│   └── ProjectCard.tsx       # Tarjeta de proyecto
├── public/                   # Archivos estáticos
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Instalación

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Pasos

1. **Clonar o descargar el repositorio**

```bash
cd /Users/victortrisacperez/Documents/Altan
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

Visita [http://localhost:3000](http://localhost:3000)

## Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

- **app/layout.tsx** - Metadata y título
- **components/Hero.tsx** - Nombre y descripción
- **components/Footer.tsx** - Copyright y enlaces sociales
- **app/about/page.tsx** - Biografía, habilidades y timeline
- **app/projects/page.tsx** - Proyectos

### 2. Colores

Los colores se configuran en `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#10B981', // verde principal
    dark: '#059669',
    light: '#34D399',
  },
}
```

### 3. Redes Sociales

Actualiza los enlaces en:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### 4. Proyectos

Edita el array `projects` en `app/projects/page.tsx` con tus propios proyectos.

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm run start

# Linter
npm run lint
```

## Despliegue en Netlify

### Opción 1: Deploy desde Git (Recomendado)

1. **Sube tu código a GitHub/GitLab/Bitbucket**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repositorio>
git push -u origin main
```

2. **Conecta con Netlify**

- Ve a [Netlify](https://app.netlify.com)
- Click en "Add new site" → "Import an existing project"
- Selecciona tu repositorio
- Netlify detectará automáticamente Next.js
- Click en "Deploy"

### Opción 2: Deploy Manual

1. **Compilar el proyecto**

```bash
npm run build
```

2. **Deploy con Netlify CLI**

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Configuración de Netlify

El archivo `netlify.toml` ya está configurado con:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Netlify instalará automáticamente el plugin de Next.js.

### Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

2. En Netlify Dashboard:
   - Site settings → Environment variables
   - Agrega las mismas variables

## Optimizaciones

- Imágenes optimizadas con Next.js Image
- Lazy loading automático
- Code splitting
- CSS minificado
- Fuentes optimizadas
- Prefetching de rutas

## Accesibilidad

- Etiquetas semánticas HTML5
- Atributos ARIA apropiados
- Alt text en imágenes
- Navegación por teclado
- Contraste de colores accesible

## SEO

- Metadata configurada
- Open Graph tags
- Sitemap automático
- Robots.txt
- URLs semánticas

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

MIT License - Siéntete libre de usar este portfolio para tus proyectos personales.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactar:

- Email: tu@email.com
- GitHub: [@tuusuario](https://github.com/tuusuario)
- LinkedIn: [Tu Nombre](https://linkedin.com/in/tuusuario)

---

Hecho con ❤️ usando Next.js y TailwindCSS
