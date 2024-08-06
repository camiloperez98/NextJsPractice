//Componente propio de NextJs para la navegacion, evitando reiniciar la pagina
import Link from "next/link";

//Propiedad de NextJs el metadata del sítio, simplificando la etiqueta meta de HTML
export const metadata = {
  title: "Tienda oficial"
}

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Sección Tienda</h3>
        <lu>
          <li>
          <Link href="/tienda/categoria">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categoria/computadoras">Productos</Link>
          </li>
        </lu>
      </nav>
      {children}
    </>
  );
}
