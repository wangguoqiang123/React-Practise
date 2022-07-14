import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  //状态在哪里，操作的方法就在哪里
  state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}

  addTodo = (todoObj) => {
    const {todos} = this.state

    const newTodos = [todoObj,...todos];
    
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  updateTodo = (id,done) => {
    const {todos} = this.state

    const newTodos = todos.map(todoObj => {
      if(todoObj.id === id) return {...todoObj,done} //取到当前的obj浅拷贝然后进行done更新
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  //clearAllDone用于清除所有已完成的
  clearAllDone = ()=>{
		//获取原来的todos
		const {todos} = this.state
		//过滤数据
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		//更新状态
		this.setState({todos:newTodos})
	}
  //全选
  checkAllTodo = (done)=>{
		//获取原来的todos
		const {todos} = this.state
		//加工数据
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		//更新状态
		this.setState({todos:newTodos})
	}

  render() {
    const {todos} = this.state
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} />
            </div>
        </div>
    );
  }
}