<<<<<<< HEAD
import './App.css'
import Todo from './Todo'
import NewTodo from './NewTodo'

function App() {
  return (
    <>
      <header>
        <h1>My ToDo List</h1>
        <h2>Henry Staser - ToDo App</h2>
      </header>

      <NewTodo />

      <section id="todo-list">
        <h2 className="hidden">ToDo Items</h2>
        <ul id="todo-items">
          <Todo />
        </ul>
      </section>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 00c4878428965cfa53c235595316f58bc6a7d7a4
    </>
  )
}

export default App
<<<<<<< HEAD

=======
>>>>>>> 00c4878428965cfa53c235595316f58bc6a7d7a4
