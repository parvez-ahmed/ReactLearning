import { createStore } from 'redux'
import { rootReducer } from './reducer/index';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)


export {
    store
}