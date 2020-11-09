const { USER_LOGIN, USER_OUT } = require("./actionType")
// #使用action生成器来创建action
export const createLoginAction = (username) => {
    return {
        type: USER_LOGIN,
        value: username,
    }
}
export const createLoginOutAction = (username) => {
    return {
        type: USER_OUT,
        value: username,
    }
}

// 调用这个action  可以发送异步请求 ，获取用户信息
export const getUserInfoAction = () => {
    // 返回一个有业务的函数 发送异步请求
    return (dispatch) => {
        // 模拟异步请求
        setTimeout((res = "张三") => {
            dispatch({ type: USER_LOGIN, value: res })
        }, 1000)
    }
}

