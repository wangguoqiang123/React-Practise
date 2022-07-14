import React, { Component } from 'react'

export default class List extends Component {
  render() {
	const {users, isFirst, isLoading,err} = this.props
	return (
		isFirst? <div className="row">欢迎您来搜索</div> :
		isLoading? <div className="row">isLoading...</div> :
		err ? <div className="row">{err}</div> :
		<div className="row">
			<div className="col-sm-6 col-md-4">
			<div className="thumbnail">
				<img src="..." alt="..."/>
				<div className="caption">
				<h3>Thumbnail label</h3>
				<p>...</p>
				<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
				</div>
			</div>
			</div>
	  </div>
	)
  }
}
