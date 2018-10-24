/* deoendencies */
import { combineReducers } from 'redux';
import session from './session/SessionReducer';
import {routerReducer} from 'react-router-redux'
/* const */
const main = combineReducers({session});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
