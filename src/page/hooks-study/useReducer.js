import React, { useReducer } from 'react';

/* 初始数据 */
const initialState = { count: 0 };
function init(initialCount) {
  return initialCount;
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
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  // useReducer(reducer) 等价于 createStore(reducer)
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  console.log(useReducer(reducer, initialCount));
  return (
    <>
      Count: {state.count}
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