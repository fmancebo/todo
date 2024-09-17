import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/App"; // Página principal (tarefas)
import MarketPage from "./pages/Market"; // Nova página de mercado (crie este componente)

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} /> {/* Página principal */}
      <Route path='/market' element={<MarketPage />} /> {/* Página de lista de mercado */}
    </Routes>
  );
}
