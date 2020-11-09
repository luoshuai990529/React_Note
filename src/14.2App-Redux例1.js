import React, { Component } from 'react';
// 1.引入redux
import { createStore } from "redux"

// 2. 仓库管理员:一个函数 接收state，action参数
// 2.1 定义个仓库默认数据对象
const defaultState = {
    cartNum: 0
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            // 要求返回全新对象
            return { cartNum: state.cartNum + 1 };
        default:
            // 如果没有action 就直接返回原本状态
            return state;
    }
}
// 3.创建仓库
const store = createStore(reducer)
// console.log(store.getState());


class Header extends Component {
    constructor() {
        super()
        this.state = {
            // cartNum: store.getState().cartNum
            ...store.getState()
        }
    }
    // 组件挂载完毕的时候触发
    componentDidMount() {
        // 4.组件挂载完毕之后 订阅一下仓库，仓库数据变化自动执行回调函数
        store.subscribe(() => {
            // 4.1获取更新仓库后的状态
            console.log("仓库最新数据", store.getState())
            const { cartNum } = store.getState();
            // 4.2通过setState更新组件状态
            this.setState({
                cartNum: cartNum
            })
        })
    }
    render() {
        return (
            <header>
                <h1>商品头部组件</h1>
                <h3>购物车商品数量 {this.state.cartNum} </h3>
                <hr />
            </header>
        )
    }
}

class Detail extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <header>
                <h1>商品详情页</h1>
                {/* 通过dispatch发送动作 */}
                <button onClick={() => { store.dispatch({ type: "ADD" }) }}>点击加入购物车 </button>
            </header>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <div id="app">
                <Header></Header>
                <Detail></Detail>
            </div>
        )
    }
}

export default App