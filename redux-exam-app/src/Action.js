export const addTodo = (id,text) =>(
    {
        type: 'ADD_TODO',
        payload : {id:id, text:text}
    }
)

//함수를 ()로 감싸면 객체를 바로 반환 하는 화살표 함수다.
//만약 {}를 사용한다면 return 을 사용하면 된다.
export const removeToto = (id) => (
    {
        type : 'REMOVE_TODO',
        payload : id
    }
)