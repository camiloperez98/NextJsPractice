//Importar el componente Navbar
import Navbar from "../components/Navbar";

//Propiedad de NextJs para agregar fuentes de google fonts a la letra del sítio
import {Roboto} from 'next/font/google';

//Propiedad de NextJs el metadata del sítio, simplificando la etiqueta meta de HTML, solo fucniona del lado del servidor
export const metadata = {
  title: "Home",
  description: "Sítio ofical de la tienda",
  keywords: "Tienda, Store, Ecommerce"
}

//almacenar en una constante la propiedad que contiene la fuente y agregar sus propiedades para el estilo
const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html>
      {/* Agregar la fuente a todas las paginas de la app */}
      <body className={roboto.className}>
        {/* utilizamos el componente Navbar */}
        <Navbar />

        {/* children hace referencia a las rutas de toda las pagina por empaquetación */}
        {children}


      </body>
    </html>
  );
}
