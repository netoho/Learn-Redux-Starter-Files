/**
 * Created by neto on 16/06/16.
 */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const routeReducer = combineReducers({posts, comments, routing: routerReducer});

export default routeReducer;