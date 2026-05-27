"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { crearClienteSupabase } from "@/lib/supabase";

type Tienda = {
  id: string;
  nombre: string;
  modelo: string;
};

type Producto = {
  id: string;
  nombre: string;
  precio: number;
};

const ETIQUETAS_MODELO: Record<string, string> = {
  dropshipping: "Dropshipping",
  productos_propios: "Productos propios",
  servicios: "Servicios",
};

export default function PaginaMiTienda() {
  const router = useRouter();
  const [tienda, setTienda] = useState<Tienda | null>(null);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      const supabase = crearClienteSupabase();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: tiendaData } = await supabase
        .from("tiendas")
        .select("id, nombre, modelo")
        .eq("usuario_id", user.id)
        .single();

      if (!tiendaData) {
        router.replace("/wizard");
        return;
      }

      setTienda(tiendaData);

      const { data: productosData } = await supabase
        .from("productos")
        .select("id, nombre, precio")
        .eq("tienda_id", tiendaData.id)
        .order("fecha_creacion", { ascending: true });

      setProductos(productosData ?? []);
      setCargando(false);
    }

    cargarDatos();
  }, [router]);

  async function cerrarSesion() {
    const supabase = crearClienteSupabase();
    await supabase.auth.signOut();
    router.replace("/");
  }

  if (cargando) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 text-sm">Cargando tu tienda...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-stone-900">Automa</span>
        <button
          onClick={cerrarSesion}
          className="text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
        >
          Cerrar sesión
        </button>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium rounded-full px-3 py-1 mb-3">
            {ETIQUETAS_MODELO[tienda!.modelo] ?? tienda!.modelo}
          </div>
          <h1 className="text-3xl font-bold text-stone-900">
            Tu tienda <span className="text-amber-600">{tienda!.nombre}</span> está creada
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Ya podés empezar a operar. Más funciones están en camino.
          </p>
        </div>

        {/* Lista de productos */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
            <h2 className="font-semibold text-stone-900">Productos</h2>
            <span className="text-xs text-stone-400">
              {productos.length} producto{productos.length !== 1 ? "s" : ""}
            </span>
          </div>

          {productos.length === 0 ? (
            <div className="px-6 py-10 text-center text-stone-400 text-sm">
              No hay productos todavía.
            </div>
          ) : (
            <ul className="divide-y divide-stone-100">
              {productos.map((p) => (
                <li key={p.id} className="px-6 py-4 flex items-center justify-between">
                  <span className="text-sm text-stone-800 font-medium">{p.nombre}</span>
                  <span className="text-sm font-medium text-stone-500">
                    USD {Number(p.precio).toLocaleString("es-AR", { minimumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </main>
    </div>
  );
}
