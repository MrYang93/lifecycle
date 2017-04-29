import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';
// render(<App/>, document.getElementById('app'));

import App from './App';
import './main.css';

ReactDOM.render(
  <App/>, document.getElementById('app')
);


//做到实时监听
//npm i -D webpack-dev-server 下载插件，
//配置文件中复制webpack.config.js 改名为 webpack.dev.config.js 将文件下的module.exports 中的path 和publicPath [build]前加上/
//在取webpack.json 文件中的 scripts 下 添加"dev": "./node_modules/.bin/webpack-dev-server --config webpack.dev.config.js"
