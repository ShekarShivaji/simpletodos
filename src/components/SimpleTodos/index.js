import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

class SimpleTodos extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
        completed: false,
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
        completed: false,
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
        completed: false,
      },
      {
        id: 6,
        title: 'Fix the production issue',
        completed: false,
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
        completed: false,
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
        completed: false,
      },
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  handleAddTodo = () => {
    const {newTodoCount, newTodoTitle} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  saveEdits = (updatedTitle, id) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each =>
        each.id === id ? {...each, title: updatedTitle} : each,
      ),
    }))
  }

  deleteSimpleTodo = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredData})
  }

  toggleComplete = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="bgContainer">
        <ul className="CardContainer">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              type="text"
              placeholder="Enter todo title..."
              value={newTodoTitle}
              name="newTodoTitle"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Enter number of todos..."
              value={newTodoCount}
              name="newTodoCount"
              onChange={this.handleChange}
            />
            <button onClick={this.handleAddTodo} type="button">
              Add
            </button>
          </div>
          {todoList.map(eachItem => (
            <TodoItem
              eachItem={eachItem}
              key={eachItem.id}
              deleteSimpleTodo={this.deleteSimpleTodo}
              saveEdits={this.saveEdits}
              toggleComplete={this.toggleComplete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
