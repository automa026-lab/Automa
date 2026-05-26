export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-4">
        Automa
      </h1>
      <p className="text-xl text-gray-500 max-w-lg mb-10">
        Lanzá tu tienda online desde cero — sin conocimientos técnicos. Automa usa IA para ayudarte a vender en LATAM desde el primer día.
      </p>
      <a
        href="/registro"
        className="inline-block bg-black text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
      >
        Empezar gratis
      </a>
    </main>
  );
}
