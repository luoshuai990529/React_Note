import React, { Component } from 'react';
import axios from "axios";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// import { HashRouter as Router, Link, Route } from 'react-router-dom'


class Demoa extends Component {
    componentDidMount() {
        // 发送axios请求
        axios.get("/api/test.json").then((res) => {
            console.log(res.data);
        })
    }
    render() {
        return <div>
            {/* <Get url="http://localhost:4000/arr" >
                {(error, response, isLoading, onReload) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (<div >{response.data.map(item => <p key={item}>{item}</p>)} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get> */}
        </div>
    }
}

class App extends React.Component {

    render() {
        return (
            <div id="app">
                <Demoa></Demoa>
            </div>
        )
    }
}

export default App