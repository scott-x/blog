import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as headerReducer} from '../common/header/store';
// as是es6语法，可以把reducer取个别名
//redux-immutable 把state变成immutable对象

const reducer = combineReducers({
    home: homeReducer,
	header: headerReducer
})

export default reducer;