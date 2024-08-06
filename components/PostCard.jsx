//Permisos para usar efectos del front End que se procesan en el navegador
"use client";

//React Client Component
function PostCard({ post }) {
  return (
    <div>
      <h3>
        {post.id}.{post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {
        alert('Funciona desde PostCard')
      }}>Click</button>
    </div>
  );
}

export default PostCard;
