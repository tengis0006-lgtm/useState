"use client";
import { useState } from "react";
export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setTodoList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const addJob = () => {
    if (inputValue.trim() !== "") {
      const newJob = {
        id: Date.now(),
        title: inputValue.trim(),
        isDone: false,
      };
      setTodoList([...toDoList, newJob]);
      setInputValue("");
    }
  };
  const deleteTodoList = (id) => {
    const updateList = toDoList.filter((job) => {
      console.log(job);

      return job.id !== id;
    });

    setTodoList(updateList);
  };
  const changeSelectedCateory = (newCategory) => {
    setSelectedCategory(newCategory);
  };
  const toggleTask = (id) => {
    const result = toDoList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );

    setTodoList(result);
  };
  const filteredList = toDoList.filter((todo) => {
    if (selectedCategory === "ACTIVE") return todo.isDone === false;
    if (selectedCategory === "COMPLETED") return todo.isDone === true;
    return true;
  });

  return (
    <main className="flex justify-center min-h-screen items-center">
      <div>
        <div className="rounded-2xl mx-auto w-[500px] bg-[#FFFFFF] pb-6 shadow-sm ">
          <h1 className="text-center text-3xl font-bold p-[20px] justify-center flex">
            💼 Хийх ажил
          </h1>

          <div className="flex justify-center items-center gap-[10px]">
            <input
              value={inputValue}
              className="p-[5px] pl-[10px] bg-transparent border text-sm rounded-md border-slate-400 hover:border-slate-300 focus:outline-none text-slate-800"
              placeholder="shine ajil nemeh..."
              onChange={(event) => setInputValue(event.target.value)}
              type="text"
            />
            <button
              className="bg-blue-300 hover:bg-blue-400 rounded-3xl w-[70px] h-[30px] font-medium text-slate-800"
              onClick={addJob}
            >
              ADD
            </button>
          </div>
          <div className="flex justify-center items-center p-[10px]">
            <div className="w-full px-8">
              <div className="font-bold">
                <h1 className="flex justify-center p-[10px] text-3xl">
                  📋LIST📋
                </h1>
              </div>

              <div className="flex justify-center gap-[20px] mb-4">
                <button
                  onClick={() => {
                    changeSelectedCateory("ALL");
                  }}
                  className={`p-[5px] ${selectedCategory === "ALL" ? "bg-blue-400" : "bg-gray-400"}  rounded-[10px] p-[7px]`}
                >
                  ALL
                </button>
                <button
                  onClick={() => {
                    changeSelectedCateory("ACTIVE");
                  }}
                  className={`p-[5px ] ${selectedCategory === "ACTIVE" ? "bg-blue-400" : "bg-gray-400"} rounded-[10px] p-[7px]`}
                >
                  ACTIVE
                </button>
                <button
                  onClick={() => {
                    changeSelectedCateory("COMPLETED");
                  }}
                  className={`p-[5px ] ${selectedCategory === "COMPLETED" ? "bg-blue-400" : "bg-gray-400 "} rounded-[10px] p-[7px]`}
                >
                  COMPLETED
                </button>
              </div>
              <div className="space-y-3">
                {filteredList.map((job) => (
                  <div
                    key={job.id}
                    className="justify-between items-center bg-[#F3F4F6] rounded-[10px] w-full h-[45px] flex px-[15px]"
                  >
                    <input
                      type="checkbox"
                      checked={job.isDone}
                      onChange={() => toggleTask(job.id)}
                      className="h-[20px] w-[20px] cursor-point accent-blue-600"
                    />
                    <h1
                      className={`cursor-pointer ${
                        job.isDone
                          ? "text-slate-400 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {job.title}
                    </h1>
                    <button
                      onClick={() => deleteTodoList(job.id)}
                      className="p-[5px] hover:scale-110 transition"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
                {toDoList.length === 0 && (
                  <div className="flex justify-center border-dashed border-slate-200 border bg-gray-300 rounded-xl w-max-auto] ">
                    {" "}
                    Ажил байхгүй байна ☺️{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
