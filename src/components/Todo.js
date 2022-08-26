import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";


export default function Todo(props) {
  const todo = props.todo
  const handleFinish = props.handleFinish
  const handleDelete = props.handleDelete
  const onUpdate = props.onUpdate

  return (
    <>
      <tr>
        <td width={400}
          style={{ textDecoration: todo.isCompleted === true ? "line-through" : "none" }}
        >
          {todo.name}</td>
        {
          todo.isCompleted === false &&
          <>
            <td><BsFillCheckCircleFill color='green' onClick={() => handleFinish(todo.id)} /></td>
            <td><BsFillPencilFill color='blue' onClick={() => onUpdate(todo.id)} /></td>
          </>
        }
        <td><BsXLg color='red' onClick={() => handleDelete(todo.id)} /></td>
      </tr>
    </>
  )
}
