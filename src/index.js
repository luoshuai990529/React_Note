import React from 'react';
import ReactDOM from 'react-dom';
import App from './mainApp';
// 提供商 代理商 
import { Provider } from "react-redux";
// 导入redux仓库
import store from './store/index';

ReactDOM.render(
  // 通过提供商提供仓库数据
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode> //生命周期输出会输出两次 建议删除 方便学习生命周期
  /* </React.StrictMode>, */
  , document.getElementById('root')
);