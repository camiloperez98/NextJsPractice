import PostCard from "../../components/PostCard";
import React from "react";

export const metadata = {
  title: "Post",
  description: "Sítio ofical de la tienda",
  keywords: "Tienda, Store, Ecommerce",
};

//Función para consultar los registros de la api
async function loadPost() {
  //Realizar la consulta a la apo
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //Convierte la respuesta de la petición a formato json
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  //Retornar los datos convertidos a formato json
  return data;
}

//React Server Component
export default async function PostPage() {
  //Llamar la función que hace la peticion a la api
  const posts = await loadPost();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
