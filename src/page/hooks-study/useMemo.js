import React, { useState, useMemo } from "react";

/* 
  当我们父组件App中的值发生了变化，子组件Btn所有用到的函数都会执行
  而我们在函数式组建中没有shouldComponentUpdate，我们可以用useMemo来
  提升性能进行优化
*/
const App = () => {
    const [num, setNum] = useState(0);
    const [time, setTime] = useState(0);
    const [goods, setGoods] = useState(0);
    return (
        <React.Fragment>
            <h1 style={{fontSize:'16px',background:'#eee'}}>{'useMemo(()=>{ },[依赖值]) ：只有在这个依赖变化的时候我才执行其中的函数'}</h1>
            <h1 style={{fontSize:'16px',background:'#eee'}}>{'useCallback(()=>{},[依赖值]) ：让对应的函数，只有在其依赖发生变化的时候，才重新定义'}</h1>
            <h1 style={{fontSize:'16px',background:'#eee'}}>{'和useMemo的区别：useCallBack返回的永远是一个函数，而useMemo是return返回的是什么那useMemo返回的就是什么'}</h1>
            <div>

                {/* goods 只在 父组件中使用 */}
                <h2 onClick={() => setGoods(goods + 10)}>点我 goods {goods} </h2>
                {/* 修改了 num , time */}
                <h2 onClick={() => setNum(num + 1)}>点我 num {num} </h2>
                <h2 onClick={() => setTime(Date.now())}>点我 time {time} </h2>
                {/* 把 num 和 time 状态传递给 Btn 子组件 */}
                <Btn num={num} time={time} />
            </div>
        </React.Fragment>
    );
};

const Btn = ({ num, time }) => {
    const numChange = () => {
        console.log("numChange");
        return num;
    };
    const timeChange = () => {
        console.log("timeChange");
        return time;
    };
    // 使用useMemo进行优化，只有当我们改变了的数据对应的函数，我们才触发

    // 1 只有 num 发生改变了才 更新数据
    const otherNum = useMemo(numChange, [num]);
    // 2 只有 time 发生改变了才 更新数据
    const othertime = useMemo(timeChange, [time]);

    //   不使用useMemo：   
    //   const otherNum = numChange();
    //   const othertime = timeChange();


    return (
        <div>
            <h1>------以下结构为子组件-------</h1>
            <h1>num:{otherNum}</h1>
            <h1>time:{othertime}</h1>
        </div>
    );
};
export default App;
