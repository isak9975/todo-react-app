//store
//애플리케이션의 상태를 저장하는 객체
//Redux에서 스토어를 생성하기 위한 createStroe를 import함
import { combineReducers, createStore } from "redux";

//리듀서도 import한다.
import { counterReducer } from "./Reducer";
import { userReducer } from "./useReducer";

//counterReducer를 스토어에 인자로 전달하여 상태 변경 로직을 정의한다.
//스토어는 어플리케이션 전체의 상태를 관리하고,
//액션이 발생하면 리듀서를 통해 상태를 업데이트한다.

//combineReducers()
//여러개의 리듀서를 하나의 루트 리듀서로 결합해주는 함수
const rootReducer = combineReducers({
    count : counterReducer,
    user : userReducer
})
const store = createStore(rootReducer);

//하나의 Reducer만 사용할경우.
// const store = createStore(counterReducer);


export default store;