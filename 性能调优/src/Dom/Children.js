// 入口
import React, { Component } from 'react' //es6 
import {render} from 'react-dom'

import EventCenter from '../Event/EventCenter'

class Children extends Component {
	handleClick() {
		EventCenter.trigger('msg', 'this is Children msg')
		// 告诉父组件，要更新，传递参数，调用方法
		this.props.changeName('mogui')
	}
	render() {
		const {name, school} = this.props
		console.log(name, school);
		return (
			<div>
				react Children : {this.props.name}
				<br />
				<span ref="spanTag" onClick={this.handleClick.bind(this)}>this is a children spanTag</span>
			</div>

		)
	}
}

export default Children
