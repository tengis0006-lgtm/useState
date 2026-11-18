"use client";
import { useState } from "react";
export const SecretMessage = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={`flex flex-col rounded-xl gap-[5px] w-[200px] justify-center bg-white h-[180px]`}
    >
      <p className="text-base text-center text-black">🔒 SecretMessage</p>
      <p className="text-2xl text-center ">{isOn === true ? "🔓" : "🔒"}</p>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
        className="rounded-xl flex justify-center bg-yellow-500 text-black"
      >
        {isOn === true ? "Lock" : "unluck"}
      </button>
      {isOn && (
        <div className="bg-blue-300 flex justify-center item-center rounded-xl"></div>
      )}
      ;
    </div>
  );
};
