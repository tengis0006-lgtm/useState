"use client";
import { TodoList } from "./fast/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900 flex flex-col ">
      <div className="mx-auto mt-10 grid max-w-4xl items-start gap-6 md: grid-cols-3">
        <TodoList />
      </div>
    </main>
  );
}
