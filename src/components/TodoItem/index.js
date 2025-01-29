import './index.css'

const TodoItem = props => {
  const {eachItem, deleteSimpleTodo} = props
  const {title, id} = eachItem
  const onDelete = () => {
    deleteSimpleTodo(id)
  }
  return (
    <li className="list">
      <div className="eachLine">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
