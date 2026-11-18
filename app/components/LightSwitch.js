"use client";
import { useState } from "react";
export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-between p-5 rounded-2xl w-[220px] h-[180px] border transition-all duration-300 ${
        isOn
          ? "bg-amber-400/90 border-amber-300 text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.5)]"
          : "bg-slate-900 border-slate-800 text-slate-200 shadow-xl"
      }`}
    >
      <p className="text-xs font-bold tracking-widest opacity-80">💡 Light</p>

      <p
        className={`text-4xl transition-transform duration-300 ${
          isOn ? "scale-110 drop-shadow-md" : "scale-100 opacity-75"
        }`}
      >
        {isOn === true ? "💡" : "🌑"}
      </p>

      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
        className={`w-full py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
          isOn
            ? "bg-slate-900 text-amber-300 hover:bg-slate-800 shadow-md"
            : "bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md"
        }`}
      >
        {isOn === true ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};
