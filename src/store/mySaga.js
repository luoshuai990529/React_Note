import { takeEvery, takeLatest, put ,all} from "redux-saga/effects";
// import { takeEvery } from "redux-saga";
import { USER_LOGIN } from "./action/actionType";
import { changeAction } from "./action/actionCreator";
function newSetTiming(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ value: "张三", age: 18 });
    }, time);
  });
}

function* fetchData() {
  console.log("拦截处理");
  // 进行异步拦截处理
  const data = yield newSetTiming(1000);
  // 保存异步数据调用put方法，这里相当于调用dispatch(changeAction(data))
  yield put(changeAction(data));

  /* 
        如果我们只需要保存一个数据，那么通过put即可，
        如果我们需要保存多个数据，进行派发,那么我们就必须借助另一个函数，all()

        yield all([
            yield put(changeAction(data1));
            yield put(changeAction(data2));
            yield put(changeAction(data3));
        ])
  */
}

export default function* mySaga() {
  // 通过takeEvery或者takeLatest来指定要拦截的action 类型
  // 并且指定拦截这个类型的action之后给谁来处理
  //  yield takeLatest(USER_LOGIN, fetchData);
  /* 
    区别：
        takeEvery :每次拦截到对应类型的action，都会完整的执行监听方法
        takeLatest：每次拦截到对应的action，都不能够保证一定能够完整的执行监听方法
        
        也就是说当我们如果连续多次收到同一个类型的action，那么takeEvery会将所有的监听到的方法
        全部执行完毕，但是takeLatest则是如果上一次的监听方法还没执行完，又监听到了同一个类型的
        action，那么上一次的直接放弃执行，直接执行下一次的，这个取决于网络速度。
  */
  yield takeEvery(USER_LOGIN, fetchData);
  
  /* 
     如果我们只需要拦截一个类型的action，那么通过yield takeEvery/yield takeLatest即可，
     如果我们需要同时拦截多个类型的action,那么我们就必须借助另一个函数，all()

        yield all([
            yield takeEvery(USER_LOGIN, fetchData);
            yield takeEvery(COUNT_ADD, fetchData);
            yield takeEvery(COUNT_LESS, fetchData);
        ])
  */

}
