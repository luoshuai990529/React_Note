import React from 'react';
import './App.scss'
import routes from './router/index'
//hash模式
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'

const App = () => {

    
    return <div id="app">
        <Router>
            <div className='sider-bar'>
                {
                    routes.map((item) => {
                        const path = item.path
                        if (item.children && item.children.length > 0) {
                            return <React.Fragment key={item.path}>
                                {
                                    item.children.map(item=>{
                                        const secondPath = path+item.path;
                                        return <div className='router-item' key={item.path} ><Link to={secondPath} >{item.name}</Link></div>
                                    })
                                }
                            </React.Fragment>
                        } else {
                            if(!item.name){return false}
                            return <div className='router-item' key={item.path} ><Link to={path} >{item.name}</Link></div>
                        }
                    })
                }
            </div>
            <div className='content'>
                {
                    routes.map((item) => {
                        const path = item.path
                        if(item.redirect){
                            return <Redirect key={item.path}  path={path} to={item.redirect}></Redirect>
                        }
                        if (item.children && item.children.length > 0) {
                            return <React.Fragment key={item.path}>
                                {
                                    item.children.map(item=>{
                                        const secondPath = path+item.path;
                                        return <Route key={item.path} path={secondPath} exact component={item.component}></Route>
                                    })
                                }
                            </React.Fragment>
                        } else {
                            return <Route key={item.path} path={item.path} exact component={item.component}></Route>
                        }
                    })
                }
            </div>
        </Router>
    </div>
}
export default App