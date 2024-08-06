//Permisos para usar efectos del front End que se procesan en el navegador
"use client";

import React, { useEffect } from "react";

function Users() {
  useEffect(()=>{
    alert('Loading....')
  }, []);
  return <div>Users</div>;
}

export default Users;
