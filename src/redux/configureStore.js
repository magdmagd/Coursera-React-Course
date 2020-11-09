//import {createStore} from 'redux';
//import { Reducer, initialState } from './reducer'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from  'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from './dishes';
import { Dishes2 } from './dishes2';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => 
{
    const store = createStore(
         combineReducers({
            dishes: Dishes,
            dishes2: Dishes2,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}//end ConfigureStore


/**
 * Update Many Stores
 * const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );
 * 
 */