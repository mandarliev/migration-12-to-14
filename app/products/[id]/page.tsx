import { notFound } from "next/navigation";
import React from "react";

/**
 * In TypeScript you need to specify the type of props you are going to send or it takes the default type defined tin @types/react. 
 * If you dont want to specify any type then explicitly ask the component to expect state and props of ‘any’ type.
 */
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
