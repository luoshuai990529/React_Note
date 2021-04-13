import React from 'react';
// 1.引入Redux
import Header from "../../../components/Header"
import DetailA from "../../../components/Details"
// connect：用来联系 Provider的函数
// import { connect } from 'react-redux';
// console.log(connect)
// connect(mapStateToProps, mapDispatchToProps)
// connect(把仓库的State映射到组建的属性中, 吧Dispatch映射到组件的属性中)

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: true
        }
    }
    toggleHandle = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        console.log("app的props", this.props)
        return (
            <React.Fragment>
                <h2>redux-案例3 ：</h2>
                <button onClick={() => { this.toggleHandle() }}>toggle</button>
                {/* 1. 头部组件 */}
                {this.state.isShow ? <Header /> : ""}
                {/* 2. 详情页组件 */}
                <DetailA />
            </React.Fragment>
        );
    }
}
// const mapStateToProps = (state) => {
//     console.log(state);
//     return {...state}
// }
// 通过connect找到提供商 
// console.log(connect()(App));
// const SuperApp = connect(mapStateToProps)(App);

export default App;