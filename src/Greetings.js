import React from 'react'

//함수형 컴포넌트의 정의
//컴포넌트의 이름을 정의할 때 대문자로 시작한다.
//let props = {name:"John"}
export  function Greeting(props){
    //하나의 루트요소만 반환할 수 있다.
    //여러 요소를 반환할 때는 반드시 하나의 요소로 감싸야 한다.
    return <h1>Hello, {props.name}</h1>
}

export  function Farewell(props={}){
    //props={} 의 뜻은
    //값이 안들어오면 오른쪽을 사용, 값이 들어오면 왼쪽 사용이다.

    //props로 들어올때 초기값을 주려면.
        //1. props를 빈객체를 받게 해놓고.
        //2. 기본값을 표기해준다.
            //구조분해 할당에서 =은 대입연산자의 역할이 아니라 
            // 기본값을 표기하는 역활
    const {name="홍길동"} = props; 

    return <h1>Goodbye, {name}</h1>
}