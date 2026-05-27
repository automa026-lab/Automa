CLAUDE.md — Memoria Maestra del Proyecto
Este archivo va en la raíz del repositorio. Claude Code lo lee automáticamente en cada sesión. Mantenerlo CORTO y actualizado. Es la fuente de verdad del contexto. No duplicar info. Última actualización: [26 de mayo de 2026]


1. Qué estamos construyendo (en una frase)
Plataforma todo-en-uno para que personas de LATAM, sin conocimientos técnicos, lancen y operen su negocio digital (empezando por dropshipping), en español, con ayuda de IA.
2. Estado actual del proyecto
Fase: 1 — Prototipo (web)
Caso de uso v1: Tienda propia integrada (dropshipping) + Shopify como opción secundaria
Modelo de retención elegido: Híbrido — tienda propia 100% en nuestra infraestructura (retención por valor) + opción de conectar Shopify existente
Lo último que se construyó: Registro / login con Supabase Auth (2026-05-27) — páginas /registro, /login, /dashboard básico, cliente Supabase en src/lib/supabase.ts.
Lo siguiente a construir: Dashboard → Wizard de onboarding (spec-001, paso 4).
3. Modelo de negocio (decidido)
Freemium: funciones básicas gratis.
Suscripción por niveles (tiers) para funciones avanzadas.
Prueba gratis en planes pagos antes de cobrar.
Comisión mínima sobre ventas procesadas por la plataforma.
Retención por VALOR, no por jaula contractual (datos, contenido y beneficios viven aquí).
4. Stack técnico (no cambiar sin actualizar aquí)
Frontend: Next.js + React + Tailwind CSS
Backend: Next.js API routes
Base de datos + Auth: Supabase (Postgres)
IA: API de Anthropic (Claude)
Pagos: Mercado Pago (LATAM) + Stripe
Integración tienda: Shopify API (opción secundaria)
Despliegue: Vercel
Idioma de TODO el producto: español LATAM (no de España)
5. Reglas de código (los bots y Claude Code DEBEN seguirlas)
Componentes pequeños y reutilizables.
Nombres de variables y comentarios en español.
Nada de dependencias innecesarias; preguntar antes de agregar librerías.
Cada feature se documenta en /docs antes de construirse.
No hardcodear claves; usar variables de entorno (.env).
6. Estructura de carpetas
/app          -> páginas y rutas (Next.js)

/components    -> componentes de UI reutilizables

/lib           -> lógica, conexiones a Supabase/Shopify/IA

/docs          -> especificaciones de cada feature

/public        -> imágenes y estáticos

CLAUDE.md      -> este archivo
7. Cómo trabajamos (proceso)
Una feature a la vez. Sin afán.
Antes de codear: spec corta en /docs.
Claude Code construye según la spec.
Probar → corregir → commit a GitHub.
Actualizar la sección "Estado actual" de este archivo.
8. Glosario del proyecto
Usuario/emprendedor: la persona de LATAM que usa la plataforma para vender.
Tienda: el negocio digital que el usuario crea aquí.
Wizard: el asistente paso a paso de onboarding.
(agregar términos según crezca)
9. Decisiones importantes tomadas (log)
[FECHA] Stack definido como Next.js + Supabase + Vercel.
[FECHA] Retención por valor (no lock-in contractual).
