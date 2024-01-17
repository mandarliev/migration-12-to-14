"use client";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

/**
 * In TypeScript you need to specify the type of props you are going to send or it takes the default type defined tin @types/react.
 * If you dont want to specify any type then explicitly ask the component to expect state and props of ‘any’ type.
 */
type Props = {
  params: {
    id: string;
  };
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function ProductsPage({ params: { id } }: Props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data: Product = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  if (!id) notFound();
  return (
    <div>
      <header className="p-5 bg-green-400">
        <nav className="flex space-x-10">
          <p>HOME</p>
          <p>CONTACT</p>
          <p>LINK</p>
        </nav>
      </header>
      <div className="m-5 space-y-5">
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <p>{product.price}</p> 
      </div>
    </div>
  );
}

export default ProductsPage;
