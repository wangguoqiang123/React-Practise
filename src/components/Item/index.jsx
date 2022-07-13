import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  handleDelete = (id) => {
	if(window.confirm('确定删除吗？')){
    	this.props.updateTodo(id)
	}
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} />
          <span>{name}</span>
        </label>
        <button onClick={() =>this.handleDelete(id)} className="btn btn-danger">
          删除
        </button>
      </li>
    );
  }
}
