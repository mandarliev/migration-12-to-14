"use client";

import React from "react";

type Props = {
  params: {
    id: string;
  }
}

function ProductsPage({params: {id}}: Props) {
  console.log(id);
  return (
    <div>
      <h1>I am the last parameter {id}</h1>
    </div>
  );
}

export default ProductsPage;
