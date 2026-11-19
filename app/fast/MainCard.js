"use client";
import { useState } from "react";
export const MainCard = () => {
  const [size, setSize] = useState("M");
  const [cheese, setCheese] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [count, setCount] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const sizePrices = {
    S: { name: "Жижиг", price: 15000 },
    M: { name: "Дунд", price: 20000 },
    L: { name: "Том", price: 25000 },
  };

  const cheesePrice = cheese ? 3000 : 0;
  const mushroomPrice = mushroom ? 2000 : 0;
  const pepperPrice = pepper ? 1000 : 0;

  const singlePrice =
    sizePrices[size].price + cheesePrice + mushroomPrice + pepperPrice;

  const totalPrice = singlePrice * count;
  const discount = count >= 3 ? 0.1 : 0;
  const discountAmount = totalPrice * discount;
  const finalPrice = totalPrice - discountAmount;

  const formatPrice = (price) => price.toLocaleString("en-US") + "₮";

  return (
    <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-white">
        <h2 className="text-xl font-bold">🍕 Пицца захиалга</h2>
        <p className="mt-1 text-sm text-orange-100">
          Хэмжээ болон нэмэлтээ сонгоно уу
        </p>
      </div>

      <div className="space-y-9 p-6 md:p-8">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              01. Хэмжээ сонгох
            </h2>
            <span className="text-sm text-gray-400">Хэмжээ</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["S", "M", "L"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSize(item);
                  setOrdered(false);
                }}
                className={`rounded-2xl border-2 p-4 text-center transition-all duration-200 hover:-translate-y-1 ${
                  size === item
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                }`}
              >
                <div className="mb-2 text-3xl">
                  {item === "S" ? "🍕" : item === "M" ? "🍕🍕" : "🍕🍕🍕"}
                </div>
                <p className="font-bold">{sizePrices[item].name}</p>
                <p className="mt-1 text-sm font-semibold">
                  {formatPrice(sizePrices[item].price)}
                </p>
              </button>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              02. Нэмэлт сонгох
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Хэд хэдийг зэрэг сонгож болно
            </p>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                setCheese(!cheese);
                setOrdered(false);
              }}
              className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                cheese
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🧀</span>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Бяслаг</p>
                  <p className="text-sm text-gray-400">+3,000₮</p>
                </div>
              </div>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  cheese
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-300"
                }`}
              >
                {cheese && "✓"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMushroom(!mushroom);
                setOrdered(false);
              }}
              className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                mushroom
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🍄</span>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Мөөг</p>
                  <p className="text-sm text-gray-400">+2,000₮</p>
                </div>
              </div>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  mushroom
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-300"
                }`}
              >
                {mushroom && "✓"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPepper(!pepper);
                setOrdered(false);
              }}
              className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                pepper
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🌶️</span>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Чинжүү</p>
                  <p className="text-sm text-gray-400">+1,000₮</p>
                </div>
              </div>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  pepper
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-300"
                }`}
              >
                {pepper && "✓"}
              </span>
            </button>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            03. Тоо ширхэг
          </h2>

          <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-5">
            <div>
              <p className="font-bold text-gray-800">Пиццаны тоо</p>
              <p className="text-xs text-gray-400">
                3 ба түүнээс дээш захиалбал 10% хямдралтай
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                disabled={count === 1}
                onClick={() => {
                  setCount(count - 1);
                  setOrdered(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white font-bold text-gray-700 hover:bg-gray-100 disabled:opacity-40"
              >
                -
              </button>
              <span className="w-6 text-center text-lg font-black text-gray-800">
                {count}
              </span>
              <button
                type="button"
                onClick={() => {
                  setCount(count + 1);
                  setOrdered(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white font-bold text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-orange-100 bg-orange-50/50 p-5">
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Нэг бүрийн үнэ:</span>
              <span className="font-semibold text-gray-800">
                {formatPrice(singlePrice)}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Хямдрал (10%):</span>
                <span className="font-semibold">
                  -{formatPrice(discountAmount)}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-orange-200/60 pt-3 text-lg font-black text-gray-900">
              <span>Нийт төлөх дүн:</span>
              <span className="text-2xl text-orange-600">
                {formatPrice(finalPrice)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOrdered(true)}
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:opacity-95"
          >
            {ordered ? "✓ Захиалга баталгаажлаа!" : "Захиалга өгөх"}
          </button>
        </section>
      </div>
    </div>
  );
};
