import React, { useReducer } from 'react';

/* 初始数据 */
const initialState = { count: 0 };
function init(initialCount) {
    return {number:initialCount.count};
}

/* 
  redux
    - reducer                  仓库管理员
    - createStore(reducer)     创建仓库
    - action                   对象
    - dispatch                 发送 action 对象
*/

// redux 的 reducer 一样
function reducer(state, action) {
    console.log(state,action);

    // state就是initialCount {count:0}
    // action就是dispatch的参数 {type:''}
    switch (action.type) {
        case 'increment':
            return { number: state.number + 1 };
        case 'decrement':
            return { number: state.number - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    //   useReducer(reducer) 等价于 createStore(reducer)
    //   useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

    //   惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialCount)。
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    console.log(state);
    return (
        <>
            <h1 className='desc'>useState 内部就是靠 useReducer 来实现的</h1>
            <h1 className='desc'>{'useReducer是 useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法'}</h1>
            <h1 className='desc'>在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等</h1>
            Count: {state.number}
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}> 重置仓库数据 </button>
            </div>
        </>
    );
}


class App extends React.Component {
    render() {
        return (
            <div><Counter initialCount={initialState} /></div>
        );
    }
}


export default App;