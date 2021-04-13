import ContextStudy from '../page/context-study'
import HocStudy from '../page/hoc-study'
import ReduxDemo1 from '../page/redux-study/demo1'
import ReduxDemo2 from '../page/redux-study/demo2'
import ReduxDemo3 from '../page/redux-study/demo3'
import useState from '../page/hooks-study/useState'
import useEffect from '../page/hooks-study/useEffect'
import useEffectDemo from '../page/hooks-study/useEffectDemo'
import useContext from '../page/hooks-study/useContext'
import useMemo from '../page/hooks-study/useMemo'
import useReducer from '../page/hooks-study/useReducer'
import useRef from '../page/hooks-study/useRef'
import renderProps from '../page/renderprops-study'
import customHook from '../page/hooks-study/customHooks'
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
            },
            {
                name:'useEffect',
                path:'/use-effect',
                component:useEffect
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
            }
        ]
    },
    {   
        name:'renderProps',
        path: '/render-props',
        component: renderProps,
    },
]

export default routes