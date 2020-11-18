
// 仓库入口文件，Redux 使用一个仓库即可
import { createStore, combineReducers,applyMiddleware } from "redux";
import cartReducer from "./reducer/cartReducer"
import userReducer from "./reducer/userReducer"
// reduxThunk 主要功能：对redux的dispatch功能进行增强,能够让action处理异步操作
// 增强前：dispatch只能传普通对象  增强后：dispatch能传入一个函数，函数内部可以发送一些异步请求
import reduxThunk from "redux-thunk"
// reduxSaga 可以直接拦截dispatch派发的action，从而实现在执行reducer之前执行一些其他操作
import createSagaMiddleware from 'redux-saga'
// 导入生成器
import mySaga from './mySaga'
/* 注意：
如果导入的是redux-thunk 那么返回给我们的是一个中间件对象
如果导入的是redux-saga 那么返回给我们的是一个创建中间件的函数

如果是redux-thunk 那么在创建store的时候指定完中间件即可
如果是redux-saga 那么除了需要在创建store的时候指定中间件以外，还需要手动调用中间件的run方法
*/
// redux的插件，需要通过应用中间件函数 applyMiddleware 启动插件
// const storeEnhancer = applyMiddleware(reduxThunk);
const sagaMiddleware = createSagaMiddleware()
const storeEnhancer = applyMiddleware(sagaMiddleware);


// 3.创建仓库
// 注意如果有多个管理员 需要使用combineReducers将他们连接起来
// combineReducers({管理员1，管理员2})
const store = createStore(combineReducers({cartReducer, userReducer}), storeEnhancer)

// 手动调用run方法,传入一个生成器告诉redux-saga我们需要拦截哪些dispatch派发的action
sagaMiddleware.run(mySaga);


// 导出redux 仓库
export default store;