import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  handleCheck = (id)=>{
		return (event)=>{
      console.log(id,event.target.checked)
			this.props.updateTodo(id,event.target.checked)
		}
	}

  handleDelete = (id) => {
    if(window.confirm('确认删除嘛?')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done} = this.props
    return (
        <li >
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={()=> this.handleDelete(id) } className="btn btn-danger" >删除</button>
        </li>
    )
  }
}
