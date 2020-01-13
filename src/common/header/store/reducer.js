import * as actionType from './actionType';
import { fromJS } from 'immutable'; //fromJS可以把js对象转化为immutable对象

//immutable库
//immutable对象

const defaultStore = fromJS({

});

//reducer是个纯函数，没有任何副作用
export default (state = defaultStore, action)=> {
	switch(action.type){
		default:
			return state;
	}
}