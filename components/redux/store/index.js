import { createStore } from 'redux'
import reducer from '../reducer'


const initialState = {
    user: {}


}

export const store = createStore(reducer, initialState)