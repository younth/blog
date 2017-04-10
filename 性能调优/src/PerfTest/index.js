import React, { Component } from 'react'
import { render } from 'react-dom'

// div块
class NumberDiv extends Component {

    state = {
        number: this.props.number,// 当前的number值
    }

    style = {
        height: "100px",
        width: "100px",
        float: "left",
        margin: "10px",
        backgroundColor: "gray",
    }
    chosedStyle = {
       height: "100px",
       width: "100px",
       float: "left",
       margin: "10px",
       backgroundColor: "red",
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.render
    }

    render() {
       return (
          <div style={this.props.chosedNumber === this.state.number ? this.chosedStyle : this.style}>
              {this.state.number}
          </div> 
        )
    }
}

// 自定义表单
export default class PerfTest extends Component {
    state = {
        inputVal: -1, //当前数字
        lastVal: -1 //上一个数字
    }

    inputStyle = {
        display: "block",
        clear: "both",
        width: "200px",
        marginBottom: "10px",
    }
    handleChange(e) {
        // input val
        this.setState({
            inputVal: Number(e.target.value),
            lastVal: this.state.inputVal
        })
    }
    render() {
        let numberList = [];
        for(var i = 0; i < 5000; i++) {
            // 告诉子组织 是否需要更新 被选中
            numberList.push(<NumberDiv key={i} number={i} render={i === this.state.inputVal || i === this.state.lastVal} chosedNumber={this.state.inputVal}></NumberDiv>)
        }
        // 生成 5000个NumberDiv 并显示出来
        return (
            <div> 
                <input type="text" style={this.inputStyle} placeholder="请输入一个数字" onChange={this.handleChange.bind(this)} />
                {numberList}
            </div>
            )
        } 

}
