import React, { Component } from "react";

class Home extends Component {
  state = {
    inpVal: "",
    historyList: []
  };

  inpHandler = (e) => {
    let value = e.target.value;
    this.setState({
      inpVal: value
    })
  }

  // 搜索触发事件
  onSecHandler = async () => {
    if (!this.state.inpVal) return;
    // 添加到第一个
    let serchList = [this.state.inpVal, ...this.state.historyList]
    let newArr = [...new Set(serchList)]
    // 限制长度
    if(newArr.length>5) newArr.length = 5;
    await this.setState({
      historyList: newArr,
      inpVal: ""
    })
    console.log(this.state.historyList);

  }

  keyDownHandle = (e) => {
    // console.log(e.keyCode);//回车键13
    if (e.keyCode === 13) {
      this.onSecHandler()
    }
  }

  delHandler=(index)=>{
      this.state.historyList.splice(index,1)
      this.setState({
        historyList:this.state.historyList
      })
  }


  render() {
    return (
      <React.Fragment>
        <input onKeyDown={this.keyDownHandle} type="text" value={this.state.inpVal} onChange={this.inpHandler} /><button onClick={this.onSecHandler}>搜索</button>
        <p>{this.state.inpVal}</p>
        <h3>搜索历史记录：</h3>
        <ul>
          {
            this.state.historyList.map((item,index) => <li key={item}>{item} <button onClick={()=>{this.delHandler(index)}}>删除</button></li>)
          }
        </ul>
      </React.Fragment>
    )
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
