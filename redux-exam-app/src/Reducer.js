//state와 state에 대한 기능 리듀서에서 만들어진다.

//state 의 초기값을 객체로 만들어 준다.
const initstate ={
    todos:[],
}

//여기서 state = todos[] 가 된다.
export const TodoReuducer = (state=initstate,action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return{
                //이전의 todo들 전부 불러오기
                ...state,
                //+지금 작성한 todo 추가하기.
                    //아까 작석한 action에 있는 payloar(데이터값)에서 값을 꺼내서 대입하기.
                todos:[...state.todos,{id:action.payload.id,text:action.payload.text}]
            }

        case 'REMOVE_TODO' :
            return{
                //이전의 todo들 전부 불러오기
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.id)
            }
        default :
            return state

    }
}