import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  const handleFinish = props.handleFinish
  const todoList = props.todoList
  const handleDelete = props.handleDelete
  const onUpdate = props.onUpdate

  return (
    <table>
      <tbody>
        {todoList.map(
          todo => (<Todo key={todo.id} todo={todo}
            handleFinish={handleFinish}
            handleDelete={handleDelete} 
            onUpdate={onUpdate}/>)
        )}
      </tbody>
    </table>
  )
}
