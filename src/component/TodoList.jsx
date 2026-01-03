import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  function handleAddTask() {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  }
  function handleRemoveTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }
  return (
    <div className="h-screen w-screen flex flex-col p-10 gap-5 border-2 border-black">
      <div className="h-1/5 w-full flex justify-between items-center p-5 bg-red-500">
        <p className=" text-6xl">Todolist</p>
        <button>Add task</button>
      </div>
      <div className="h-1/5 w-full flex justify-evenly items-center p-5 bg-blue-500">
        <input
          className="w-5/8 border-1 border-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask} className="w-1/8">
          Add
        </button>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="h-1/5 w-full flex justify-center items-center p-5 bg-green-500"
        >
          <p className=" text-4xl">{task}</p>
          <button className="w-1/8" onClick={() => handleRemoveTask(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
