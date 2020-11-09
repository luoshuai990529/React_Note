
// 仓库入口文件，Redux 使用一个仓库即可
import { createStore, combineReducers,applyMiddleware } from "redux";
// redux的插件，需要通过应用中间件函数 applyMiddleware 启动插件
// reduxThunk 主要功能：对redux的dispatch功能进行增强
// 增强前：dispatch只能传普通对象  增强后：dispatch能传入一个函数，函数内部可以发送一些异步请求
import reduxThunk from "redux-thunk"

import cartReducer from "./reducer/cartReducer"
import userReducer from "./reducer/userReducer"
// 3.创建仓库
// 注意如果有多个管理员 需要使用combineReducers将他们连接起来
// combineReducers({管理员1，管理员2})
const store = createStore(combineReducers({cartReducer, userReducer}),applyMiddleware(reduxThunk))
// 到处redux 仓库
export default store;