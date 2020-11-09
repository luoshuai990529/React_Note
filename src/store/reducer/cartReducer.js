import { CART_ADD, CART_LESS } from "../action/actionType";

// 2.创建管理员是一个函数 接收state、action两个参数
const defaultState = {
    cartNum: 0
}
const reducer = (state = defaultState, action) => {
    if (action.type === CART_ADD) {
        return { cartNum: state.cartNum + 1 }
    } else if (action.type === CART_LESS) {
        return { cartNum: state.cartNum - 1 }
    }
    return state;
}

export default reducer;