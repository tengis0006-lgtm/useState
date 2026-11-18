"use client";
import { Calculator } from "./components/Calculator";
import { useState } from "react";
import { LightSwitch } from "./components/LightSwitch";
import { SecretMessage } from "./components/SecretMessage";
export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="flex align-center justify-center text-5xl">useState</h1>
      <div className="min-h-screen bg-gray600 p-6 flex justify-around">
        <Calculator />
        <LightSwitch />
        <SecretMessage />
      </div>
    </div>
  );
}
