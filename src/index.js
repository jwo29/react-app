import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// App을 id가 root인 곳에 render(출력)한다
// 웹에 출력 -> ReactDom, 모바일에 출력 -> ReactNative
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
