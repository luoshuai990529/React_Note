import React from "react";

class Mouse extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    // this.state {x:0,y:0}
    // this.props.render = mouse =>{ <Cat mouse={mouse} /> }
    return (
      <>
        <div
          style={{ height: "100vh", background: "#0094ff", opacity: "0.4" }}
          onMouseMove={this.handleMouseMove}
        >
          {/* 现在鼠标的位置：{this.state.x},{this.state.y} */}
          {/* <Cat  mouse={this.state.mouse} /> */}
          {/* 使用render props */}
          {this.props.render(this.state)}
        </div>
      </>
    );
  }
}

class Cat extends React.Component {
  render() {
    console.log(this.props.mouse);
    return (
      <>
        <div
          style={{
            background: "hotpink",
            width: "20px",
            height: "20px",
            position: "absolute",
            left: this.props.mouse.x,
            top: this.props.mouse.y,
          }}
        ></div>
      </>
    );
  }
}

function NewMouse() {

  /* 
  将 Render Props 与 React.PureComponent 一起使用时要小心
  如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 React.PureComponent 带来的优势。
  因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 render 对于 render prop 将会生成一个新的值。
  */
  return (
    <>
      <h2>具有 render prop 的组件接受一个返回 React 元素的函数，并在组件内部通过调用此函数来实现自己的渲染逻辑。使用 Render Props 来解决横切关注点</h2>
      <p>更具体地说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。</p>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </>
  );
}

export default NewMouse;
