import { useState } from "react";
import TodoList from "./components/TodoList";
import { v4 } from "uuid"
import { BsBoxArrowRight } from "react-icons/bs";

function Header() {
  return <>
    <div className="header" >
      <div className="d-flex">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle" alt="Avatar"
          width={50} height={50}
          style={{ marginRight: "10px" }} />
        <div>
          <span>Welcome back!</span>
          <br />
          <b>Thanh Phong</b>
        </div>
      </div>
      <div>
        <BsBoxArrowRight />
      </div>
    </div>
  </>
}

function App() {
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState("")
  const [todoUpdateId, setTodoUpdateId] = useState("")

  const onTextInputChange = (e) => {
    setTextInput(e.target.value)
  }

  const handleSubmit = (e) => {
    if (textInput.length > 0) {
      var newTodo = { id: v4(), name: textInput, isCompleted: false }
      setTodoList([newTodo, ...todoList])
      setTextInput("")
    }
  }

  const handleFinish = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => todo.id === id ? { ...todo, isCompleted: true } : todo)
    )
  }

  const handleDelete = (id) => {
    setTodoList((prev) =>
      prev.filter((todo) => todo.id !== id)
    )
  }

  const handleUpdate = (id) => {
    if (textInput.length > 0) {
      setTodoList((prev) =>
        prev.map((todo) => todo.id === id ? { ...todo, name: textInput } : todo)
      )
    }
    cancelUpdate()
  }

  const onUpdate = (id) => {
    setTodoUpdateId(id)
  }

  const cancelUpdate = () => {
    setTodoUpdateId("")
    setTextInput("")
  }

  return (
    <div className="wrapper">
      <Header />
      <center>
        <h3>TODO LIST</h3>
      </center>
      <br />
      <div className="input-group w-75 d-flex center-block" >
        <input
          className="form-control"
          name='add-todo'
          placeholder={todoUpdateId.length === 0 ? 'Thêm việc cần làm...' : 'Sửa việc ở đây'}
          value={textInput}
          onChange={onTextInputChange}></input>
        {
          (todoUpdateId.length === 0) && <div className="input-group-append">
            <button onClick={handleSubmit} className='btn btn-primary'>Thêm</button>
          </div>
        }
        {
          (todoUpdateId.length > 0) &&
          <>
            <div className="input-group-append">
              <button className='btn btn-success' onClick={() => handleUpdate(todoUpdateId)}>Lưu</button>
              <button className='btn btn-danger' onClick={() => cancelUpdate()}>Hủy</button>
            </div>
          </>
        }
      </div>
      <TodoList todoList={todoList}
        handleFinish={handleFinish}
        handleDelete={handleDelete}
        onUpdate={onUpdate} />
    </div>
  );
}

export default App;
