import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleSave = () => {
    const {updatedTitle} = this.state
    const {eachItem, saveEdits} = this.props
    saveEdits(updatedTitle, eachItem.id)
    this.setState({editing: false})
  }

  handleEdit = () => {
    const {eachItem} = this.props
    this.setState({editing: true, updatedTitle: eachItem.title})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {eachItem, toggleComplete, deleteSimpleTodo} = this.props
    const {title, id, completed} = eachItem
    const {editing, updatedTitle} = this.state

    return (
      <li className={completed ? 'list completed' : 'list'}>
        {editing ? (
          <div className="eachLine">
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button
              type="button"
              onClick={this.handleSave}
              className="editbutton"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="eachLine">
            <div className="titleContainer">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
              />
              <p className="title">{title}</p>
            </div>

            <div>
              <button
                type="button"
                className="button"
                onClick={() => deleteSimpleTodo(id)}
              >
                Delete
              </button>
              <button
                type="button"
                onClick={this.handleEdit}
                className="editbutton"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem
