import { actionType } from './index';
import { fromJS } from 'immutable'; //fromJS可以把js对象转化为immutable对象,不同于List，是所有转化额

const defaultStore = fromJS({
	
});

export default (state = defaultStore, action)=> {
	switch(action.type){
		
		default:
			return state;
	}
}

				