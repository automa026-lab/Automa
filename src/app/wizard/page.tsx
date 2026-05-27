"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { crearClienteSupabase } from "@/lib/supabase";

const PASOS = ["Tu tienda", "Modelo de negocio", "Primer producto"];

const MODELOS = [
  {
    id: "dropshipping",
    titulo: "Dropshipping",
    descripcion: "Vendé sin tener stock. Tu proveedor envía directo al cliente.",
  },
  {
    id: "productos_propios",
    titulo: "Productos propios",
    descripcion: "Fabricás o comprás productos y los vendés desde tu tienda.",
  },
  {
    id: "servicios",
    titulo: "Servicios",
    descripcion: "Ofrecés servicios digitales o presenciales a tus clientes.",
  },
];

export default function PaginaWizard() {
  const router = useRouter();
  const [paso, setPaso] = useState(1);
  const [nombreTienda, setNombreTienda] = useState("");
  const [modelo, setModelo] = useState("dropshipping");
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  function avanzar() {
    setError(null);
    if (paso === 1 && !nombreTienda.trim()) {
      setError("Ingresá el nombre de tu tienda para continuar.");
      return;
    }
    if (paso === 3) {
      guardar();
      return;
    }
    setPaso((p) => p + 1);
  }

  function retroceder() {
    setError(null);
    setPaso((p) => p - 1);
  }

  async function guardar() {
    if (!nombreProducto.trim()) {
      setError("Ingresá el nombre de tu primer producto.");
      return;
    }
    const precio = parseFloat(precioProducto);
    if (!precioProducto || isNaN(precio) || precio <= 0) {
      setError("Ingresá un precio válido mayor a 0.");
      return;
    }

    setGuardando(true);
    setError(null);

    const supabase = crearClienteSupabase();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { data: tienda, error: errorTienda } = await supabase
      .from("tiendas")
      .insert({ usuario_id: user.id, nombre: nombreTienda.trim(), modelo })
      .select()
      .single();

    if (errorTienda || !tienda) {
      setError("Error al guardar tu tienda. Intentá de nuevo.");
      setGuardando(false);
      return;
    }

    const { error: errorProducto } = await supabase
      .from("productos")
      .insert({
        tienda_id: tienda.id,
        nombre: nombreProducto.trim(),
        precio,
        descripcion: null,
      });

    if (errorProducto) {
      setError("Error al guardar el producto. Intentá de nuevo.");
      setGuardando(false);
      return;
    }

    router.push("/mi-tienda");
  }

  const progreso = (paso / PASOS.length) * 100;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4">
        <span className="text-lg font-bold text-stone-900">Automa</span>
      </nav>

      {/* Barra de progreso */}
      <div className="w-full bg-stone-200 h-1">
        <div
          className="bg-amber-500 h-1 transition-all duration-500"
          style={{ width: `${progreso}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">

          {/* Indicador de pasos */}
          <div className="flex items-center justify-center mb-8 gap-0">
            {PASOS.map((nombre, i) => {
              const num = i + 1;
              const activo = num === paso;
              const completado = num < paso;
              return (
                <div key={num} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors
                        ${completado || activo ? "bg-amber-500 text-white" : "bg-stone-200 text-stone-400"}`}
                    >
                      {completado ? "✓" : num}
                    </div>
                    <span className={`text-xs hidden sm:block whitespace-nowrap ${activo ? "text-stone-900 font-medium" : "text-stone-400"}`}>
                      {nombre}
                    </span>
                  </div>
                  {i < PASOS.length - 1 && (
                    <div className={`h-px w-12 sm:w-20 mb-4 mx-1 ${completado ? "bg-amber-400" : "bg-stone-200"}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Tarjeta del paso */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">
                {error}
              </div>
            )}

            {paso === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">¿Cómo se llama tu tienda?</h2>
                <p className="text-stone-500 text-sm mb-6">Este es el nombre que verán tus clientes.</p>
                <input
                  type="text"
                  autoFocus
                  value={nombreTienda}
                  onChange={(e) => setNombreTienda(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && avanzar()}
                  placeholder="Ej: Moda Sur, TechStore, Artesanías Cali..."
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>
            )}

            {paso === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">¿Cómo vas a vender?</h2>
                <p className="text-stone-500 text-sm mb-6">Podés cambiarlo después.</p>
                <div className="flex flex-col gap-3">
                  {MODELOS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setModelo(m.id)}
                      className={`w-full text-left rounded-xl border-2 px-5 py-4 transition-all
                        ${modelo === m.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-stone-200 bg-white hover:border-stone-300"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold text-sm ${modelo === m.id ? "text-amber-700" : "text-stone-800"}`}>
                          {m.titulo}
                        </span>
                        {modelo === m.id && (
                          <span className="text-amber-500 text-xs font-medium">Seleccionado</span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 ${modelo === m.id ? "text-amber-600" : "text-stone-400"}`}>
                        {m.descripcion}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {paso === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Agregá tu primer producto</h2>
                <p className="text-stone-500 text-sm mb-6">Podés agregar más desde tu tienda luego.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-stone-700">Nombre del producto</label>
                    <input
                      type="text"
                      autoFocus
                      value={nombreProducto}
                      onChange={(e) => setNombreProducto(e.target.value)}
                      placeholder="Ej: Zapatillas Nike Air Max"
                      className="border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-stone-700">Precio (USD)</label>
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={precioProducto}
                      onChange={(e) => setPrecioProducto(e.target.value)}
                      placeholder="0.00"
                      className="border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Botones */}
            <div className="flex items-center justify-between mt-8">
              {paso > 1 ? (
                <button
                  onClick={retroceder}
                  disabled={guardando}
                  className="text-sm text-stone-500 hover:text-stone-800 font-medium transition-colors disabled:opacity-40"
                >
                  ← Atrás
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={avanzar}
                disabled={guardando}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {guardando ? "Guardando..." : paso === 3 ? "Crear mi tienda →" : "Siguiente →"}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
