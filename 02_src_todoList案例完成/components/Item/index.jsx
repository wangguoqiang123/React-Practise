import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {

  state = {mouse: false}
  handleDelete = (id) => {
	if(window.confirm('确定删除吗？')){
    	this.props.deleteTodo(id)
	}
  };
  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  
  render() {
    const { id, name, done } = this.props;
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() =>this.handleDelete(id)} className="btn btn-danger">
          删除
        </button>
      </li>
    );
  }
}
