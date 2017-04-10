// 入口
import React, { Component } from 'react' //es6 
import {render, findDOMNode} from 'react-dom'

import Children from './Children'
import Children2 from './Children2'

class Dom extends Component {
	state = {
		name: 'jike',
		age: 12,
		school: 'BAT',
		// ...
	}
	handleClick() {
		alert('jike')
	}
	changeName(val) {
		// this是什么 this 父组件本身
		console.log(this);
		this.setState({
			name: val
		})
	}
	componentDidMount() {
		// console.log(this.refs.ptag);
		const el = findDOMNode(this)// 当前组件本身
		// console.log(el);
		// console.log(this.refs.children);// 获取子组件
		console.log(this.refs.children.refs.spanTag);// 获取子组件的ref
	}
	render() {
		return (
			<div>
				react dom
				<p ref="ptag">this is a ptag</p>
				<Children  ref="children" {...this.state} changeName={this.changeName.bind(this)} />
				<Children2 />
			</div>

		)
	}
}

export default Dom
