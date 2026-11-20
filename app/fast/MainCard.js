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
  const finalPrice = totalPrice - totalPrice * discount;

  const noToppings = !cheese && !mushroom && !pepper;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6 text-gray-800">
      <h2 className="text-2xl font-bold text-center">🍕 Пицца угсрах</h2>
      <div>
        <p className="font-semibold mb-2">Хэмжээ сонгох:</p>
        <div className="grid grid-cols-3 gap-2">
          {["S", "M", "L"].map((key) => (
            <button
              key={key}
              onClick={() => {
                setSize(key);
                setOrdered(false);
              }}
              className={`py-2 px-3 rounded-xl font-medium border transition ${
                size === key
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div>{sizePrices[key].name}</div>
              <div className="text-xs">{sizePrices[key].price}₮</div>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold mb-2">Нэмэлт орц:</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              setCheese(!cheese);
              setOrdered(false);
            }}
            className={`p-3 rounded-xl border text-left flex justify-between transition ${
              cheese
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            <span>🧀 Бяслаг</span>
            <span>+3000₮</span>
          </button>

          <button
            onClick={() => {
              setMushroom(!mushroom);
              setOrdered(false);
            }}
            className={`p-3 rounded-xl border text-left flex justify-between transition ${
              mushroom
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            <span>🍄 Мөөг</span>
            <span>+2000₮</span>
          </button>

          <button
            onClick={() => {
              setPepper(!pepper);
              setOrdered(false);
            }}
            className={`p-3 rounded-xl border text-left flex justify-between transition ${
              pepper
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            <span>🌶️ Чинжүү</span>
            <span>+1000₮</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold">Тоо ширхэг:</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setCount(count - 1);
              setOrdered(false);
            }}
            disabled={count === 1}
            className="w-10 h-10 rounded-full bg-gray-200 font-bold text-xl disabled:opacity-40"
          >
            −
          </button>
          <span className="text-xl font-bold w-6 text-center">{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
              setOrdered(false);
            }}
            disabled={count === 5}
            className="w-10 h-10 rounded-full bg-gray-200 font-bold text-xl disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl space-y-2">
        <p className="font-medium text-lg">
          «{sizePrices[size].name} пицца ·{" "}
          {noToppings ? (
            <span className="text-gray-500">нэмэлтгүй</span>
          ) : (
            <span>
              {cheese && "🧀 "}
              {mushroom && "🍄 "}
              {pepper && "🌶️"}
            </span>
          )}
          »
        </p>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Нэг пиццаны үнэ:</span>
          <span>{singlePrice}₮</span>
        </div>

        <div className="flex justify-between items-center font-bold text-lg pt-2 border-t">
          <span>Нийт үнэ:</span>
          <div className="text-right">
            {discount > 0 && (
              <span className="line-through text-gray-400 text-sm mr-2">
                {totalPrice}₮
              </span>
            )}
            <span className="text-orange-600">{finalPrice}₮</span>
          </div>
        </div>

        {discount > 0 && (
          <p className="text-xs text-green-600 text-right">
            🎉 3+ пицца авсан тул 10% хямдарлаа!
          </p>
        )}
      </div>
      <button
        onClick={() => setOrdered(true)}
        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition"
      >
        Захиалах
      </button>

      {ordered && (
        <div className="p-3 bg-green-100 text-green-800 text-center font-semibold rounded-xl">
          ✅ Захиалга баталгаажлаа!
        </div>
      )}
    </div>
  );
};
