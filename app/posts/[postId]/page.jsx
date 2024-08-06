import React from "react";

//Función para consultar un registro en la api
async function loadPost(id) {

  //Guardar en una variable el resultado de la consulta mediante el id enviado en la url de la api
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  //Convertimos el resultado de la consulta a formato json
  const data = await res.json();

  //Retornamos la respuesta de la api en formato json
  return data;
}


export default async function page({ params }) {

  //Guardamos en una constante los datos que retorna la función
  const post = await loadPost(params.postId);

  return <div>
    <h1>{post.id}. {post.title}</h1>
    <p>{post.body}</p>
  </div>;
}
