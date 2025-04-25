import {createStore} from 'redux'
import { TodoReuducer } from './Reducer'

export const store = createStore(TodoReuducer)