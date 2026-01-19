# Cafetería Zen

Landing page moderna y elegante para una cafetería artesanal, desarrollada con HTML5, CSS3 y JavaScript vanilla.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Vista Previa

El sitio incluye:
- Hero section con video de fondo inmersivo
- Catálogo de productos más vendidos
- Menú digital interactivo
- Galería de imágenes con lightbox
- Sección de contacto con mapa integrado

## Características

### Diseño Moderno y Elegante

| Característica | Descripción |
|----------------|-------------|
| **Glassmorphism** | Efectos de vidrio esmerilado con `backdrop-filter: blur()` |
| **Gradientes dorados** | Paleta elegante con tonos `#c9a227` y `#d4af37` |
| **Sombras suaves** | Box-shadows elegantes en elementos interactivos |
| **Parallax** | Efecto de profundidad en fondos de secciones |
| **Scrollbar personalizada** | Barra de desplazamiento con colores de la marca |

### Animaciones y Transiciones

| Animación | Descripción |
|-----------|-------------|
| **fadeInUp** | Elementos aparecen desde abajo al cargar |
| **Hover effects** | Cards flotan, botones brillan, imágenes escalan |
| **Scroll animations** | Elementos se revelan al entrar en viewport |
| **Navbar inteligente** | Se oculta al bajar y aparece al subir |

### Interactividad (JavaScript)

| Funcionalidad | Descripción |
|---------------|-------------|
| **Scroll suave** | Navegación fluida entre secciones |
| **Link activo** | Resalta la sección actual en la navegación |
| **Lightbox** | Galería con visor de imágenes a pantalla completa |
| **Navegación por teclado** | Flechas y Escape en el lightbox |

### Responsive Design

El sitio se adapta perfectamente a todos los dispositivos:

- Desktop (1200px+)
- Laptop (992px)
- Tablet (768px)
- Móvil (578px)
- Móvil pequeño (420px)

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos, animaciones, Grid, Flexbox, Custom Properties |
| **JavaScript ES6+** | Interactividad y animaciones dinámicas |
| **Google Fonts** | Tipografías Open Sans y Pacifico |
| **Boxicons** | Iconos de redes sociales y UI |
| **Google Maps Embed** | Mapa de ubicación integrado |

## Estructura del Proyecto

```
Cafeteria/
├── index.html              # Página principal
├── README.md               # Documentación
├── css/
│   └── estilos.css         # Estilos del sitio
├── js/
│   └── main.js             # JavaScript para interactividad
├── images/
│   ├── pro1.jpg            # Latte
│   ├── pro2.jpg            # Espresso
│   ├── pro3.jpg            # Cappuccino
│   ├── pro4.jpg            # Mochaccino
│   ├── new-pro.webp        # Producto destacado
│   ├── bg-img1.jpg         # Fondo sección productos
│   ├── bg-img2.jpg         # Fondo sección nuevo producto
│   └── ...                 # Imágenes de galería
└── videos/
    ├── welcome-video.mp4   # Video de fondo
    └── welcome-video.webm  # Video formato alternativo
```

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/JoseMartin1509/CafeteriaZen.git
```

2. Abre el proyecto:
```bash
cd CafeteriaZen
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve
```

## Secciones del Sitio

### 1. Header / Hero
- Video de fondo a pantalla completa
- Logo y slogan animados
- Navegación sticky con efecto glassmorphism
- Call-to-action principal

### 2. Productos Más Vendidos
- Grid responsivo de 4 productos
- Cards con efecto hover flotante
- Precios y botones de acción

### 3. Nuevo Producto
- Layout flexible imagen + texto
- Efecto parallax en fondo
- Diseño adaptable vertical/horizontal

### 4. Menú Digital
- Dos columnas: Bebidas y Delicias
- Diseño tipo carta de restaurante
- Precios y descripciones detalladas

### 5. Galería
- Grid de 8 imágenes
- Efecto hover con escala y color
- Lightbox con navegación completa

### 6. Contacto
- Información de ubicación
- Horarios de atención
- Mapa de Google integrado

### 7. Footer
- Logo y redes sociales
- Enlaces de navegación
- Información legal

## Paleta de Colores

```css
--bg-color: #1a0f0a;           /* Fondo principal - Marrón oscuro */
--second-bg-color: #c9a227;    /* Acento - Dorado */
--accent-color: #d4af37;       /* Acento secundario - Dorado claro */
--text-color: #f5f5f5;         /* Texto principal - Blanco humo */
--text-muted: #b8b8b8;         /* Texto secundario - Gris */
--glass-bg: rgba(26, 15, 10, 0.85);  /* Glassmorphism */
```

## Tipografías

- **Open Sans** - Cuerpo de texto, legible y moderna
- **Pacifico** - Títulos decorativos, estilo cursivo elegante

## Rendimiento

- Imágenes optimizadas en formato WebP
- Videos en formatos MP4 y WebM
- CSS y JS minificables
- Lazy loading en iframe del mapa
- Sin dependencias externas de JavaScript

---

**Cafetería Zen** - El Arte del Café
