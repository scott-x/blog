/*
* @Author: sottxiong
* @Date:   2019-12-24 05:18:47
* @Last Modified by:   scottxiong
* @Last Modified time: 2020-01-13 17:43:56
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav
} from './style';

import { actionCreator }  from './store';

//当组件只有一个render方法时，就是一个无状态组件
class Header extends Component{

	render(){
		return (
			<HeaderWrapper>
				<Logo/>
				<Link to='/'><Nav>首页</Nav></Link>
				<Link><Nav>推荐</Nav></Link>
				<Link><Nav>分类</Nav></Link>
			</HeaderWrapper>	
		)	
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = (dispatch) => ({
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);