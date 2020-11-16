import React from "react";
// 创建上下文环境
/* 
  const AppContext = React.createContext(defaultValue);
  注意：只有当组件所处的树中没有匹配到 Provider 时，
  其 defaultValue 参数才会生效。
  这有助于在不使用 Provider 包装组件的情况下对组件进行测试。

  官方文档解释：https://zh-hans.reactjs.org/docs/context.html#when-to-use-context
*/
const AppContext = React.createContext();

// 解构出数据供应商 - 数据生产者
const { Provider } = AppContext;

class Son extends React.Component {
  // 挂载在 class 上的 contextType 属性，可以使用 static 这个类属性来初始化你的 contextType。
  // 这能让你使用 this.context 来消费最近 Context 上的那个值。
  // 你可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = AppContext;
  render() {
    console.log("Son的context", this.context);
    return (
      <div>
        <h2>--子组件--</h2>
        <h3>上下文的数据：{this.context.cartNum}</h3>
      </div>
    );
  }
}

class Son2 extends React.Component {
  static contextType = AppContext;
  render() {
    console.log("Son2的context", this.context);
    return (
      <div>
        <h2>--Son2子组件--</h2>
        <h3>
          上下文的数据：{this.context.cartNum}，{this.context.name}
        </h3>
      </div>
    );
  }
}
// 给子组件添加 Context 关联
// Son.contextType = AppContext;

class App extends React.Component {
  state = {
    cartNum: 11
  };
  cartNumAdd = () => {
    this.setState({ cartNum: this.state.cartNum + 1 });
  };
  cartNumLess = () => {
    this.setState({ cartNum: this.state.cartNum - 1 });
  };
  cartNumSet = (cartNum) => {
    this.setState({ cartNum });
  };
  render() {

    /* 
    注意：
      因为 context 会使用参考标识（reference identity）来决定何时进行渲染，
      这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，
      可能会在 consumers 组件中触发意外的渲染。
    解决：
      为了防止这种情况，可以将 value 状态提升到父节点的 state 里
    */
    return (
      // 数据供应商 - 生产数据
      <Provider value={{ cartNum: this.state.cartNum}}>
        <div>
          <h1>父组件</h1>
          <button onClick={this.cartNumAdd}>增加 1</button>
          <button onClick={this.cartNumLess}>减少 1</button>
          <button onClick={() => { this.cartNumSet(100); }}>设置成100</button>
          <Son></Son>
          <Son2></Son2>
        </div>
      </Provider>
    );
  }
}

export default App;
