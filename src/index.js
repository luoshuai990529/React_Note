import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './24App-useReducer';
// import App from './Reducer-redux案例/index'
import App from './28App-自定义Hook';
// import App from './25App-useMemo';
// import App from './27App-useRef';
// import App from './App';
// 提供商 代理商 
import { Provider } from "react-redux";
// 导入redux仓库
import store from './store/index';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 通过提供商提供仓库数据
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode> //生命周期输出会输出两次 建议删除 方便学习生命周期
  /* </React.StrictMode>, */
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
