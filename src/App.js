import React from 'react';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home'

//App 入口文件,被Provider包裹的组件都有能力拿到store里的数据
function App() {
  return (
    <Provider store={store}>
       <div>
          <GlobalStyle />
           <GlobalIcon/>
      
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home} />
            </div>
          </BrowserRouter>
       </div>
    </Provider>
  );
}

export default App;
