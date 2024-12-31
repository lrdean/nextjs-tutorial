import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <main>
      <div>Hello world</div>
      <Link href="/users">Users</Link>
      <ProductCard />
      <AddToCart />
    </main>
  );
}
