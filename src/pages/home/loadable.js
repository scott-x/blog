import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../common/loading';

const LoadableComponent = Loadable({
  loader: () => import('./index'), //不同于上面那个import，是一个异步加载的语法
  loading: Loading, //页面加载需要时间，在页面渲染出来之前会展示这个组件
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}