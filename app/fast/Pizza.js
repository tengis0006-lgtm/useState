"use client";

export const Pizza = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-6 font-sans text-gray-800">
      {/* Header */}
      <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
        <span>🍕</span> Пицца угсрах
      </h2>

      {/* Size Section (Хэмжээ) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Хэмжээ</p>
        <div className="grid grid-cols-3 gap-3">
          {/* Unselected Option */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            <span className="text-sm font-bold text-gray-800">Жижиг</span>
            <span className="text-xs text-gray-400 mt-0.5">15000₮</span>
          </button>

          {/* Selected Option (Active State Example) */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-orange-500 bg-orange-500 text-white shadow-sm transition">
            <span className="text-sm font-bold">Дунд</span>
            <span className="text-xs text-orange-100 mt-0.5">20000₮</span>
          </button>

          {/* Unselected Option */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            <span className="text-sm font-bold text-gray-800">Том</span>
            <span className="text-xs text-gray-400 mt-0.5">25000₮</span>
          </button>
        </div>
      </div>

      {/* Toppings Section (Нэмэлт) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Нэмэлт</p>
        <div className="grid grid-cols-3 gap-3">
          {/* Selected Topping (Active State Example) */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-emerald-500 bg-emerald-500 text-white shadow-sm transition">
            <span className="text-sm font-bold flex items-center gap-1">
              <span>🧀</span> Бяслаг
            </span>
            <span className="text-xs text-emerald-100 mt-0.5">+2000₮</span>
          </button>

          {/* Unselected Topping */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
              <span>🍄</span> Мөөг
            </span>
            <span className="text-xs text-gray-400 mt-0.5">+2000₮</span>
          </button>

          {/* Unselected Topping */}
          <button className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
              <span>🌶️</span> Чинжүү
            </span>
            <span className="text-xs text-gray-400 mt-0.5">+1000₮</span>
          </button>
        </div>
      </div>

      {/* Quantity Section (Тоо ширхэг) */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">Тоо ширхэг</p>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition">
            -
          </button>
          <span className="text-base font-bold w-4 text-center">1</span>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition">
            +
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 my-4" />

      {/* Summary & Total Price */}
      <div>
        <p className="text-xs font-bold text-orange-500">
          Дунд пицца · 🧀 Бяслаг
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          Нэг бүрийн үнэ: 22000₮
        </p>
        <p className="text-xl font-extrabold text-gray-900 mt-2">
          Нийт: 22000₮
        </p>
      </div>
    </div>
  );
};
