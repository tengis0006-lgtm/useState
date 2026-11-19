"use client";
import { Pizza } from "./fast/Pizza";
import { Header } from "./fast/Header";
import { MainCard } from "./fast/MainCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Header />
        <MainCard />
      </div>
    </div>
  );
}
