import ContextStudy from '../page/context-study'
import HocStudy from '../page/hoc-study'
import ReduxDemo1 from '../page/redux-study/demo1'
import ReduxDemo2 from '../page/redux-study/demo2'
import ReduxDemo3 from '../page/redux-study/demo3'
import useState from '../page/hooks-study/useState'
import useStateOrigin from '../page/hooks-study/useStateOrigin'
import useEffect from '../page/hooks-study/useEffect'
import useLayoutEffect from '../page/hooks-study/useLayoutEffect'
import useEffectDemo from '../page/hooks-study/useEffectDemo'
import useContext from '../page/hooks-study/useContext'
import useMemo from '../page/hooks-study/useMemo'
import useReducer from '../page/hooks-study/useReducer'
import useRef from '../page/hooks-study/useRef'
import forwardRef from '../page/hooks-study/forwardRef'
import renderProps from '../page/renderprops-study'
import customHook from '../page/hooks-study/customHooks'
import aHooks from '../page/hooks-study/aHooks'
import Portal from '../page/portal-study'
import reactVirtualized from '../page/react-virtualized'
import immutability from '../page/immutability不可变性/immutability'
import lifecycle from '../09App-生命周期'
const routes = [
    {
      path:'/',
      redirect:'/redux/demo1'
    },
    {
        path: '/redux',
        children:[
            {
                name:'redux-demo1',
                path:'/demo1',
                component:ReduxDemo1
            },
            {
                name:'redux-demo2',
                path:'/demo2',
                component:ReduxDemo2
            },
            {
                name:'redux-demo3',
                path:'/demo3',
                component:ReduxDemo3
            }
        ]
    },
    {   
        name:'context上下文',
        path: '/context',
        component: ContextStudy,
    },
    {   
        name:'高阶组件HOC',
        path: '/hoc',
        component: HocStudy,
    },
    {
        path: '/hooks',
        children:[
            {
                name:'useState',
                path:'/use-state',
                component:useState
            }
            ,
            {
                name:'useState源码中的链表',
                path:'/use-state-origin',
                component:useStateOrigin
            },
            {
                name:'useEffect',
                path:'/use-effect',
                component:useEffect
            },
            {
                name:'useLayoutEffect',
                path:'/use-layout-effect',
                component:useLayoutEffect
            },
            {
                name:'useEffect-demo',
                path:'/use-effect-demo',
                component:useEffectDemo
            },
            {
                name:'useMemo',
                path:'/use-memo',
                component:useMemo
            },
            {
                name:'useReducer',
                path:'/use-reducer',
                component:useReducer
            },
            {
                name:'useRef',
                path:'/use-ref',
                component:useRef
            },{
                name:'forwardRef',
                path:'/forward-ref',
                component:forwardRef
            },
            {
                name:'useContext',
                path:'/use-context',
                component:useContext
            },
            {
                name:'自定义hook',
                path:'/custom-hook',
                component:customHook
            },
            {
                name:'aHooks使用',
                path:'/ahooks',
                component:aHooks
            }
        ]
    },
    {   
        name:'renderProps',
        path: '/render-props',
        component: renderProps,
    },
    {   
        name:'ReactDOM.createPortal',
        path: '/Portal',
        component: Portal,
    },
    {   
        name:'虚拟化列表',
        path: '/reactVirtualized',
        component: reactVirtualized,
    },
    {   
        name:'immutability不可变性',
        path: '/immutability',
        component: immutability,
    },
    {
        name:"生命周期顺序",
        path:'/lifecycle',
        component:lifecycle
    }
]

export default routes