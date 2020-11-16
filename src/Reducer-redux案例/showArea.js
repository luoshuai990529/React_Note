import React, {  useReducer } from "react";

import Buttons from "./components/Buttons";
import Color from "./components/Color";

// 1.创建上下文环境
export const ColorContext = React.createContext();
// 2.解构出提供商
const { Provider } = ColorContext;

// 3.定义actionType state 和 reducer
export const UPDATE_COLOR = "UPDATE_COLOR";
const state = {
  color: "#0094ff",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {color:action.color};
    default:
      return state;
  }
};

export function ShowArea() {
  // 调用 useReducer方法传入 reducer 和 state
  const [states, dispatch] = useReducer(reducer, state);
  console.log(states);
  // const [color, setColor] = useState("#0094ff");
  return (
    // 使用provider 对值进行共享
    <Provider value={{ ...states, dispatch }}>
      <Buttons />
      <Color />
    </Provider>
  );
}
