import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import testReducer from '../../features/sandbox/testReducer';

export default function configureStore() {
    return createStore(testReducer, devToolsEnhancer())
}
