import React from 'react';
import { connect } from "react-redux"
import { createLoginAction, createLoginOutAction, getUserInfoAction } from '../store/action/actionCreator';
class Header extends React.Component {

    componentWillUnmount() {
        console.log("componentWillUnmount 组件卸载");
    }
    loginHandler = async () => {
        // 3.根据登录状态 来判断要传什么type值
        const isLogin = this.props.userReducer.userInfo.userName === "游客"
        // this.props.dispatch({ type: typeStr })
        // 如果是游客就执行登录方法  如果是用户就执行退出方法
        isLogin ? this.props.loginHandle() : this.props.loginOutHandle()
        //登录方法

        // this.props.loginOutHandle()
    }
    render() {
        const btnText = this.props.userReducer.userInfo.userName === "游客" ? "登录" : "退出"
        console.log("执行Header的render方法，Header 组件 Props：", this.props);
        // {cartReducer: {…}, userReducer: {…}, name: "header", dispatch: ƒ}
        return (
            <header>
                <h1>头部组件</h1>
                <button onClick={() => { this.loginHandler() }}>{btnText}</button>
                <h2>用户登录状态：{this.props.userReducer.userInfo.userName}</h2>
                <h3>购物车商品数量 {this.props.cartReducer.cartNum} </h3>
                <hr />
                <hr />
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state, name: "header" }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // 登录退出
        loginHandle: () => {
            // 使用生成器生成的action  createLoginAction
            // dispatch(createLoginAction("王老八"))
            dispatch(getUserInfoAction())
        },
        loginOutHandle:()=>{
            dispatch(createLoginOutAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);