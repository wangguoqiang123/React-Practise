import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,deleteTodo,updateTodo}= this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item {...todo} updateTodo={updateTodo} key={todo.id} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
