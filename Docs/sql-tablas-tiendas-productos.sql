-- Tabla de tiendas
CREATE TABLE tiendas (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  nombre         TEXT NOT NULL,
  modelo         TEXT NOT NULL,
  fecha_creacion TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de productos
CREATE TABLE productos (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tienda_id      UUID REFERENCES tiendas(id) ON DELETE CASCADE NOT NULL,
  nombre         TEXT NOT NULL,
  precio         NUMERIC(10,2) NOT NULL,
  descripcion    TEXT,
  fecha_creacion TIMESTAMPTZ DEFAULT NOW()
);

-- Activar seguridad por fila
ALTER TABLE tiendas  ENABLE ROW LEVEL SECURITY;
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;

-- Políticas para tiendas
CREATE POLICY "usuario ve sus tiendas"
  ON tiendas FOR SELECT
  USING (auth.uid() = usuario_id);

CREATE POLICY "usuario crea su tienda"
  ON tiendas FOR INSERT
  WITH CHECK (auth.uid() = usuario_id);

-- Políticas para productos
CREATE POLICY "usuario ve sus productos"
  ON productos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM tiendas
      WHERE tiendas.id = productos.tienda_id
        AND tiendas.usuario_id = auth.uid()
    )
  );

CREATE POLICY "usuario crea sus productos"
  ON productos FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tiendas
      WHERE tiendas.id = productos.tienda_id
        AND tiendas.usuario_id = auth.uid()
    )
  );
