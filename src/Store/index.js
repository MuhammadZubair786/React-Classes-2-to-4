import Reducer from './Reducers'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const Store = createStore(Reducer,applyMiddleware(thunk))
export default Store 