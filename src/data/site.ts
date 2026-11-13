export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  features: string[];
  isOpen: boolean;
}

export interface FaqItem {
  id: string;
  title: string;
  desc: string;
  isOpen: boolean;
}

export interface BlogArticle {
  title: string;
  url: string;
  vector: 'server' | 'workflow' | 'terminal' | 'brain';
}

export const SITE_CONFIG = {
  brand: 'Minji Labs',
  title: 'Minji | Desarrollo Web & Landing Pages',
  description: 'Webs rápidas a medida en Lima. Trato directo 1 a 1 con quien diseña y programa tu página, listas en días.',
  email: 'contactominji@gmail.com',
  whatsappNumber: '51935343336',
  blogUrl: 'https://sintaxisminji.blog',
  location: 'Lima, Perú',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const TECH_TOOLS: readonly { name: string }[] = [
  { name: 'Astro 5' },
  { name: 'Tailwind CSS' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Figma' },
  { name: 'Vercel' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-1',
    title: 'One-page website',
    desc: 'Una sola página pensada para que quien entre entienda qué ofreces y te escriba por WhatsApp en segundos. Lista en 3 a 5 días hábiles tras recibir tu material.',
    features: [],
    isOpen: true,
  },
  {
    id: 'landing-multi',
    title: 'Multi-page website',
    desc: 'Sitio con secciones e internas separadas para negocios o marcas que necesitan mostrar catálogo, servicios o historia con carga rápida en celular.',
    features: [],
    isOpen: false,
  },
  {
    id: 'soporte',
    title: 'Soporte de página',
    desc: 'Monitoreo, copias de seguridad y actualización de textos o fotos cuando lo necesites por WhatsApp, sin contratos de permanencia.',
    features: [],
    isOpen: false,
  },
  {
    id: 'apps',
    title: 'Aplicación Web',
    desc: 'Herramientas web a medida para reservas, catálogos dinámicos o procesos internos de tu negocio. Cuéntame qué necesitas automatizar y lo cotizamos.',
    features: [],
    isOpen: false,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-proceso',
    title: '¿Cómo es el proceso de trabajo contigo?',
    desc: 'Me escribes por WhatsApp con tu idea o rubro. En la misma conversación definimos qué secciones necesitas y te envío una cotización con fecha exacta de entrega.',
    isOpen: true,
  },
  {
    id: 'faq-trato',
    title: '¿Por qué trabajar conmigo directamente?',
    desc: 'No hay ejecutivos de cuenta ni teléfonos malogrados. Hablas directo por WhatsApp con quien diseña y programa tu web, con 30 días de garantía técnica tras la entrega.',
    isOpen: false,
  },
  {
    id: 'faq-tiempo',
    title: '¿En cuánto tiempo tengo mi web lista?',
    desc: 'Una landing de una página toma de 3 a 5 días hábiles desde que entregas tus textos y fotos. Un sitio multipágina toma entre 7 y 12 días hábiles.',
    isOpen: false,
  },
  {
    id: 'faq-soporte',
    title: '¿Cómo funciona el soporte mensual?',
    desc: 'Es opcional y se cotiza según el tamaño de tu web. Cubre disponibilidad, respaldos y cambios puntuales de textos o fotos por WhatsApp, sin permanencia forzosa.',
    isOpen: false,
  },
  {
    id: 'faq-insumos',
    title: '¿Qué necesito tener listo para empezar?',
    desc: 'Tu logotipo (si tienes), los textos base y las fotos de tu negocio o producto. Si aún no los tienes ordenados, te ayudo a estructurarlos antes de empezar.',
    isOpen: false,
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: 'Server-Side Rendering (SSR) vs Static Site Generation (SSG): Dilema del rendimiento',
    url: 'https://sintaxisminji.blog/blog/server-side-rendering-ssr-vs-static-site-generation-ssg-el-dilema-del-rendimiento',
    vector: 'server',
  },
  {
    title: 'Automatizando la Paz Mental: GitHub Actions para reducir el estrés',
    url: 'https://sintaxisminji.blog/blog/automatizando-la-paz-mental-github-actions-para-reducir-el-estres',
    vector: 'workflow',
  },
  {
    title: 'De picar código a orquestar sistemas: Optimizando VS Code con Cline y DeepSeek',
    url: 'https://sintaxisminji.blog/blog/de-picar-codigo-a-orquestar-sistemas-optimizando-vs-code-con-cline-y-deepseek',
    vector: 'terminal',
  },
  {
    title: 'El dilema del erizo: Ansiedad de separación y el Yo fragmentado en Shinji Ikari',
    url: 'https://sintaxisminji.blog/blog/el-dilema-del-erizo-ansiedad-de-separacion-y-el-yo-fragmentado-en-shinji-ikari',
    vector: 'brain',
  },
];
