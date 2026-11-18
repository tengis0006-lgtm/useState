"use client";
import { useState } from "react";
export const Calculator = ({}) => {
  const [count, setCount] = useState(0);
  return (
    <section className="">
      <div className="flex justify-center align-center gap-[100px]  ">
        <div className=" w-[220px]  h-[180px] rounded-xl bg-white p-5">
          <h1 className="text-center text-2xl font-bold text-black  ">
            TOOLUUR
          </h1>

          <div className="font-bold text-[50px] text-black flex justify-center align-center">
            {count}
          </div>
          <div className="flex justify-around">
            <button
              className="w-[50px] bg-black rounded-3xl text-red "
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <button
              className="w-[50px] bg-black rounded-3xl text-red"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
