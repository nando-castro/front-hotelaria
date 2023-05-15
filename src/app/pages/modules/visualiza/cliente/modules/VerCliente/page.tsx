"use client"
import React from "react";

export default function VerCliente() {
  const [ydados, setDados] = React.useState([]);
  return (
    <div className="w-48 p-4 m-4 flex items-center justify-center rounded font-bold text-black cursor-pointer hover:bg-green-400 hover:text-black">
      Ver cliente
    </div>
  );
}
