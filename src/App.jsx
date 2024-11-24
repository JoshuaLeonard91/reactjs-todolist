import { useState, useEffect } from 'react'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {

  // array for to do
  const [todos, setTodos] = useState([

  ])
  const [todoValue, setTodoValue] = useState('')

  // function to set local storage with todos
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  /* Add new to do list*/
  function handleAddTodos(newTodo) {
    // creates a new todo list with the existing values (...todos) and adds the new user task (newTodo)
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    // new todolist
    setTodos(newTodoList)
  }

  /* Delete todo*/
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  //use effect to handle getting todo from local storage if it exists
  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <>
        {/* Allows Todoinput access to the function */}
        <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />

        {/* Allows Todolist access to the function */}
        <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </>
    </>
  )
}

export default App
