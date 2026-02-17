"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main>
      <h1>BIDORO Test Frontend</h1>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
    </main>
  );
}