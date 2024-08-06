//Componente propio de NextJs para la navegacion, evitando reiniciar la pagina
import Link from "next/link";

//Componente que se mostrara cuando no encuentre la dirección de la pagina
export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href="/">Atrás</Link>
    </section>
  );
}
