"use client";

import { useState } from "react";
import Link from "next/link";

const PREGUNTAS_FAQ = [
  {
    pregunta: "¿Se necesitan conocimientos técnicos para usar Automa?",
    respuesta:
      "No. Automa está diseñado para emprendedores sin experiencia técnica. El asistente de IA guía cada paso del proceso, desde crear la tienda hasta cargar los primeros productos.",
  },
  {
    pregunta: "¿Es posible conectar una tienda Shopify existente?",
    respuesta:
      "Sí. Automa permite conectar una tienda Shopify existente como opción secundaria, además de crear una tienda propia dentro de nuestra infraestructura.",
  },
  {
    pregunta: "¿Qué métodos de pago acepta la plataforma?",
    respuesta:
      "Mercado Pago para toda LATAM y Stripe para pagos internacionales. Se incorporan más métodos de forma continua.",
  },
  {
    pregunta: "¿Qué incluye el plan gratuito?",
    respuesta:
      "El plan Gratis incluye tienda básica, hasta 10 productos, acceso al asistente de IA y soporte por correo. Sin límite de tiempo.",
  },
  {
    pregunta: "¿Se puede cambiar de plan en cualquier momento?",
    respuesta:
      "Sí. Es posible subir o bajar de plan cuando sea necesario. Los cambios se aplican al inicio del siguiente ciclo de facturación.",
  },
  {
    pregunta: "¿Qué significa la comisión sobre ventas?",
    respuesta:
      "Automa aplica una comisión mínima sobre las ventas procesadas a través de la plataforma. El porcentaje varía según el plan y siempre se muestra de forma transparente antes de activar cualquier cobro.",
  },
];

export default function PaginaInicio() {
  const [faqAbierto, setFaqAbierto] = useState<number | null>(null);

  function toggleFaq(i: number) {
    setFaqAbierto(faqAbierto === i ? null : i);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">

      {/* Gradiente radial de fondo */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-md bg-[#0A0A0A]/80">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="text-base font-bold tracking-tight text-white">
            Automa
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="#planes" className="hover:text-white transition-colors">Planes</Link>
            <Link href="#faq" className="hover:text-white transition-colors">Recursos</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm text-white/50 hover:text-white transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)" }}
            >
              Empezar gratis
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-28 px-5 flex flex-col items-center text-center">

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] rounded-full px-4 py-1.5 text-xs text-white/40 mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
          Plataforma de comercio digital para LATAM
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[0.93] tracking-tight mb-6 max-w-4xl">
          Lanzar un negocio{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)" }}
          >
            nunca fue
          </span>
          <br />
          tan simple.
        </h1>

        <p className="text-base sm:text-lg text-white/40 max-w-lg mb-10 leading-relaxed">
          Tienda, productos, pagos e IA reunidos en una sola plataforma. En español, pensada para emprendedores de LATAM.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            href="/registro"
            className="w-full sm:w-auto text-sm font-semibold px-8 py-3.5 rounded-full text-white transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
              boxShadow: "0 0 36px rgba(124,58,237,0.45)",
            }}
          >
            Empezar gratis
          </Link>
          <Link
            href="#planes"
            className="w-full sm:w-auto text-sm text-white/40 hover:text-white transition-colors text-center"
          >
            Ver planes →
          </Link>
        </div>

        {/* Mockup del dashboard */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.7) 0%, rgba(59,130,246,0.7) 100%)",
            }}
          />
          <div
            className="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 100px rgba(0,0,0,0.7)" }}
          >
            {/* Barra del mockup */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              <div className="flex-1 mx-6">
                <div className="w-36 h-3 rounded-full bg-white/[0.05] mx-auto" />
              </div>
            </div>
            {/* Métricas */}
            <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Ventas hoy", valor: "$ 1,240" },
                { label: "Productos activos", valor: "38" },
                { label: "Pedidos pendientes", valor: "7" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-4 border border-white/[0.06] bg-white/[0.03]"
                >
                  <p className="text-xs text-white/30 mb-1.5">{card.label}</p>
                  <p className="text-2xl font-bold text-white/90">{card.valor}</p>
                </div>
              ))}
            </div>
            {/* Items secundarios */}
            <div className="px-5 pb-5 grid grid-cols-2 gap-2.5">
              {[
                "Tienda · 5 productos",
                "IA activa · 3 tareas",
                "Pagos · Mercado Pago",
                "Reportes · Esta semana",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 py-3"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
                  />
                  <span className="text-xs text-white/30">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-28 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 text-center mb-4">
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Tres pasos para empezar a vender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                titulo: "Crear la cuenta",
                desc: "Registro en menos de un minuto. Sin tarjeta de crédito. Sin configuraciones complejas.",
              },
              {
                num: "02",
                titulo: "Configurar la tienda",
                desc: "El asistente de IA guía el proceso: nombre, modelo de negocio y primeros productos en minutos.",
              },
              {
                num: "03",
                titulo: "Empezar a vender",
                desc: "Compartir el enlace de la tienda, activar pagos y recibir pedidos desde el primer día.",
              },
            ].map((paso) => (
              <div
                key={paso.num}
                className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <span
                  className="block text-5xl font-bold mb-5 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)" }}
                >
                  {paso.num}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">{paso.titulo}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANES ── */}
      <section id="planes" className="py-28 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 text-center mb-4">
            Precios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">
            Planes para cada etapa
          </h2>
          <p className="text-white/35 text-center text-sm mb-16">
            Comenzar es gratis. Escalar tiene sentido.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Gratis */}
            <div className="flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <p className="text-sm font-semibold text-white/70 mb-4">Gratis</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">USD 0</span>
                <span className="text-white/25 text-sm ml-1">/mes</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1 text-sm text-white/40">
                {["Tienda básica", "Hasta 10 productos", "Asistente de IA", "Pagos con Mercado Pago", "Soporte por correo"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-px flex-shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/registro"
                className="text-center text-sm font-semibold py-2.5 rounded-full border border-white/10 text-white/50 hover:border-white/25 hover:text-white transition-all"
              >
                Empezar gratis
              </Link>
            </div>

            {/* Emprendedor */}
            <div className="flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <p className="text-sm font-semibold text-white/70 mb-4">Emprendedor</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">USD 5</span>
                <span className="text-white/25 text-sm ml-1">/mes</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1 text-sm text-white/40">
                {["Todo lo del plan Gratis", "Productos ilimitados", "Dominio personalizado", "Reportes básicos", "Soporte prioritario"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-px flex-shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/registro"
                className="text-center text-sm font-semibold py-2.5 rounded-full border border-white/10 text-white/50 hover:border-white/25 hover:text-white transition-all"
              >
                Comenzar prueba gratis
              </Link>
            </div>

            {/* Pro — destacado con borde gradiente */}
            <div
              className="flex flex-col p-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(#111111, #111111) padding-box, linear-gradient(135deg, #7C3AED, #3B82F6) border-box",
                border: "1.5px solid transparent",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-white">Pro</p>
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #3B82F6)" }}
                >
                  Popular
                </span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">USD 19</span>
                <span className="text-white/25 text-sm ml-1">/mes</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1 text-sm text-white/60">
                {["Todo lo del plan Emprendedor", "IA avanzada ilimitada", "Integracion con Shopify", "Analítica avanzada", "Soporte 24/7"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-px flex-shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/registro"
                className="text-center text-sm font-semibold py-2.5 rounded-full text-white transition-opacity hover:opacity-85"
                style={{ background: "linear-gradient(135deg, #7C3AED, #3B82F6)" }}
              >
                Comenzar prueba gratis
              </Link>
            </div>

            {/* Empresa */}
            <div className="flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <p className="text-sm font-semibold text-white/70 mb-4">Empresa</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">USD 49</span>
                <span className="text-white/25 text-sm ml-1">/mes</span>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1 text-sm text-white/40">
                {["Todo lo del plan Pro", "Multi-tienda", "API de acceso completo", "Manager de cuenta dedicado", "SLA garantizado"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-px flex-shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/registro"
                className="text-center text-sm font-semibold py-2.5 rounded-full border border-white/10 text-white/50 hover:border-white/25 hover:text-white transition-all"
              >
                Comenzar prueba gratis
              </Link>
            </div>

          </div>

          <p className="text-center text-xs text-white/25 mt-8">
            Todos los planes pagos incluyen prueba gratuita. Comisión mínima sobre ventas.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIOS (ocultos hasta tener datos reales) ── */}
      {false && (
        <section className="py-28 px-5">
          {/* Testimonios reales van aquí */}
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="faq" className="py-28 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 text-center mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-14">
            Respuestas claras
          </h2>
          <div className="divide-y divide-white/[0.06]">
            {PREGUNTAS_FAQ.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {item.pregunta}
                  </span>
                  <span
                    className={`text-white/25 flex-shrink-0 text-lg leading-none transition-transform duration-200 ${
                      faqAbierto === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {faqAbierto === i && (
                  <p className="mt-4 text-sm text-white/35 leading-relaxed pr-8">
                    {item.respuesta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm font-bold text-white mb-3">Automa</p>
              <p className="text-xs text-white/25 leading-relaxed">
                Plataforma de comercio digital para emprendedores de LATAM.
              </p>
            </div>
            {[
              {
                titulo: "Producto",
                links: ["Funciones", "Planes", "Actualizaciones", "Roadmap"],
              },
              {
                titulo: "Recursos",
                links: ["Documentación", "Blog", "Guías", "Soporte"],
              },
              {
                titulo: "Legal",
                links: ["Privacidad", "Términos", "Cookies"],
              },
              {
                titulo: "Contacto",
                links: ["hola@automa.app", "Twitter / X", "LinkedIn"],
              },
            ].map((col) => (
              <div key={col.titulo}>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  {col.titulo}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-xs text-white/25 hover:text-white/60 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/15">© 2026 Automa. Todos los derechos reservados.</p>
            <p className="text-xs text-white/15">Hecho en LATAM.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
