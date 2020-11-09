import React from 'react';
import { connect } from "react-redux"
import { CART_ADD, CART_LESS } from '../store/action/actionType';
class DetailA extends React.Component {
    render() {
        console.log("DetailA 组件 props",this.props)
        return (
            <section>
                <h2>商品详情页组件</h2>
                {/* onClick={() => { this.props.dispatch({ type: CART_ADD }) }} */}
                <button onClick={() => { this.props.cartAdd() }}>点击加入购物车</button>
                <button onClick={() => { this.props.cartLss() }}>点击移出购物车</button>
                <hr />
            </section>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {...state,name:"DetailA"}
// }
const mapDispatchToProps = (dispatch) => {
    return {
        // 增加
        cartAdd: () => {
            dispatch({ type: CART_ADD })
        },
        // 减少
        cartLss: () => {
            dispatch({ type: CART_LESS })
        }
    }
}
export default connect(null,mapDispatchToProps)(DetailA);