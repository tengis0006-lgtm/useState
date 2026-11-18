export const CardItem = ({ item }) => {
  let color = "";
  let bgcolor = "";
  let bcolor = "";
  let text = "";
  if (item.rarity === "common") {
    color =
      "bg-[#1c00b0] border-indigo-400/50 hover:shadow-[0_10px_25px_rgba(28,0,176,0.8)]";
    // text = "text-[#45556D]";
  } else if (item.rarity === "rare") {
    color =
      "bg-blue-600 border-blue-300/60 hover:shadow-[0_10px_25px_rgba(37,99,235,0.8)]";
  } else if (item.rarity === "epic") {
    color =
      "bg-purple-600 border-purple-300/60 hover:shadow-[0_10px_25px_rgba(147,51,234,0.8)]";
  } else if (item.rarity === "legendary") {
    color =
      "bg-amber-500 border-yellow-200/80 hover:shadow-[0_10px_30px_rgba(245,158,11,0.9)]";
  } else if (item.rarity === "mythic") {
    color =
      "bg-[#cc0000] order-2 border-[#ffd700] shadow-[0_0_18px_rgba(204,0,0,0.8)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] transition-all";
  } else if (item.rarity === "divine") {
    color =
      "bg-bg-cyan-500 border-cyan-200/80 hover:shadow-[0_10px_30px_rgba(6,182,212,0.9)]";
  } else {
    color = bg - "[#F54927]";
  }
  return (
    <div
      className={`h-[200px] w-[250px] border-solid  border-[2px] shadow-[0_4px_15px_rgba(0,0,0,0.4)] rounded-2xl ${bgcolor} ${color}`}
    >
      <div className="w-100% h-[160px] flex flex-col items-center justify-center">
        <h1 className="text-[48px]">{item.emoji}</h1>
        <h1 className="font-bold text-[18px]">{item.name}</h1>
        <h1 className="text-[14px]">{item.type}</h1>
      </div>
      <div className="w-100% h-[160px] flex justify-around gap-[100px]">
        <div className="font-bold padding-[10px]">{item.rarity}</div>
        <div className=""> ⚔️{item.power}</div>
      </div>
    </div>
  );
};
