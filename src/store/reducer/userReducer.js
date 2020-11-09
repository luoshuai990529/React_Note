import { USER_LOGIN, USER_OUT } from "../action/actionType";

// 2.创建管理员是一个函数 接收state、action两个参数
const defaultState = {
    userInfo:{
        userName:"游客"
    }
}
const reducer = (state = defaultState, action) => {
    if (action.type === USER_LOGIN) {
        return { userInfo: {userName:action.value}}
    } else if (action.type === USER_OUT) {
        return { userInfo: {userName:"游客"} }
    }
    return state;
}

export default reducer;