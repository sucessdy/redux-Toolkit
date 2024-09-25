import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

import {removeTodo}  from "../features/Todo/todoSlice"
import { IoMdTrash } from "react-icons/io";

export default function Todo() {
   const selectTodo =  useSelector(state => state.todos)
   const dispatch = useDispatch()

  return (
   <> 
   <ul>  {selectTodo.map( (todo) => (
    <li className='text-black bg-slate-300' key={todo.id}> {todo.text} 
     <button onClick={() => dispatch(removeTodo(todo.id))}   className= ' rounded px-4 py-4 bg-black/5'> <IoMdTrash  /></button>
    </li>
 

 ))} 
 
 </ul>
    </>
  )
}
