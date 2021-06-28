import React, { useEffect } from 'react';
import { useState, memo, useMemo, useCallback } from 'react';
import produce from "immer"
/* 
    不可变性指的是不直接修改数据，而是使用新的数据替换旧的数据。（不可变数据（immutable data）：就是一旦创建，就不能更改的数据。）
    (确保旧的state对象不被修改。这样做可以保证 应用的状态的可预测、可追溯，也方便设计Redo/Undo功能。)
    Redo/Undo:实现界面操作过程的撤销和恢复
    不可变性带来的优势：
        1-撤销和回退操作在开发中是很常见的，不直接在数据上进行修改，可以帮助我们更好的回溯数据。
        2-更容易跟踪数据的改变。
        3-方便确定React重新渲染的时机。
    
    State改变：
        当某个组件的 state 发生改变时，组件在更新的时候将会经历如下过程：
        shouldComponentUpdate
        componentWillUpdate
        render()
        componentDidUpdate

        一般状态更新通过this.setState更新状态，这是一个异步操作，他只是执行将要修改的状态放在一个执行队列中
        React 会出于性能考虑，把多个 setState 的操作合并成一次进行执行。
    
    Props改变：
        当 props 更新时，子组件将会渲染更新，其运行顺序如下：
        componentWillReceiveProps (nextProps)
        static getDerivedStateFromProps()
        shouldComponentUpdate
        componentWillUpdate
        render
        getSnapshotBeforeUpdate()
        componentDidUpdate

    React 的组件更新过程：
        当某个 React 组件发生更新时（state 或者 props 发生改变），React 将会根据新的状态构建一棵新的 Virtual DOM 树，
        然后使用 diff 算法将这个 Virtual DOM 和 之前的 Virtual DOM 进行对比，如果不同则重新渲染。
        React 会在渲染之前会先调用 shouldComponentUpdate 这个函数是否需要重新渲染，React 中 shouldComponentUpdate 函数的默认返回值是 true，
        所以组件中的任何一个位置发生改变了，组件中其他不变的部分也会重新渲染。
        具体更新过程链路源码解读：https://github.com/SunShinewyf/issue-blog/issues/42
        源码简要分析：
        1.updateComponent函数： 主要是判断是 state 还是 props 引起的变化
                1-如果是props引起的变化，则执行实例的 componentWillReceiveProps() ，否则直接进行第二步
                2-然后再判断实例是否提供了 shouldComponentUpdate 方法，如果提供，则直接调用。
                3-否则再判断是否使用了 PureComponent, 如果使用了，则使用浅比较来判断是否更新。
                4-当前面两者都不满足，则执行 performComponentUpdate。 
                        继续追踪代码，会发现 performComponentUpdate 里面调用了 _updateRenderdComponent
                        _updateRenderedComponent 里又调用了 _updateRenderedComponentWithNextElement ，
                        _updateRenderedComponentWithNextElement 里面 又通过 shouldUpdateReactComponent（React.Component 在这里使用了深比较）
                        然后之后的更新流程就是使用 diff 算法来比较两次的 Virtual DOM 是否改变从而执行更新操作。

    当组件渲染很复杂的时候,比如一个很多节点的树形组件，当更改某一个叶子节点的状态时，整个树形都会重新渲染，即使是那些状态没有更新的节点，
    这在某种程度上耗费了性能，导致整个组件的渲染和更新速度变慢，从而影响用户体验。基于这个性能问题，所以 React 又推出了 PureComponent

    利用上述两种方法虽然可以避免没有改变的元素发生不必要的重新渲染，但是使用上面的这种浅比较还是会带来一些问题：
    假如传给某个组件的 props 的数据结构如下所示：
        const data = {
        list: [{
            name: 'aaa',
            sex: 'man'
        },{
            name: 'bbb',
            sex: 'woman'
        }],
        status: true,
        }
    原因：由于上述的 data 数据是一个引用类型，当更改了其中的某一字段，并期望在改变之后组件可以重新渲染的时候，发现使用 PureComponent 的时候，
    发现组件并没有重新渲染，因为更改后的数据和修改前的数据使用的同一个内存，所有比较的结果永远都是 false, 导致组件并没有重新渲染。
    
    解决：要解决上面这个问题，就要考虑怎么实现更新后的引用数据和原数据指向的内存不一致，也就是使用Immutable数据，
        1-使用 lodash 的深拷贝
            通过深拷贝后两者指向不同的内存引用，自然在比较的时候返回的就是 false，但是有一个缺点是这种深拷贝的实现会耗费很多内存。
        2-使用 JSON.stringify() 
            这种方式其实就是深拷贝的一种变种形式，它的缺点除了和上面那种一样之外，还有两点就是如果你的对象里有函数,函数无法被拷贝下来，同时也无法拷贝 copyObj 对象原型链上的属性和方法
        3-使用 Object 解构 (ES6的语法，例： const newData =  {...data};) 
            当修改数据中的简单类型的变量的时候，使用解构是可以解决问题的,但是当修改其中的复杂类型的时候就不能检测到，它只能断掉一层引用 和Object.assign()一样只能断掉一层引用
        4-使用第三方库 immutability-helper
            
        5-第三方库 Immer（推荐）
            immer 是 mobx 的作者在 immutable 方面做的新的尝试。
            immer 可以以更方便的方式处理不可变数据，它基于 copy-on-write（写时复制） 机制来优化使用效率。
            与 immutable-js 最大的不同，immer 是使用原生数据结构的 API 而不是像 immutable-js 那样转化为内置对象之后使用内置的 API
    
    immer 原理解析 :https://juejin.cn/post/6844903577643646990#heading-10
        1-Immer 源码中，使用了一个 ES6 的新特性 Proxy 对象 生成代理
        2-getter 主要用来懒初始化代理对象，也就是当代理对象子属性被访问的时候，才会生成其代理对象。
        3-setter 递归父级不断浅拷贝 按需拷贝
        4-生成 Immutable 对象 ....
    */
function App() {
	const [info, setInfo] = useState({
		list: [
			{ name: 'zhangsan', age: 19,score:100},
			{ name: 'lisi', age: 20 ,score:65},
		],
		level: 1,
	});

	useEffect(() => {}, []);

    const setScroe = ()=>{
        const nextState = produce(info, draftState => {
            draftState.list.push({ name: 'wangwu', age: 21 ,score:99})
            draftState.level = 10
        })
        console.log('nextState---',nextState);
        setInfo(nextState)
    }
	return (
		<div className='container'>
			{info.list.map((item,index) => (
				<p key={index}>
					{item.name}--{item.age}---{item.score}
				</p>
			))}
            <button onClick={setScroe}>setScroe</button>
		</div>
	);
}

export default App;
