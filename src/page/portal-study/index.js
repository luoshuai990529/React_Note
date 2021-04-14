import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.scss'

function Modal(props) {
    const otherRoot = document.getElementById('app')
    // console.log(otherRoot);
    // 将props.children内容渲染到 otherRoot节点
    return otherRoot && ReactDOM.createPortal(props.children, otherRoot)
}

function Children(props) {

    const { isShow, setShowModal } = props
    return <React.Fragment>
        {
            isShow && <div className='modal'>
                <span>
                    <h2>我是Protal的子组件Children</h2>
                    <button onClick={() => { setShowModal(false) }}>Click Me Hide Modal</button>
                </span>
            </div>
        }
    </React.Fragment>

}

function Protal() {

    const [isShow, setShowModal] = useState(false)

    const eventBubbling = ()=>{
        /* 
        尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致。
        由于 portal 仍存在于 React 树， 且与 DOM 树 中的位置无关，
        那么无论其子节点是否是 portal，像 context 这样的功能特性都是不变的。
        */
        console.log('触发eventBubbling事件');
    }

    return <React.Fragment>
        <h1 className='desc'>使用ReactDOM.createPortal将子节点渲染到存在于父组件以外的 DOM 节点</h1>
        <div className='tips' onClick={()=>{eventBubbling()}}>
            这是Protal父组件盒子，设置了overflow 为hidden,层级为999
        <button onClick={() => { setShowModal(true) }}>Click Me Show Modal</button>
            <Modal >
                <Children isShow={isShow} setShowModal={setShowModal}></Children>
            </Modal>
        </div>
    </React.Fragment>
}

export default Protal