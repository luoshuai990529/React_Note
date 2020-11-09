import React, { Component } from 'react';
import { createStore } from "redux"
// import { HashRouter as Router, Link, Route } from 'react-router-dom'

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */

//  counter 是一个函数，根据action.type 执行不同的分支
const counter = (state = 0, action) => {
    console.log('联系管理员 接收到action对象为',action);
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'LESS':
            return state - 1;
        default:
            return state;
    }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(counter);
console.log('store仓库',store);

// 给仓库添加一个订阅，仓库状态有变化，自动执行订阅的回调函数
store.subscribe(() =>
    console.log('store 仓库状态有变化，自动执行订阅的回调函数', store.getState())
);


// 获取数据。其实是由仓库管理员返回的
const res = store.getState();
console.log('获取store仓库的数据：',res);

// 发送动作 dispatch
store.dispatch({type:"ADD"})
store.dispatch({type:"ADD"})
store.dispatch({type:"ADD"})
store.dispatch({type:"ADD"})






/* 
dispatch: ƒ dispatch(action) 发送动作告诉仓库管理员如何操作数据
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener) 订阅
*/



// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'ADD' });
// 1
// store.dispatch({ type: 'ADD' });
// 2
// store.dispatch({ type: 'LESS' });
// 1

class Demoa extends Component {
    componentDidMount() {

    }
    render() {
        return <div>
            111
        </div>
    }
}

class App extends React.Component {

    render() {
        return (
            <div id="app">
                <Demoa></Demoa>
            </div>
        )
    }
}

export default App