import React, { useRef, forwardRef, Fragment } from "react";

class ParentOne extends React.Component {
  constructor() {
    super();
    this.state = {
      inpRef: null,
    };
  }

  componentDidMount() {
    const inpRef = React.createRef();
    this.setState({ inpRef });
  }
  changeColor() {
    const {inpRef} = this.state
    inpRef.current.style.backgroundColor='#0094ff'
  }

  render() {
    const { inpRef } = this.state;
    return (
      <Fragment>
        <ChildrenOne refs={inpRef} />
        <button
          onClick={() => {
            this.changeColor();
          }}
        >
          改变子组件颜色
        </button>
      </Fragment>
    );
  }
}
class ChildrenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div ref={this.props.refs}>ChildrenOne类子组件</div>;
  }
}

const ChildrenFn = forwardRef((props,ref)=>{
    return <div ref={ref}>
        函数式子组件
    </div>
})

function ParentFn(){
    const divRef = useRef()

    function changeColor(){
        divRef.current.style.backgroundColor = 'yellow'
    }

    return <div>
        <ChildrenFn ref={divRef}/>
        <button onClick={()=>{changeColor()}}>点击修改子组件颜色</button>
    </div>
}

function App() {
  return (
    <div>
      <h3>类组件：</h3>
      <ParentOne />
      <hr/>
      <h3>函数式组件通过forwardRef进行ref转发：</h3>
      <ParentFn />
    </div>
  );
}

export default App;
