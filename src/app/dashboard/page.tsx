"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { crearClienteSupabase } from "@/lib/supabase";

export default function PaginaDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const supabase = crearClienteSupabase();

    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      setEmail(data.user.email ?? null);
      setCargando(false);
    });
  }, [router]);

  async function cerrarSesion() {
    const supabase = crearClienteSupabase();
    await supabase.auth.signOut();
    router.replace("/");
  }

  if (cargando) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 text-sm">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-stone-900">Automa</span>
        <div className="flex items-center gap-4">
          {email && (
            <span className="text-sm text-stone-500 hidden sm:block">{email}</span>
          )}
          <button
            onClick={cerrarSesion}
            className="text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Bienvenido a Automa
        </h1>
        <p className="text-stone-500 text-lg mb-10">
          Tu panel de control está listo. Pronto podrás crear tu tienda y empezar a vender.
        </p>
        <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-2xl px-6 py-4">
          Estamos construyendo el wizard de onboarding. Volvé pronto.
        </div>
      </main>

    </div>
  );
}
