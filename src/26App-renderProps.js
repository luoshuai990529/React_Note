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
            width: "10px",
            height: "10px",
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
  return (
    <>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </>
  );
}

export default NewMouse;
