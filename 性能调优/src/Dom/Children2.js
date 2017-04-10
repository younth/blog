// 入口
import React, { Component } from 'react' //es6 
import {render} from 'react-dom'

import EventCenter from '../Event/EventCenter'

class Children2 extends Component {
	componentDidMount() {
		EventCenter.on('msg', (params) => {
			alert(params)
		})
	}
	render() {
		const {name, school} = this.props
		console.log(name, school);
		return (
			<div>
				react Children2
			</div>

		)
	}
}

export default Children2
