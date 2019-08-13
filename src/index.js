import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header'
import MainSession from './components/mainSession'

// redux相关包的引入
import {createStore,applyMiddleware} from "redux"//引入applyMiddleware
import reducer from "./reducer/index"
import { Provider } from "react-redux"
// 引入中间件相关
import { createLogger } from "redux-logger"
// 任何对state的修改之前都会顺序执行中间件
let store = createStore(reducer,applyMiddleware(createLogger())); 
render(<div>
        <Provider store={store}>
            <div className="names">
                <Header></Header>  
                <MainSession/> 
            </div>
        </Provider>
    </div>,document.getElementById('app'))
