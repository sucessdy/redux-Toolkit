import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addhandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  const handleClick = () => {


  };

  return (
    <form onSubmit={addhandleSubmit} className="space-x-2">
      <input
        type="text"
        placeholder="enter ur name"
        value={input}
        className="py-2 px-2 bg-slate-300/25 rounded  "
        onChange={(e) => setInput(e.target.value)}
      />
      <button className=" text-white" onClick={handleClick}>
        {" "}
AddTodo
      </button>


    </form>
  );
}
