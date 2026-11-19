"use client";
import { useState } from "react";
export const Header = () => {
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
    <div className="mb-10 text-center">
      <div className="mb-4 inline-flex rounded-2xl bg-orange-100 p-5 text-5xl shadow-sm">
        🍕
      </div>

      <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
        Pizza Builder
      </h1>

      <p className="mt-3 text-gray-500">
        Өөрийн дуртай пиццагаа өөрөө угсраарай!
      </p>
    </div>
  );
};
