import './Todo.css'

function Todo() {

  return (
    <li className="todo">
    <input type="checkbox" />
    <p>Walk the dog</p>
    <button>Delete</button>
  </li>  )
}

export default Todo