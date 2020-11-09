import React, { Component } from "react";
// 1 引入 prop-types
// import PropTypes from "prop-types";

class TitleCon1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      color:""
    }
  }

  clickHandler = (color) => {
    this.setState({
      color:color
    })
  };

  render() {
    // {this.clickHandler.bind(this,"gold")}:推荐这个写法
    return <h1 onClick={this.clickHandler.bind(this,"gold")} style={{color:this.state.color}}>{this.props.children}</h1>;
  }
}
class TitleCon2 extends Component {
  constructor(props) {
    super(props);
    this.state={
      color:""
    }
  }

  clickHandler = (color) => {
    this.setState({
      color:color
    })
  };

  render() {
    // {()=>{this.clickHandler("#0094ff")}} :不推荐，容易导致意外情况  
    return <h1 onClick={()=>{this.clickHandler("#0094ff")}} style={{color:this.state.color}}>{this.props.children}</h1>;
  }
}
TitleCon2.defaultProps={
  color:"tomato"
}

class Home extends Component {
  state = {
    color1: "skyblue",
    color2: "hotpink",
  };
  render() {
    return (
      <React.Fragment>
        <TitleCon1 >点我变蓝色！</TitleCon1>
        <TitleCon2 >点我变粉色！</TitleCon2>
      </React.Fragment>
    );
  }
}
function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
