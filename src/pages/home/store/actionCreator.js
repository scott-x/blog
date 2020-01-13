/*
* @Author: sottxiong
* @Date:   2019-12-27 17:47:11
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-28 17:39:31
*/
import axios from 'axios';
import { actionType } from './index';
// import { fromJS } from 'immutable';

const renderDetail = (data) => ({
	type: actionType.RENDER_DETAIL,
	title: data.title,
	content: data.content
})
export const getDetailData = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then(res=>{
			const result = res.data.data;
			dispatch(renderDetail(result))
		})
	}
}