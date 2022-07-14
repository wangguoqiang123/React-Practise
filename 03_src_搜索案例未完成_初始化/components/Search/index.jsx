import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	
	handleSearch = () => {
		const {keyWordElement:{value: keyWord}} = this
		this.props.updateAppState({isFirst: false,isLoading: true})
		axios.get(`api/s?wd=${keyWord}`).then(res => {
			this.props.updateAppState({isLoading:false,users:res.data})
		},
		error => {
			this.props.updateAppState({isLoading:false,err:error.message})
		}
		)
		
	}

  render() {
	return (
		<div className="row">
			<div className="input-group">
			<input type="text" ref={c => this.keyWordElement = c} className="form-control" placeholder="Search for..."/>
			<span className="input-group-btn">
				<button className="btn btn-default" onClick={this.handleSearch} type="button">搜索</button>
			</span>
			</div>
		</div>
	)
  }
}
