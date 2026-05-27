"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { crearClienteSupabase } from "@/lib/supabase";

export default function PaginaLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  async function manejarLogin(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);

    const supabase = crearClienteSupabase();
    const { error: errorSupabase } = await supabase.auth.signInWithPassword({
      email,
      password: contrasena,
    });

    if (errorSupabase) {
      setError(traducirError(errorSupabase.message));
      setCargando(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-stone-900">
            Automa
          </Link>
          <p className="text-stone-500 text-sm mt-2">Iniciá sesión en tu cuenta</p>
        </div>

        <form
          onSubmit={manejarLogin}
          className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col gap-5"
        >
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contrasena" className="text-sm font-medium text-stone-700">
              Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              required
              autoComplete="current-password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Tu contraseña"
              className="border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold py-3 rounded-full transition-colors mt-1"
          >
            {cargando ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="text-center text-sm text-stone-500 mt-6">
          ¿No tenés cuenta?{" "}
          <Link href="/registro" className="text-amber-600 font-medium hover:underline">
            Registrate gratis
          </Link>
        </p>

      </div>
    </div>
  );
}

function traducirError(mensaje: string): string {
  if (mensaje.includes("Invalid login credentials") || mensaje.includes("invalid_credentials")) {
    return "Email o contraseña incorrectos. Revisá tus datos e intentá de nuevo.";
  }
  if (mensaje.includes("Email not confirmed")) {
    return "Confirmá tu email antes de iniciar sesión. Revisá tu bandeja de entrada.";
  }
  if (mensaje.includes("rate limit") || mensaje.includes("too many")) {
    return "Demasiados intentos. Esperá unos minutos e intentá de nuevo.";
  }
  return "Ocurrió un error al iniciar sesión. Intentá de nuevo.";
}
