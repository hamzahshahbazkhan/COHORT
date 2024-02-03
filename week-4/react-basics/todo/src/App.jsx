import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([
    {
      title: "do homeworks",
      description: "7 to 10"
    },
    {
      title: "do homeworks",
      description: "7 to 10"
    }
  ])

  function addTodo() {
    setTodo([...todo,
    {
      title: "do homeworks",
      description: "7 to 10"
    }
    ])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todo.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo({ title, description }) {
  return <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
}

export default App
