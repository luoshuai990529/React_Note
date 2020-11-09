import React from 'react';
// 1.引入Redux
import { createStore } from "redux"
// import Header from "./components/Header.js"
// import DetailsA from "./components/Details.js"

// 2.创建管理员是一个函数 接收state、action两个参数
const defaultState = {
    cartNum: 0
}
const reducer = (state = defaultState, action) => {
    if (action.type === "ADD") {
        return { cartNum: state.cartNum + 1 }
    } else if (action.type === "RDD") {
        return { cartNum: state.cartNum - 1 }
    }
    return state;
}
// 3.创建仓库
const store = createStore(reducer)



class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            ...store.getState()
        }
    }
    unSubsreibeFn = null;
    componentDidMount() {
        console.log('componentDidMount 组件挂载完毕,');
        // 组件挂载完毕
        // 给仓库添加一个订阅，仓库状态有变化，自动执行订阅的回调函数
        this.unSubsreibeFn = store.subscribe(() => {
            this.setState({
                cartNum: store.getState().cartNum
            })
        });
    }
    // 组件卸载 -组件都没有了 就需要取消订阅否则报错
    componentWillUnmount() {
        console.log("componentWillUnmount 组件卸载");
        this.unSubsreibeFn();
    }
    render() {
        return (
            <header>
                <h1>头部组件</h1>
                <h3>购物车商品数量 {this.state.cartNum} </h3>
                <hr />
                <hr />
            </header>
        );
    }
}


class DetailA extends React.Component {
    render() {
        return (
            <section>
                <h2>商品详情页组件</h2>
                <button onClick={() => { store.dispatch({ type: "ADD" }) }}>点击加入购物车</button>
                <hr />
            </section>
        );
    }
}




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: true
        }
    }
    toggleHandle = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <>
                <button onClick={() => { this.toggleHandle() }}>toggle</button>
                {/* 1. 头部组件 */}
                {this.state.isShow ? <Header /> : ""}
                {/* 2. 详情页组件 */}
                <DetailA />
            </>
        );
    }
}


export default App;