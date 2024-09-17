import React, { useState, useEffect } from "react";
import Header from "../componentes/header";
import NewMarket from "../componentes/NewProduct";
import ProducList from "../componentes/ProductList";

export default function Market() {
  // Recupera os dados do localStorage e define o estado inicial
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("productList");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Atualiza o localStorage sempre que o estado products mudar
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleRemoveProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const handleToggleProduct = (product) => {
    setProducts(products.map((p) => (p.id === product.id ? { ...p, isChecked: !p.isChecked } : p)));
  };

  const handleSortAsc = () => {
    setProducts([...products].sort((a, b) => a.description.localeCompare(b.description)));
  };

  const handleSortDesc = () => {
    setProducts([...products].sort((a, b) => b.description.localeCompare(a.description)));
  };

  return (
    <section id='app'>
      <Header onSortAsc={handleSortAsc} onSortDesc={handleSortDesc} />
      <NewMarket onAddProduct={handleAddProduct} />
      <div className='container-market'>
        <div className='wrapper-market'>
          {products.length > 0 && (
            <ProducList
              products={products}
              onRemoveProduct={handleRemoveProduct}
              onToggleProduct={handleToggleProduct}
            />
          )}
        </div>
      </div>
    </section>
  );
}
