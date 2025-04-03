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
    </>
  )
}

export default App

