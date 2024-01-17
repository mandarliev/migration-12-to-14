import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  }
}

function ProductsPage({params: {id}}: Props) {
  if (!id) notFound();
  return (
    <div>
      <h1 className="m-5">I am the last parameter of the search: {id}</h1>
    </div>
  );
}

export default ProductsPage;
