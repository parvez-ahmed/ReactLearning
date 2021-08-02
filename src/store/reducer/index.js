import { combineReducers } from 'redux'
import { campaignReducer } from './campaignReducer';

const rootReducer = combineReducers({
    campaign:campaignReducer
})


export {
    rootReducer
}
