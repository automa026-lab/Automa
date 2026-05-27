Spec 001 — Prototipo v1 (Esqueleto de la Plataforma)

Esta es la primera spec. Define SOLO lo que construimos ahora. Nada más.
Objetivo: tener algo navegable y desplegado que demuestre el valor central.


Objetivo de la v1 (en una frase)
Una web app donde un emprendedor de LATAM se registra, entra a un asistente paso a paso (wizard), y crea el esqueleto de su tienda propia, con la IA generando descripciones de producto en español.
Qué SÍ incluye la v1

Landing page — explica el valor, botón de "Empezar gratis".
Registro / login — con email (vía Supabase Auth).
Dashboard — pantalla principal tras iniciar sesión.
Wizard de onboarding — 3-4 pasos:

Paso 1: Nombre de tu tienda.
Paso 2: Elige tu modelo (dropshipping seleccionado por defecto).
Paso 3: Agrega tu primer producto (nombre + precio).
Paso 4: La IA genera la descripción del producto en español.


Vista de "Mi tienda" — muestra los productos creados (aún sin checkout).

Qué NO incluye la v1 (importante — no construir esto todavía)

Carrito y checkout funcionando.
Pagos reales (Mercado Pago / Stripe).
Integración Shopify (viene en spec posterior).
Blogs, videos, ads.
Niveles de suscripción / cobro.
App móvil nativa.

Pantallas (flujo)
Landing → Registro → Dashboard → Wizard (4 pasos) → Mi tienda
Modelo de datos mínimo (Supabase)

usuarios (lo maneja Supabase Auth)
tiendas: id, usuario_id, nombre, modelo, fecha_creacion
productos: id, tienda_id, nombre, precio, descripcion, fecha_creacion

Criterio de "terminado" para la v1

 Puedo registrarme con email.
 Puedo completar el wizard y crear una tienda con 1 producto.
 La IA me genera una descripción en español.
 Veo mi producto en "Mi tienda".
 Está desplegado en Vercel con URL pública.

Orden de construcción (un paso a la vez)

Crear proyecto Next.js + Tailwind.
Conectar Supabase (auth + tablas).
Landing page.
Registro / login.
Dashboard vacío.
Wizard paso a paso.
Conexión a la IA para descripciones.
Vista "Mi tienda".
Desplegar en Vercel.