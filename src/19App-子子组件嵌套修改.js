import React from 'react';
// 创建上下文环境
const AppContext = React.createContext();

// 解构出数据供应商 - 数据生产者
const { Provider } = AppContext;

class Son extends React.Component {
  static contextType = AppContext;
  render() {
    console.log('Son的context', this.context);
    return (
      <div>
        <h2>--子组件--</h2>
        <h3>上下文的数据：{this.context.cartNum}</h3>
        <SonSon></SonSon>
      </div>
    );
  }
}

class SonSon extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <h3>--子子组件--</h3>
        <h4>上下文的数据：{this.context.cartNum}</h4>
        <button onClick={this.context.cartNumAdd}>子组件增加 1</button>
        <button onClick={this.context.cartNumLess}>子组件减少 1</button>
        <button onClick={() => { this.context.cartNumSet(100); }}>子组件设置成100</button>
      </div>
    );
  }
}

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
    return (
      // 数据供应商 - 生产数据
      <Provider value={{
        cartNum: this.state.cartNum,
        cartNumAdd: this.cartNumAdd,
        cartNumLess: this.cartNumLess,
        cartNumSet: this.cartNumSet,
      }}>
        <div>
          <h1>父组件</h1>
          <Son></Son>
        </div>
      </Provider>
    );
  }
}

export default App;