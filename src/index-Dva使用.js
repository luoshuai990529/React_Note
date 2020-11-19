import React from "react";
// 导入dva
import dva, { connect } from "dva";
// 导入路由
import { Router, Route,routerRedux ,Link } from 'dva/router';


function newSetTiming(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "张三", age: 18 });
    }, time);
  });
}


//1、创建实例对象
// 创建实例的时候我们，可以传入我们想指定的路由模式，如果不传就默认是hash模式
// 导入路由模式：import createHistory from 'history/createBrowserHistory';
// 例：const app = dva({history: createHistory()});
let app = dva();

// 定义Model
/* 
  namespace 表示在全局 state 上的 key
  state 是初始值，在这里是空数组
  reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
*/
let HomeModel = {
  // 每一个model都可以有一个namespace命名空间属性，用来区分不同的Model
  namespace: "home",
  state: {
    num: 10,
    info:{
      name:"",
      age:""
    }
  },
  reducers: {
    increase: (state,action) => {
      return {...state, num: state.num + action.num };
    },
    reduce: (state,action) => {
      return {...state, num: state.num - action.num };
    },
    changeInfoAction:(state,action)=>{
      console.log({...state,info:action.info});
      return {...state,info:action.info}
    }
  },
  // 发送异步action
  effects:{
    // 这里会拦截effects中的asyncGetInfo类型的action
    *asyncGetInfo(state,{put}){
      console.log("拦截asyncGetInfo");
       // 进行异步拦截处理
      const data = yield newSetTiming(1000);
      // 保存异步数据调用put方法，这里相当于调用dispatch(changeInfoAction(data))
      yield put({type:"changeInfoAction",info:data});
    }
  },
  // 每次进入页面 只要调用了app.start 就会执行subscriptions
  subscriptions: {
    setup({ history, dispatch }) {
      console.log("执行setup");
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        document.title = pathname
      });
    },
    change({ history, dispatch }) {
      console.log("执行change");
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
      });
    },
  },
};

let AboutModel = {
  // 每一个model都可以有一个namespace命名空间属性，用来区分不同的Model
  namespace: "about",
  state: {
    count: 10,
  },
  reducers: {
    increase: (state,action) => {
      return {...state, count: state.count + action.count };
    },
    reduce: (state,action) => {
      return {...state, count: state.count - action.count };
    },
  },
};

// 调用app实例的model方法  传入我们定义好的Model
app.model(HomeModel);
app.model(AboutModel);

function Home(props) {
  console.log("home",props);
  return (
    <div>
      <h2>num:{props.num}</h2>
      <button onClick={()=>{props.add()}}>增加</button>
      <button onClick={()=>{props.less()}}>减少</button>
      <hr/>
      <h2>name:{props.info.name}</h2>
      <h2>age:{props.info.age}</h2>
      <button onClick={()=>{props.getUserInfo()}}>发送异步action</button>
      {/* 编程试跳转 */}
      <button onClick={()=>{props.jumpToAbout()}}>跳转到About路由</button>
    </div>
  );
}

const mapStateToProps1 = function (state) {
  return { num:state.home.num ,info:state.home.info};
};
const mapDispatchToProps1 = function (dispatch) {
  return {
    add: () => {
      dispatch({ type: "home/increase", num: 1 });
    },
    less: () => {
      dispatch({ type: "home/reduce", num: 1 });
    },
    getUserInfo:()=>{
      dispatch({type:"home/asyncGetInfo"})
    },
    jumpToAbout:()=>{
      dispatch(routerRedux.push('/about'))
    }
  };
};
// 调用connect 将mapStateToProps1和mapDispatchToProps1映射到Home组件中
const DvaHome = connect(mapStateToProps1, mapDispatchToProps1)(Home);


function About(props) {
  console.log("about",props);
  return (
    <div>
      <h2>count:{props.count}</h2>
      <button onClick={()=>{props.add()}}>增加</button>
      <button onClick={()=>{props.less()}}>减少</button><br/>
      <button onClick={()=>{props.goBack()}}>返回上一次goBack</button>
      <hr/>
    </div>
  );
}

const mapStateToProps2 = function (state) {
  return { count:state.about.count };
};
const mapDispatchToProps2 = function (dispatch) {
  return {
    add: () => {
      dispatch({ type: "about/increase", count: 2 });
    },
    less: () => {
      dispatch({ type: "about/reduce", count: 2 });
    },
    goBack:()=>{
      dispatch(routerRedux.goBack())
    }
  };
};
// 调用connect 将mapStateToProps2和mapDispatchToProps2映射到about组件中
const DvaAbout = connect(mapStateToProps2, mapDispatchToProps2)(About);



// 2.定义组件
function App(props) {
  return (
    <div>
      <h1>dva</h1>
      {/* <DvaHome />
      <hr/>
      <DvaAbout/> */}
      
      <Router history={props.history}>
        <>
        <p>通过link路由跳转</p>
        <Link to={'/about'}>About</Link>
        <Link to={'/home'}>Home</Link>
        <Route path="/home" component={DvaHome} />
        <Route path="/about" component={DvaAbout} />
        </>
      </Router>
    </div>
  );
}

//3.注册路由表，告诉dva需要渲染哪个组件，函数返回的值就是渲染的组件
// dva的router方法值执行回调函数的时候回传递一个对象给我们，我们可以从中解构出当前的路由模式
// 如果在创建dva实例的时候没有指定模式，那么得到的就是hash模式
// 如果在创建dva实例的时候制定了模式，那么就是我们指定的模式
app.router(({history}) => <App history={history}/>);
// 4.启动dva
app.start("#root");
