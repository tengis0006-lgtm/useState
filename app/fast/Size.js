            "use client"
            export const Size =()=>{
                const {
    size,
    cheese,
    mushroom,
    pepper,
    count,
    ordered,
    singlePrice,
    discount,
    discountAmount,
    finalPrice,
    formatPrice,
    changeSize,
    toggleCheese,
    toggleMushroom,
    togglePepper,
    decreaseCount,
    increaseCount,
    submitOrder,
  } = usePizzaBuilder();
                return(
                            <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-white">
            <h2 className="text-xl font-bold">🍕 Пицца захиалга</h2>
            <p className="mt-1 text-sm text-orange-100">
              Хэмжээ болон нэмэлтээ сонгоно уу
            </p>
          </div>

          <div className="space-y-9 p-6 md:p-8">
            {/* 01. SIZE */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  01. Хэмжээ сонгох
                </h2>
                <span className="text-sm text-gray-400">Хэмжээ</span>
              </div>
              </div>
</div>
                )