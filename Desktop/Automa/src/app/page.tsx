export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 md:py-40">
        <span className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-6">
          Tu negocio digital, en español
        </span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-stone-900 mb-5">
          Automa
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-xl mb-10 leading-relaxed">
          Lanzá tu tienda online desde cero — sin conocimientos técnicos. Automa usa IA para ayudarte a vender en LATAM desde el primer día.
        </p>
        <a
          href="/registro"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-base font-semibold px-10 py-4 rounded-full transition-colors shadow-sm"
        >
          Empezar gratis
        </a>
        <p className="text-xs text-stone-400 mt-4">Sin tarjeta de crédito. Gratis para empezar.</p>
      </section>

      {/* Beneficios */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-stone-900 mb-14">
            Todo lo que necesitás para vender online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-5xl mb-5">🧩</span>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                Sin conocimientos técnicos
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Creá tu tienda en minutos con una interfaz simple, pensada para emprendedores, no para programadores.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-5xl mb-5">🤖</span>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                IA en cada paso
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Nuestro asistente con IA te guía, escribe descripciones de productos y te ayuda a tomar mejores decisiones de negocio.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-5xl mb-5">🚀</span>
              <h3 className="text-base font-bold text-stone-900 mb-3">
                Empezá gratis hoy
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Sin costo inicial. Activá tu tienda, cargá tus productos y empezá a vender antes de que termine el día.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-10 px-6 text-center">
        <p className="font-semibold text-white text-base mb-1">Automa</p>
        <p className="text-sm">© 2026 Automa. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
