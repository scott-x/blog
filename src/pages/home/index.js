/*
* @Author: sottxiong
* @Date:   2019-12-25 13:38:11
* @Last Modified by:   scottxiong
* @Last Modified time: 2020-01-13 17:43:16
*/
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { withRouter } from 'react-router-dom';

import {
	HomeWrapper,
	Content
} from './style';

class Home extends PureComponent {
	render() {
		// console.log(this.props.match.params.id);
	
		return (
			<HomeWrapper>
				home
			</HomeWrapper>
		)
	}

}

const mapStateToProps = (state)=> ({
	
})

const mapDispatchToProps = (dispatch) => ({
	
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));