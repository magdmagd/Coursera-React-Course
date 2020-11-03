import { DISHES } from '../shared/dishes';
import { DISHES2 } from '../shared/dishes2';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


export const initialState = 
{
    dishes: DISHES,
    dishes2: DISHES2,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};//end initialState


export const Reducer = (state = initialState, action) => 
{
    
    return state;
};//end reducer 